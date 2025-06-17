const connection = require('../config/database')
const getAllUserFromDB = async () => {
    let [results, fields] = await connection.query('select * from user');
    return results;
}

module.exports = {
    getAllUserFromDB,
};