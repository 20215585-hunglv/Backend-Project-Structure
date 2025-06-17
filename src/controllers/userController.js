const connection = require('../config/database');
const { getAllUserFromDB } = require('../services/userService');

const getStarted = async (req, res) => {
    let user = await getAllUserFromDB();
    return res.render('home.ejs', { users: user });
}

const getVbee = (req, res) => {
    res.render('vbee.ejs')
}

const getCreateUserPage = (req, res) => {
    res.render('createUserPage.ejs');
}

const postcreateuser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`, [email, name, city],
    );

    res.send('create sucsess');
}

module.exports = {
    getStarted,
    getVbee,
    postcreateuser,
    getCreateUserPage,
};