function initMouseEvent(){
	document.onmousedown = MouseDown;
	document.onmousemove = MouseMove;
	document.onmouseup = MouseUp;
}
function MouseDown(e){
	var x = e.clientX-mouseEventObject.offsetLeft-1;
	var y = e.clientY-mouseEventObject.offsetTop-1;
	mouseDown(x,y);
}
function MouseMove(e){
	var x = e.clientX-mouseEventObject.offsetLeft-1;
	var y = e.clientY-mouseEventObject.offsetTop-1;
	mouseMove(x,y);
}
function MouseUp(e){
	var x = e.clientX-mouseEventObject.offsetLeft-1;
	var y = e.clientY-mouseEventObject.offsetTop-1;
	mouseUp(x,y);
}
