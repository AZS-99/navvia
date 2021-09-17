const pg = require('pg')
const Sequelize = require('sequelize')
pg.defaults.ssl = process.env.NODE_ENV === 'production'? {rejectUnauthorized: false} : false

const database = new Sequelize(process.env.DATABASE_URL)

const employees = require('./employees')(database, Sequelize)

module.exports.initialise = async () => {
    try { await database.sync() }
    catch (e) { throw e }
}


module.exports.add_employee = async (employee) => {
    try {
        employee.forename = employee.forename.toLowerCase()
        employee.surname = employee.surname.toLowerCase()
        employee.company = employee.company.toLowerCase()
        await employees.create(employee)
    } catch (e) { throw e}
}