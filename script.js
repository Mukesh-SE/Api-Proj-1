const exp = require("express")
const bodyparser = require("body-parser")
const request = require("request")


const app = exp()
const port = 5555;


app.use(exp.static("public"))
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
   var name = req.body.firstName
   var last = req.body.lastName
   var email = req.body.email

   
})

app.listen(port, function(){
   console.log("server is runing....... http://localhost:"+port+"/")
})