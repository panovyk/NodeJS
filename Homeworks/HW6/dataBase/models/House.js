module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('house', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
            type: DataTypes.INTEGER,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
           type: DataTypes.STRING,
           allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    });

    return House;

};