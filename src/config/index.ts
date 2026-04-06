import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
};

function loadEnv() {
    dotenv.config();
}

type DBConfig = {
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    
};

loadEnv();

export const ServerConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};

export const DBConfig: DBConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_NAME: process.env.DB_NAME || 'hotel_service_dev',
};