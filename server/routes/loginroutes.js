var mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  port: process.env.DB_PORT
}); 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected mysql server as id ' + connection.threadId);
});
exports.register = async function(req,res){
  let password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  const username = req.body.username;
  const email = req.body.email;
  password = encryptedPassword;
   
  connection.query('INSERT INTO users (email, password, username) VALUES (?,?,?)', [email,password,username], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
      }
  });
}

exports.login = async function(req,res){
  const email= req.body.email;
  let password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?',[email], async function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
      if(results.length >0){
        const comparision = await bcrypt.compare(password, results[0].password)
        if(comparision){
            res.send({
              "code":200,
              "success":"You are logged in successfully"
            })
        }
        else{
          res.send({
               "code":204,
               "success":"Email and password does not match"
          })
        }
      }
      else{
        res.send({
          "code":206,
          "success":"Email does not exits!"
            });
      }
    }
    });
}
