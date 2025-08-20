// import app from "./app.js";
// import { config } from "./config/env.js";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


// app.get("/test-db", async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Database connection failed" });
//   }
// });

// app.listen(config.port, () => {
//   console.log(`🚀 Server running on http://localhost:${config.port}`);
// });
