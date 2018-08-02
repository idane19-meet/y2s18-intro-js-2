var counter1 = 0;
var index = 0;
var colors = ["red","yellow","green","blue","purple"];

function changeColor()
{
	var page = document.getElementsByTagName("body");
	var i = 0;
	page[0].style.backgroundColor = colors[index];
	index++;
	if(index > colors.length)
	{
		index = 0;
	}
}
function counter()
{
	var arr = document.getElementsByTagName("h1");
	arr[1].innerHTML=counter1;
	counter1++;
}
function reset()
{
	counter1 = 0;
	var arr = document.getElementsByTagName("h1");
	arr[1].innerHTML=counter1;
}