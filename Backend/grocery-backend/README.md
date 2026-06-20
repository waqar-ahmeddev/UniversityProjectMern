# Grocery Backend (Express + MongoDB)

Yeh chota sa backend hai aapke MERN Grocery project ke liye. Isme **Products** aur **Cart** ka basic CRUD hai.

## Setup Steps

### 1. Dependencies install karo
```bash
cd grocery-backend
npm install
```

### 2. MongoDB Atlas se connection string lo
1. https://www.mongodb.com/cloud/atlas par jakar free account banao
2. Free cluster create karo (M0)
3. "Connect" button par click karo → "Drivers" select karo
4. Connection string copy karo (kuch is tarah ki hogi):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/grocerydb?retryWrites=true&w=majority
   ```
5. Apna username/password us string mein daal do
6. Network Access mein apna IP allow karo (ya "Allow from anywhere" select karo testing ke liye)

### 3. `.env` file banao
`.env.example` ko copy karke `.env` naam do, aur apni MongoDB URI daal do:
```bash
cp .env.example .env
```

`.env` file mein:
```
PORT=5000
MONGO_URI=<apni-mongodb-atlas-connection-string-yahan-daalo>
```

### 4. Server run karo
```bash
npm run dev
```
(nodemon use ho raha hai, agar nahi chahiye to `npm start` use karo)

Server `http://localhost:5000` par chalega.

---

## API Routes

### Products
| Method | Route | Kaam |
|--------|-------|------|
| GET | `/api/products` | Sare products laao |
| GET | `/api/products/:id` | Ek product laao |
| POST | `/api/products` | Naya product banao |
| PUT | `/api/products/:id` | Product update karo |
| DELETE | `/api/products/:id` | Product delete karo |

**POST body example:**
```json
{
  "name": "Apple",
  "price": 150,
  "category": "fruits",
  "image": "https://example.com/apple.jpg",
  "stock": 50,
  "description": "Fresh red apples"
}
```

### Cart
| Method | Route | Kaam |
|--------|-------|------|
| GET | `/api/cart/:sessionId` | Cart laao |
| POST | `/api/cart/:sessionId` | Cart mein item add karo |
| PUT | `/api/cart/:sessionId/:productId` | Quantity update karo |
| DELETE | `/api/cart/:sessionId/:productId` | Ek item remove karo |
| DELETE | `/api/cart/:sessionId` | Pura cart khali karo |

**`sessionId`** kya hai? Chunke login system nahi hai, isliye cart ko identify karne ke liye ek random ID use karo (e.g. React mein `localStorage` se ek random ID generate kar lo aur usko sessionId ki tarah backend ko bhejo). Agar baad mein login add karte ho, to is sessionId ko user ki actual ID se replace kar dena.

**POST `/api/cart/:sessionId` body example:**
```json
{
  "productId": "64f1a2b3c4d5e6f7a8b9c0d1",
  "quantity": 2
}
```

---

## React (Frontend) se connect kaise karein?

`axios` ya `fetch` use karo:

```js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Sare products laao
const getProducts = async () => {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
};

// Cart mein add karo
const addToCart = async (sessionId, productId, quantity) => {
  const res = await axios.post(`${API_URL}/cart/${sessionId}`, {
    productId,
    quantity,
  });
  return res.data;
};
```

Agar frontend deployed hai (GitHub Pages par) to backend ko bhi deploy karna hoga (e.g. Render, Railway, ya Cyclic — sab free hain) taake live frontend us backend se baat kar sake. `localhost:5000` sirf local testing ke liye chalega.
