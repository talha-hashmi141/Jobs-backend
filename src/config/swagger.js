import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

// Resolve absolute path to the routes directory so Swagger works on Vercel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const routesGlob = path.join(__dirname, "..", "routes", "*.js");

// Derive server URL for local and Vercel
const serverUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.SERVER_URL || `http://localhost:${process.env.PORT || 3001}`;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Jobs API",
      version: "1.0.0",
      description: "API documentation for Job posting CRUD with authentication (not included auth on get request)",
    },
    servers: [
      {
        url: serverUrl,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [routesGlob], // 👈 Swagger will scan your route files for annotations
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerUiMiddleware = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);
