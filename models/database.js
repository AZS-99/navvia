const pg = require('pg')
const Sequelize = require('sequelize')
const {obj_toLowerCase} = require("../middlewares/helpers");
pg.defaults.ssl = process.env.NODE_ENV === 'production'? {rejectUnauthorized: false} : false

const database = new Sequelize(process.env.DATABASE_URL)

const employees = require('./employees')(database, Sequelize)

module.exports.initialise = async () => {
    try { await database.sync() }
    catch (e) { throw e }
}


module.exports.add_employee = async (employee) => {
    try {
        obj_toLowerCase(employee)
        await employees.create(employee)
    } catch (e) { throw e}
}


module.exports.delete_employee = async (employee_id) => {
    try { await employees.destroy({where: {id: employee_id}}) }
    catch (e) { throw e}
}


module.exports.get_employee = async (obj) => {
    try { return await employees.findOne({where: obj, raw: true}) }
    catch (e) { throw e }
}


module.exports.get_employees = async (obj) => {
    try { return await employees.findAll({where: obj, raw: true}) }
    catch (e) { throw e }
}


module.exports.update_employee = async (employee) => {
    try { await employees.update(employee, {where: {id: employee.id}}) }
    catch (e) { throw e }
}