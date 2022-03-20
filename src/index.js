const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config();

const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME

 const db_URL = `mongodb+srv://${db_user}:${db_pass}@${db_host}/${db_name}?retryWrites=true&w=majority`

 const db = mongoose.connect(db_URL, {useNewUrlParser: true});



module.exports = db;


  