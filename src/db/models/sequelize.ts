import { Sequelize } from "sequelize";
import { DBConfig } from "../../config/index.ts";

const sequelize = new Sequelize({
    host: DBConfig.DB_HOST,
    username: DBConfig.DB_USER,
    password: DBConfig.DB_PASSWORD,
    database: DBConfig.DB_NAME,
    dialect: 'mysql',
    logging: true, 
}
);

export default sequelize;
