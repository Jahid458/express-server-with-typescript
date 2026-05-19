import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  connsction_str: process.env.CONNDECTION_STR,
  port: process.env.PORT,
  jwtSecret:process.env.JWT_SECRET
};

export default config;
