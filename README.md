## MY BRAND Backend

This is the backend for the MY BRAND website, created by David TUYISHIME. It is written in TypeScript and uses Node.js for the server and MongoDB as the database.

### API Documentation

API documentation can be found on [https://mybrandbackend-bmve.onrender.com/api-docs](https://mybrandbackend-bmve.onrender.com/api-docs).

### Hosted Backend

The backend is hosted on [https://mybrandbackend-bmve.onrender.com/](https://mybrandbackend-bmve.onrender.com/).


### Installation

To use the backend:

1. Clone the repository:

```git clone https://github.com/ProgrammerDATCH/MyBrandBackend```

2. Install dependencies:
```npm install``

3. Test all endpoints:
```npm test``

4. Start the development server:
```npm run dev```

5. Start the production server:
```npm start```




### Endpoints

| NO | METHOD | ENDPOINT | STATUS | ACCESS | DESCRIPTION |
|----|--------|----------|--------|--------|-------------|
| 1  | POST   | /users/register | 200    | Public | Register a new user |
| 2  | GET    | /users/users     | 200    | Admin  | Get all users |
| 3  | POST   | /users/check     | 200    | User   | Check user status |
| 4  | POST   | /users/login     | 200    | Public | User login |
| 5  | PATCH  | /users/update    | 200    | User   | Update user information |
| 6  | DELETE | /users/delete    | 200    | Admin  | Delete user |
| 7  | POST   | /suggestion/add  | 200    | Public | Add a new suggestion |
| 8  | GET    | /suggestion/suggestions | 200 | Admin  | Get all suggestions |
| 9  | DELETE | /suggestion/delete     | 200 | Admin  | Delete a suggestion |
| 10 | POST   | /blog/add               | 200 | User   | Add a new blog |
| 11 | GET    | /blog/blogs             | 200 | Public | Get all blogs |
| 12 | GET    | /blog/{id}              | 200 | Public | Get a blog by ID |
| 13 | DELETE | /blog/delete            | 200 | Admin  | Delete a blog |
| 14 | POST   | /admin/check            | 200 | Admin  | Check admin status |
| 15 | POST   | /admin/login            | 200 | Admin  | Admin login |
| 16 | GET    | /admin/dashboard        | 200 | Admin  | Get dashboard statistics |

