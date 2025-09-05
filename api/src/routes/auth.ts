import { Hono } from "hono";
import { validator } from "hono/validator";
import { sign } from 'hono/jwt';
import { JWT_SECRET } from "../util/constants";
import { formatPhoneNumber } from '../util/phoneNumber';

const authRouter = new Hono();

function createOtpCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function createOtpExpiry() {
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 5); // OTP expires in 5 minutes
  return expiresAt;
}

// Login endpoint (MOCK VERSION - NO DATABASE)
authRouter.post(
  "/login",
  validator("json", (value, c) => {
    const { phoneNumber } = value;
    if (!phoneNumber) {
      return c.json({ message: "Phone number is required" }, 400);
    }
    return { phoneNumber };
  }),
  async (c) => {
    const { phoneNumber } = await c.req.json();
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    // Mock: Accept any phone number for demo purposes
    console.log(`Mock login attempt for: ${formattedPhoneNumber}`);
    
    const mockOtpCode = createOtpCode();
    const mockReference = `mock-ref-${Date.now()}`;

    // Mock: Log the OTP instead of sending SMS
    console.log(`Mock OTP for ${formattedPhoneNumber}: ${mockOtpCode}`);

    return c.json({
      message: "OTP sent successfully (MOCK)",
      reference: mockReference,
      mockOtp: mockOtpCode, // Include in response for demo purposes
    });
  }
);

// OTP resend endpoint (MOCK VERSION - NO DATABASE)
authRouter.post(
  "/otp/resend",
  validator("json", (value, c) => {
    const { reference } = value;
    if (!reference) {
      return c.json({ message: "Invalid reference" }, 400);
    }
    return { reference };
  }),
  async (c) => {
    const { reference } = await c.req.json();

    // Mock: Generate new OTP for demo
    const mockOtpCode = createOtpCode();
    console.log(`Mock OTP resend - Reference: ${reference}, New OTP: ${mockOtpCode}`);
    
    return c.json({
      message: "OTP resent successfully (MOCK)",
      reference: reference,
      mockOtp: mockOtpCode, // Include in response for demo purposes
    });
  }
);

// Verify endpoint (MOCK VERSION - NO DATABASE)
authRouter.post(
  "/verify",
  validator("json", (value, c) => {
    const { reference, code } = value;
    if (!reference || !code) {
      return c.json({ message: "Reference and code are required" }, 400);
    }
    return { reference, code };
  }),
  async (c) => {
    const { reference, code } = await c.req.json();

    // Mock: Accept any 6-digit code for demo purposes
    console.log(`Mock verify attempt - Reference: ${reference}, Code: ${code}`);
    
    if (code.length !== 6) {
      return c.json({ message: "Invalid code format" }, 400);
    }

    // Mock: Generate a demo JWT token
    const token = await sign({
      userId: "mock-user-123",
      phoneNumber: "+1234567890",
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hour
    }, JWT_SECRET);

    return c.json({
      message: "Successfully verified (MOCK)",
      token,
    });
  }
);

export default authRouter;