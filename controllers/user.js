const User = require('../models/User.js')

const addUser = (req, res, next) => {
    console.log(req.body);
    const { username,
        password,
        firstName,
        lastName,
        dateOfBirth,
        email,
        telephone,
        gender } = req.body;

    const newUser = new User({
        username,
        password,
        firstName,
        lastName,
        dateOfBirth,
        email,
        telephone,
        gender
    })
    newUser.save((err, user) => {
        try {
            newUser.save()
            return res.status(200).json({ success: true , data:user});
        } catch (err) {
            return res.status(400).json({ success: false, message: "Register fehler" + err });
        }
    });

}

const getUsers = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Fehler beim user listen"
            });
        }
        return res.status(200).json({
            success: true,
            data: users
        });
    });
}

module.exports = {
    addUser,
    getUsers,
}