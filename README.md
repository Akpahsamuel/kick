# Kick 📱💰

**Bridging Traditional Phone Numbers with Decentralized Finance**

Kick is a revolutionary blockchain-based financial platform that makes cryptocurrency transactions as simple as sending a text message. By linking phone numbers directly to ENS (Ethereum Name Service) domains and crypto wallets, Kick eliminates the complexity of traditional crypto interactions.

## 🎯 What is Kick?

Kick transforms how people interact with cryptocurrency by:

- **📞 Phone-to-Wallet Mapping**: Send crypto using phone numbers instead of complex wallet addresses
- **🏷️ ENS Integration**: Each user gets an ENS subdomain (e.g., `5551234567.kick.eth`)  
- **⚡ Layer 2 Technology**: Fast, cheap transactions using L2 blockchain infrastructure
- **🛡️ Social Security**: Built-in approval and nomination systems for enhanced security
- **💸 User-Friendly Payments**: Venmo-like experience for crypto transactions

## 🏗️ Architecture

### Frontend (`/web`)
- **Next.js** web application with modern UI
- Login, dashboard, and transaction management
- Real-time transaction tracking

### Backend API (`/api`)
- **Hono** framework for fast, lightweight API
- JWT authentication with OTP verification
- Mock database layer for development/demo

### Smart Contracts (`/contracts`)
- **Durin Framework** for ENS L2 subdomain management
- Cross-chain compatibility
- Deployed on multiple L2 networks (Base, Arbitrum, Optimism, etc.)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kick
   ```

2. **Install dependencies**
   ```bash
   # Install API dependencies
   cd api && pnpm install
   
   # Install web dependencies  
   cd ../web && pnpm install
   ```

3. **Configure environment variables**
   ```bash
   # API configuration (api/.env)
   cd ../api
   echo 'CIRCLE_API_KEY=test_api_key_placeholder
   CIRCLE_ENTITY_SECRET=test_entity_secret_placeholder
   JWT_SECRET=development_jwt_secret_key
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres' > .env
   
   # Web configuration (web/.env.local)
   cd ../web
   echo 'NEXT_PUBLIC_API_BASE_URL=http://localhost:3001' > .env.local
   ```

4. **Start the servers**
   ```bash
   # Terminal 1: Start API server
   cd api && pnpm tsx src/index.ts
   
   # Terminal 2: Start web application
   cd web && pnpm dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:3001

## 🎮 Demo Mode

The current implementation runs in **demo mode** with mock authentication:

- **Login**: Enter any phone number to receive a mock OTP
- **Verification**: Use any 6-digit code to authenticate  
- **Dashboard**: Explore the UI and transaction features

*The mock OTP codes are logged to the API server console for testing.*

## 🔧 Key Features

### 📱 Phone Number Authentication
- OTP-based login system
- Phone number formatting and validation
- Secure JWT token generation

### 💳 Transaction Management  
- Send/receive crypto payments
- Payment request system
- Transaction history tracking
- Real-time status updates

### 👥 Social Security Features
- **Nominations**: Designate trusted contacts
- **Approvals**: Multi-signature-like security
- **Recovery**: Social account recovery options

### 🌐 ENS Integration
- Automatic ENS subdomain creation
- Phone-to-ENS mapping (e.g., `+1234567890.kick.eth`)
- Cross-chain name resolution

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Backend**: Hono, TypeScript, JWT Authentication
- **Database**: PostgreSQL with Drizzle ORM
- **Blockchain**: Ethereum, ENS, Layer 2 Networks
- **Smart Contracts**: Solidity, Foundry
- **Infrastructure**: Durin Framework for L2 ENS

## 🌍 Supported Networks

Kick leverages the Durin framework deployed on:

- **Mainnets**: Base, Arbitrum, Optimism, Scroll, Linea
- **Testnets**: Base Sepolia, Arbitrum Sepolia, Optimism Sepolia, etc.

## 🔮 Vision

Kick aims to make cryptocurrency as accessible as traditional payment apps like Venmo or Cash App, but with the benefits of decentralized finance:

- **No more copying wallet addresses**
- **Intuitive phone number-based transactions**  
- **Enhanced security through social features**
- **Global, permissionless financial access**

## 🤝 Contributing

This project was built for a hackathon and demonstrates the potential of bridging traditional communication methods with blockchain technology.

## 📄 License

MIT License - see LICENSE file for details

---

*Built with ❤️ for the future of decentralized finance*