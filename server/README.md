# Agency Blog Backend

Express.js backend for the Abhivrudhi Agency Blog Management System.

## Features
- Blog CRUD API
- JWT Authentication
- Image Uploads
- MongoDB Atlas Integration

## Environment Variables

Set these in Render Dashboard:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `ADMIN_USERNAME` | Admin login username |
| `ADMIN_PASSWORD` | Admin login password |
| `PORT` | Server port (default: 5000) |

## Deployment

This backend is configured for Render deployment.

### Build Command
```bash
npm install
```

### Start Command
```bash
node server.js
```
