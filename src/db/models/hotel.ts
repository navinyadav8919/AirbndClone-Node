import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './sequelize.ts';

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare rating?: number;
    declare rating_count?: number;
}

Hotel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    rating: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true
    },
    rating_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

}, {
    tableName: 'hotels',
    sequelize: sequelize,
    underscored: true,
    timestamps: true,
});

export default Hotel;
