function changeColor()
{
	var color = prompt("Please enter a color name:");
	var page = document.getElementsByTagName("body");
	page[0].style.backgroundColor = color;
}