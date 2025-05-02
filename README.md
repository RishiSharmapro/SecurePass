
# 🔐 SecurePass — Your Encrypted Password Manager  
SecurePass is a modern password management solution built with security, performance, and usability at its core. Designed for individuals who care about protecting their digital identity, SecurePass leverages modern web technologies to deliver a seamless and encrypted experience across platforms.

---

### 🚀 Tech Stack

- **Frontend:** React.js + Tailwind CSS  
- **Backend:** Express.js + Node.js  
- **Database:** MongoDB  
- **Security:** Web Crypto API (Client-Side Encryption), Login Authentication

---

### 🔑 Key Features

- **🔐 Login Authentication (NEW):**  
  Users must register and log in to access and manage their encrypted password vault. This provides an added layer of protection and account-based access.

- **🔒 End-to-End Encryption:**  
  All passwords are encrypted on the client-side using the Web Crypto API before being stored on the server, ensuring that even the server cannot read your passwords.

- **🗄️ Secure MongoDB Storage:**  
  Encrypted passwords are stored securely in MongoDB, tied to the authenticated user's account.

- **💾 Optional Local Storage:**  
  Store encrypted passwords locally in the browser for offline access and additional control.

- **🧠 User-Friendly Interface:**  
  Built with React.js and styled with Tailwind CSS to offer a clean, responsive UI.

- **🌐 Cross-Platform Access:**  
  Access your vault from any device securely through login credentials.

- **⚡ Fast & Lightweight:**  
  Minimalistic design optimized for performance and quick interactions.

---

### 🛠️ How It Works

1. **User Registration & Login:**  
   Users create an account and log in to access their secure vault.

2. **Client-Side Encryption:**  
   Passwords are encrypted in the browser before being sent to the backend.

3. **Secure Storage:**  
   The server stores only encrypted data, ensuring sensitive information is never exposed.

4. **Account-Scoped Data:**  
   Each user's data is stored and accessed independently based on authentication.

---

### 📦 Setup Instructions

Clone the repository:

```bash
git clone https://github.com/your-username/SecurePass.git
cd SecurePass
```

Install dependencies:

```bash
cd frontend && npm install
cd ../backend && npm install
```

Create a `.env` file in `/backend` with:

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the servers:

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run dev
```

---

### 🧪 Coming Soon

- Biometric authentication with WebAuthn  
- Master password encryption model  
- Password strength evaluation and suggestions  
- Secure sharing and export/import of credentials
