
const axios = require('axios');



exports.homeRoute = (req, res) => {
    // res.render('index');
    axios.get('http://localhost:8080/api/users/')
        .then(function (response) {
            // console.log(response);
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        }
        )

}

exports.addUserRoute = (req, res) => {
    res.render('add_user');
}

exports.updateUserRoute = (req, res) => {
    axios.get('http://localhost:8080/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            // console.log(userdata.data);
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        }
        )
    // res.render('update_user');
}

exports.deleteUserRoute = (req, res) => {
    res.render('delete_user');
}

exports.allUsersRoute = (req, res) => {
   // res.render('index');
   axios.get('http://localhost:8080/api/users/')
   .then(function (response) {
       // console.log(response);
       res.render('index', { users: response.data });
   })
   .catch(err => {
       res.send(err);
   }
   )
}