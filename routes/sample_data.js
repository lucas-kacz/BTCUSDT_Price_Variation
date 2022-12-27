var express = require('express');

var router = express.Router();
var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM btcusdt;";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Price of the BTCUSDT Pair', action:'list', sampleData:data});
		}
	});
});

router.get("/anomaly", function(request, response, next){

	var query = "SELECT * FROM anomaly;";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Anomalies in the BTCUSDT Pair', action:'ask', sampleData:data});
		}
	});
});

router.get('/query', function(request, response, next){
    // Get the user input from the form submission
    const userInput = req.query.userInput;
  
    // Select rows from the table based on the user input
    database.query(`SELECT * FROM table WHERE column LIKE '%${userInput}%'`, (error, results) => {
        if (error) throw error;

        // Generate the HTML table
        let table = '<table>';
        table += '<tr>';
        // Add the table headers
        for (const column in results[0]) {
          table += `<th>${column}</th>`;
        }
        table += '</tr>';
        // Add the table rows
        for (const row of results) {
          table += '<tr>';
          for (const value in row) {
            table += `<td>${row[value]}</td>`;
          }
          table += '</tr>';
        }
        table += '</table>';
    
        // Send the HTML table back to the client
        // res.send(table);
        response.render('sample_data', {title:'Price of the BTCUSDT Pair', action:'list', sampleData:results});
      });
    });

module.exports = router;