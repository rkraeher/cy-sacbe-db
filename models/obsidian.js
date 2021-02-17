module.exports = function (sequelize, DataTypes) {
    const Obsidian = sequelize.define("Obsidian", {
        sample_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bag_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        operation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sub_operation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lot: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ceramic_complex: {
            type: DataTypes.STRING,
        },
        chronology: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.STRING,
        },
        length: {
            type: DataTypes.STRING,
        },
        width: {
            type: DataTypes.STRING,
        },
        thickness: {
            type: DataTypes.STRING,
        },
        notes: {
            type: DataTypes.STRING,
        },
    });
    return Obsidian;
};

//ok to have allowNull: false on all those fields/columns?
//sequelize assumes autoincrementing pk id attribute by default