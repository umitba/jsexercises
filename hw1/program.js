function createChessBoard()
{
	var numberOfSquares = document.getElementById("numberOfSquares").value;
	var unitSquareWidth = document.getElementById("unitSquareWidth").value;
	var htmlText = '';
	for (var i = 1; i<=numberOfSquares; i++)
	{
		for (var j = 1; j<=numberOfSquares; j++)
		{
			var colorName = '';
			var clearLine = '';
			if((i+j)%2 == 1)
			{
				colorName = 'black';
			}
			else
			{
				colorName = 'white';
			}
			
			if(j==numberOfSquares)
			{
				clearLine = "<div style='clear:both'></div>";
			}
			htmlText += "<div style='background-color:"+ colorName + ";width:" + unitSquareWidth + "px;height:" + unitSquareWidth + "px;float:left;'></div>" + clearLine;
		}
	}
	document.getElementById("containerId").innerHTML = htmlText;  
}
