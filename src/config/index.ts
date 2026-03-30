import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
};

function loadEnv() {
    dotenv.config();
}

loadEnv();

export const ServerConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};