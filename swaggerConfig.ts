import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MyBrand Backend API',
      version: '1.0.0',
      description: 'Documentation for MyBrand Backend API',
    },
    servers: [
      {
        url: 'http://localhost:9090/api',
        description: "Local Server"
      },
      {
        url: 'https://mybrandbackend-4e8h.onrender.com/api',
        description: "Deployed Server"
      }
    ],
  },
  // apis: ['./src/routes/*.ts'],
  apis: ['./src/middlewares/swaggerAPIs.ts'],
};

const specs = swaggerJsdoc(options);

const swaggerSetup = (app: any) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerSetup;