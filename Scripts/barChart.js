	var barChartData = [ { value: 57, type: "on-time" }, 
					{ value: 8, type: "late" }, 
					{ value: 0, type: "" },
					{ value: 61, type: "on-time" }, 
					{ value: 12, type: "late" },  
					{ value: 0, type: "" },
					{ value: 45, type: "on-time" }, 
					{ value: 4, type: "late" } ];
					console.log("defined the data");
	d3.select(".barChart")
		.selectAll("div")
		.data(barChartData)
		.enter().append("div")
		.style("width", function(d) { return d.value * 3 + "px"; })
		.style("background-color", function(d) { return d.type == "on-time" ? "lightsteelblue" : "lightblue" })
		.text(function(d) { return d.value; });

		console.log("styled the bar chart");
