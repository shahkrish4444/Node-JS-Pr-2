const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var user = [
    { name: 'Kevin', email: 'kevin@gmail.com', address: 'Surat', gender: 'Male', course: 'CS', hobby: 'Gaming,Writing,Traveling' },
    { name: 'Monil', email: 'monil@gmail.com', address: 'Vadodara', gender: 'Male', course: 'ELec Eng ..', hobby: 'Reading,Gaming,Traveling' },
    { name: 'Meet', email: 'meet@gmail.com', address: 'Delhi', gender: 'Male', course: 'Mech Engg ..', hobby: 'Reading,Gaming,Writing' },
    { name: 'Krish', email: 'krish@gmail.com', address: 'Mumbai', gender: 'Male', course: 'Civil Engg ...', hobby: 'Reading,Writing,Traveling' },
    { name: 'Jay', email: 'jay@gmail.com', address: 'Rajkot', gender: 'Male', course: 'Chem Engg ...', hobby: 'Reading,Gaming,Writing' }
]


app.get('/', function (req, res) {
    res.render('../Views/Pages/User', { User: user })
})
app.get('/adduser', function (req, res) {
    res.render('../Views/pages/AddUsers')
})
app.post('/adduser', function (req, res) {
    user.push(req.body)
    res.redirect('/')
})
app.get('/updateuser/:id', function (req, res) {
    var id = req.params.id
    var student = user[id]
    res.render('../Views/pages/UpdateUser', { user: student })
})
app.post('/updateuser/:id', function (req, res) {
    var id = req.params.id;
    user[id] = req.body
    res.redirect('/')
})
app.get('/deleteuser/:id', function (req, res) {
    var id = req.params.id
    user.splice(id, 1)
    res.redirect('/')
})
app.listen(7000, () => {
    console.log('App is running on port 7000..');
});