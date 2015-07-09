var express	= require("express");
var bodyParser = require ("body-parser");

var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

var users = [
	{
		id: 1,
		username: "bob",
		firstname: "Bob",
		lastname: "Jones",
		age: 35
	},
	{
		id: 2,
		username: "joe",
		firstname: "Joe",
		lastname: "Smith",
		age: 23
	}
]
app.get("/users", function(req, res) {
	res.json(users);

app.post("/users", function(req, res){
	var newUser = req.body;
	users.push(newUser);

	res.json(newUser);
})

app.put("/users/:id", function(req, res) {
  // console.log("req.body: ", req.body);
  // console.log("req.params: ", req.params);
  
  var userId = parseInt(req.params.id);
  
  var targetUser = _.findWhere(users, {id:userId});
  
  targetUser.username = req.body.username;
  
  targetUser.firstname = req.body.firstname;
  
  targetUser.lastname = req.body.lastname;

  targetUser.age = req.body.age;
  
  res.json(targetUser);
});


app.delete('/users/:id', function(req, res) {
  // console.log("req.body: ", req.body);
  // console.log("req.params: ", req.params);
  
  var userId = parseInt(req.params.id);
  
  var targetUser = _.findWhere(users, {id:UserId});
  
  var index = users.indexOf(targetUser);
  
  Users.splice(index, 1);
  
  res.json(targetUser);
});

});
app.listen(3000);