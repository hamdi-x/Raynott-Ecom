import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'raynott_super_secret';

app.use(cors());
app.use(express.json());

// In-memory "database"
let users = [
  { id: 1, name: 'Demo User', email: 'demo@raynott.com', password: 'demo123' }
];

let products = [
  {
    id: 1,
    name: 'Global Traveler Backpack',
    description: 'Durable, water-resistant backpack designed for international travelers with 3-year warranty.',
    price: 79.99,
    currency: 'USD',
    category: 'Accessories',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg',
    tags: ['travel', 'backpack', 'unisex']
  },
  {
    id: 2,
    name: 'Raynott Noise-Cancelling Headphones',
    description: 'Wireless over-ear headphones with active noise cancelling and 30 hours battery life.',
    price: 129.0,
    currency: 'USD',
    category: 'Electronics',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg',
    tags: ['audio', 'wireless', 'premium']
  },
  {
    id: 3,
    name: 'Smart Fitness Watch Pro',
    description: 'Track your health, workouts, and notifications with multi-language support.',
    price: 99.5,
    currency: 'EUR',
    category: 'Wearables',
    rating: 4.4,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    tags: ['fitness', 'watch']
  },
  {
    id: 4,
    name: 'ErgoFlex Office Chair',
    description: 'Ergonomic office chair with lumbar support designed for long international work sessions.',
    price: 199.99,
    currency: 'USD',
    category: 'Home & Office',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg',
    tags: ['office', 'chair']
  }
];

// Auth helpers
function generateToken(user) {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Raynott e-com API is running' });
});

// Auth routes
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const existing = users.find(u => u.email === email);
  if (existing) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password // NOTE: plain text for demo; in production, hash this!
  };
  users.push(newUser);
  const token = generateToken(newUser);
  res.status(201).json({
    message: 'Registered successfully',
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
    token
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = generateToken(user);
  res.json({
    message: 'Logged in successfully',
    user: { id: user.id, name: user.name, email: user.email },
    token
  });
});

// Products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Cart (demo - no DB)
app.post('/api/cart', authMiddleware, (req, res) => {
  const { items } = req.body;
  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Items array required' });
  }
  res.json({
    message: 'Cart updated (demo mode - not persisted)',
    items,
    user: req.user
  });
});

// Checkout (demo)
app.post('/api/checkout', authMiddleware, (req, res) => {
  const { total } = req.body;
  res.json({
    message: 'Checkout simulated successfully',
    total,
    currency: 'USD',
    status: 'success',
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Raynott e-com backend running on http://localhost:${PORT}`);
});
