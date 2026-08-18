# Letters to CR7

> **Every fan has a story. This is our chance to tell ours.**

**Letters to CR7** is an independent fan-made tribute to Cristiano Ronaldo — built to celebrate his journey, legacy, mentality, and the millions of people he has inspired around the world.

The platform allows Ronaldo fans from anywhere in the world to relive moments from his legendary career and leave their own personal letters to CR7.

 **Live Website:** https://letters-to-cr7-five.vercel.app/

---

## Why I Built This

There was a time when I never really imagined football without Cristiano Ronaldo.

But as his career moves closer to its final chapters, I started thinking about what his journey has meant to me.

Ronaldo has been more than a footballer I admire. His discipline, consistency, resilience, and relentless pursuit of greatness have influenced the way I approach my education, career, and life.

As a developer, I wanted to turn that feeling into something meaningful.

So I built **Letters to CR7**.

Not just for me, but for every fan who has a memory, a story, or simply two words they would like to tell him:

**Thank you.**

---

## Features

### Interactive Tribute

Explore a cinematic experience celebrating different chapters of Cristiano Ronaldo's football journey.

### Career Gallery

Relive unforgettable moments from one of football's greatest careers.

### Legacy

A dedicated section celebrating the records, achievements, mentality, and impact behind the number 7.

### Letters From Fans

Fans can write and publish personal messages to Cristiano Ronaldo without creating an account.

Each letter can include:

- Nickname
- Country
- Personal message
- Likes

Messages are limited to **500 characters**.

### Community Likes

Visitors can show appreciation for letters written by other Ronaldo fans.

### Admin Dashboard

A private admin system allows submitted letters to be moderated.

The dashboard includes:

- Secure admin authentication
- JWT-protected routes
- View submitted letters
- Search letters
- Delete inappropriate or spam messages
- Community statistics

### Spam Protection

The API includes protections against abuse, including:

- Rate limiting
- Server-side validation
- Maximum message length
- Minimum message length
- Input trimming
- Controlled/whitelisted request fields

### Responsive Design

The experience is designed for mobile, tablet, and desktop devices.

### Share the Tribute

Visitors can share Letters to CR7 with other fans using the device's native sharing functionality, with a copy-link fallback where necessary.

### Community Feedback

Fans can submit feedback to help improve the project and suggest what should be added next.

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Express Rate Limit

### Deployment

- **Frontend:** Vercel
- **Backend API:** Render
- **Database:** MongoDB Atlas

---

## Project Architecture

```text
letters-to-cr7/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── hero/
│       │   ├── intro/
│       │   ├── journey/
│       │   ├── gallery/
│       │   ├── legacy/
│       │   ├── letters/
│       │   ├── forever7/
│       │   └── footer/
│       │
│       ├── pages/
│       │   ├── Home.jsx
│       │   └── admin/
│       │
│       ├── services/
│       ├── data/
│       ├── App.jsx
│       └── main.jsx
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── scripts/
    ├── app.js
    └── server.js
```

> The exact folder structure may differ depending on how the frontend and backend repositories are organized.

---

## API

### Get All Letters

```http
GET /api/v1/letters
```

### Create a Letter

```http
POST /api/v1/letters
```

Example:

```json
{
  "nickname": "Albert",
  "country": "Nigeria",
  "message": "Thank you for inspiring an entire generation. SIUUU!"
}
```

### Like a Letter

```http
PATCH /api/v1/letters/:id/like
```

### Delete a Letter

Admin authentication required.

```http
DELETE /api/v1/letters/:id
```

### Admin Login

```http
POST /api/v1/admin/login
```

---

## Running Locally

### Clone the repository

```bash
git clone <your-repository-url>
cd letters-to-cr7
```

### Install frontend dependencies

```bash
npm install
```

### Start the frontend

```bash
npm run dev
```

If your backend is in a separate directory:

```bash
cd backend
npm install
npm run dev
```

---

## Environment Variables

Create the appropriate environment files for the frontend and backend.

### Frontend

```env
VITE_API_URL=http://localhost:5000
```

### Backend

```env
DATABASE=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
PORT=5000
```

Never commit real credentials, database passwords, or JWT secrets to GitHub.

---

## Future Improvements

Letters to CR7 will continue to evolve based on community feedback.

Possible future additions include:

- Improved letter discovery
- Better community moderation
- Performance improvements
- Additional career moments
- More sharing features
- Community-driven additions

---

## Contributing

Ideas, feedback, and improvements are welcome.

If you find a bug or have an idea that could improve the experience, feel free to open an issue or submit a pull request.

---

## Disclaimer

**Letters to CR7 is an unofficial, independent fan-made project.**

This project is not affiliated with, endorsed by, sponsored by, or officially connected to Cristiano Ronaldo or any football club, organization, brand, or representative associated with him.

All trademarks, names, images, and related intellectual property belong to their respective owners.

---

## Built By

**Albert Adekanye**

Frontend / Full-Stack Developer & Tech Creator

- Portfolio: https://codewithkanye-portfolio.vercel.app/
- GitHub: https://github.com/AlbertAdekanye
- YouTube: @codewithkanye

---

## For The Fans

Football gave us moments we will never forget.

Cristiano Ronaldo gave millions of people something even greater:

**belief.**

One player.  
One number.  
One unforgettable legacy.

**Forever Number 7.**

### SIUUUU!