// ⚠️ BAD EXAMPLE - This file contains hardcoded secrets for demo purposes
// Edit and save this file to trigger the security scanner hook

const express = require('express');
const app = express();

// 🚨 Hardcoded API key - NEVER do this!
const STRIPE_API_KEY = "sk_live_51HGe2CJa8jF3K9dL7mN2pQ4rS6tU8vW0xY1zA3bC5dE7fho";

// 🚨 Hardcoded AWS credentials
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPE";
const AWS_SECRET_ACCESS_KEY = "walrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";



// 🚨 Hardcoded database password
const DB_PASSWORD = "super_secret_db_password_123!";
const DATABASE_URL = "mongodb+srv://admin:MyP@ssw0rd123@cluster0.abc123.mongodb.net/production";

// 🚨 Hardcoded JWT secret
const JWT_SECRET = "my-ultra-secret-jwt-signing-key-do-not-share-2027";

// 🚨 GitHub personal access token
const GITHUB_TOKEN = "ghp__aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890";

app.get('/data', (req, res) => {
  // Using hardcoded secrets directly - terrible practice!
  res.json({ message: 'This file is full of secrets!' });
});

app.listen(3000);
