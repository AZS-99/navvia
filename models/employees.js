
module.exports = (database, Sequelize) => {
    return database.define('employees', {
        forename: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-z]{2,35}$/,
                    msg: ['Database rejected forename']
                }
            }
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-z]{2,35}$/,
                    msg: ['Database rejected forename']
                }
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                is: {
                    args: /^[0-9]{10}$/,
                    msg: ['Database rejected phone number']
                }
            }
        },
        company: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true
            }
        },
        role: Sequelize.ENUM('manager', 'senior', 'intermediate', 'junior', 'janitor', 'guard', 'hr'),
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    })
}