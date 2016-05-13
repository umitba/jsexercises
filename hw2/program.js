function createTriangle()
{
	var numberOfSquares = document.getElementById("numberOfSquares").value;
	var unitSquareWidth = document.getElementById("unitSquareWidth").value;
	var htmlText = '';
	for (var i = 1; i<=numberOfSquares; i++)
	{
		for (var j = 1; j<=i; j++)
		{
			var clearLine = '';
			if(j==i)
			{
				clearLine = "<div style='clear:both'></div>";
			}
			htmlText += "<div style='background-color:black;width:" + unitSquareWidth + "px;height:" + unitSquareWidth + "px;float:left;'></div>" + clearLine;
		}
	}
	document.getElementById("containerId").innerHTML = htmlText;
}