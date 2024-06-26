## MY BRAND Backend

This is the backend for the MY BRAND website, created by David TUYISHIME. It is written in TypeScript and uses Node.js for the server and MongoDB as the database.

### API Documentation

API documentation can be found on [https://mybrandbackend-4e8h.onrender.com/api-docs](https://mybrandbackend-4e8h.onrender.com/api-docs).

### Hosted Backend

The backend is hosted on [https://mybrandbackend-4e8h.onrender.com/](https://mybrandbackend-4e8h.onrender.com/).


### Installation

To use the backend:

1. Clone the repository:

```bash 
git clone https://github.com/ProgrammerDATCH/MyBrandBackend
```

2. Rename `.example.env` to `.env` and add values for all variables:
```bash
JWT_KEY=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY_SECRET=
CLOUDINARY_API_KEY=
EMAIL_FROM_PASSWORD=
EMAIL_FROM=
MONGO_DB_URL=
LOCAL_MONGO_DB=
CLOUDINARY_URL=
```

3. Install dependencies:
```bash
npm install
```

4. Test all endpoints:
```bash
npm test
```

5. Start the development server:
```bash
npm run dev
```

6. Start the production server:
```bash
npm start
```




### Endpoints

| NO | METHOD | ENDPOINT | STATUS | ACCESS | DESCRIPTION |
|----|--------|----------|--------|--------|-------------|
| 1  | GET   | / | 200    | Public | Welcome To My Brand |
| 2  | POST   | /api-docs | 200    | Public | Swagger API Documentation |
| 3  | POST   | /api/users/register | 200    | Public | Register a new user |
| 4  | GET    | /api/users/users     | 200    | Admin  | Get all users |
| 5  | POST   | /api/users/check     | 200    | User   | Check user status |
| 6  | POST   | /api/users/login     | 200    | Public | User login |
| 7  | PATCH  | /api/users/update    | 200    | User   | Update user information |
| 8  | DELETE | /api/users/delete    | 200    | Admin  | Delete user |
| 9  | POST   | /api/suggestion/add  | 200    | Public | Add a new suggestion |
| 10  | GET    | /api/suggestion/suggestions | 200 | Admin  | Get all suggestions |
| 11  | DELETE | /api/suggestion/delete     | 200 | Admin  | Delete a suggestion |
| 12 | POST   | /api/blog/add               | 200 | User   | Add a new blog |
| 13 | GET    | /api/blog/blogs             | 200 | Public | Get all blogs |
| 14 | GET    | /api/blog/{id}              | 200 | Public | Get a blog by ID |
| 15 | DELETE | /api/blog/delete            | 200 | Admin  | Delete a blog |
| 16 | POST   | /api/admin/check            | 200 | Admin  | Check admin status |
| 17 | POST   | /api/admin/login            | 200 | Admin  | Admin login |
| 18 | GET    | /api/admin/dashboard        | 200 | Admin  | Get dashboard statistics |

