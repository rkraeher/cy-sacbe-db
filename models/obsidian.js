module.exports = function (sequelize, DataTypes) {
    const Obsidian = sequelize.define("Obsidian", {
        sample_number: {
            type: DataTypes.INTEGER,
        },
        site: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        bag_number: {
            type: DataTypes.INTEGER,
        },
        operation: {
            type: DataTypes.STRING,
        },
        sub_operation: {
            type: DataTypes.STRING,
        },
        unit: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.INTEGER,
        },
        lot: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
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