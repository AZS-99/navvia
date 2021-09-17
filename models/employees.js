const bcrypt = require('bcrypt')

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
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$&+,:;=?@#|<>.^*()%!_-]{8,30}$/,
                    msg: ['Database rejected password']
                }
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
        role: Sequelize.ENUM('MANAGER', 'SENIOR', 'INTERMEDIATE', 'JUNIOR', 'JANITOR', 'GUARD', 'HR'),
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    }, {
        hooks: {
            afterValidate: async (employees, options) => {
                employees.password = await bcrypt.hash(employees.password, Number(process.env.SALT_ROUNDS))
            }
        }
    })
}