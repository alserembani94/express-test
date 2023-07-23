require("dotenv").config();

const envList = [
  "PORT",
  "SESSION_SECRET",
  "DB_URL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GOOGLE_CALLBACK_URL",
] as const;
type EnvKey = (typeof envList)[number];

const env: NodeJS.ProcessEnv = process.env;

export default env;
