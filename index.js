//requisit
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
const axios = require('axios');
app.set('view engine', 'ejs');
//search
app.get("/",function(req,res){
	res.render("search");
})

app.get("/request",function(req,res){
	console.log(req.query.search);
	var htmlWalaQuery = req.query.search;
	var url = "http://api.tvmaze.com/search/shows?q="+htmlWalaQuery;
	//console.log(url);
	axios.get(url)
	  .then(function (response) {
		// handle success
		//res.send(response.data[""][0]["name"])
	let showArray = [];
		response.data.map((shows)=>{
			showArray.push(shows);
		})
		res.render("request",{op : showArray});
		//console.log(response.data);
	  })
	  .catch(function (error) {
		// handle error
		 console.log(error+" SOMETHING WENT WRONG");
	
	  })
	  .then(function () {
		// always executed
	  });


})














app.listen(process.env.PORT, process.env.IP,function(){
	console.log("request recipe started");
})
