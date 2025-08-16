import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: string;
  DB_URL: string;
  NODE_ENV: "development" | "production";
  JWT_ACCESS_SECRET:string;
  JWT_ACCESS_EXPIRE:string;
  BCRYPT_SALT_ROUND:string;
  SUPER_ADMIN_EMAIL:string;
  SUPER_ADMIN_PASS:string
}

const loadEvnVariables = () : EnvConfig =>{

    const requiredEnvVariables: string[] = ["PORT", "DB_URL", "NODE_ENV", "SUPER_ADMIN_PASS", "SUPER_ADMIN_EMAIL", "BCRYPT_SALT_ROUND", "JWT_ACCESS_EXPIRE","JWT_ACCESS_SECRET"]
    requiredEnvVariables.forEach(key =>{
        if (!process.env[key]) {
            throw new Error(`missing environment variable ${key}`)
        }
    })

    return {
         PORT: process.env.PORT as string,
         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         DB_URL:process.env.DB_URL!,
         NODE_ENV:process.env.NODE_ENV as "development" | "production",
         BCRYPT_SALT_ROUND:process.env.BCRYPT_SALT_ROUND as string,
         JWT_ACCESS_EXPIRE:process.env.JWT_ACCESS_EXPIRE as string,
         JWT_ACCESS_SECRET:process.env.JWT_ACCESS_SECRET as string,
         SUPER_ADMIN_EMAIL:process.env.SUPER_ADMIN_EMAIL as string,
         SUPER_ADMIN_PASS:process.env.SUPER_ADMIN_PASS as string
    }
}

export const envVars = loadEvnVariables()
