module.exports = function(sequelize, DataTypes) {
    const MailingList = sequelize.define("MailingList", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return MailingList;
};