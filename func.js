var getCoordInDocumentExample = function(){
	var coords = document.body;
	coords.onmousemove = function(e){
		var pointer = getCoordInDocument(e);
		var image = document.getElementById("image");
		var image_box = document.getElementById("image_box");
		var rect = image_box.getBoundingClientRect();
		var center = {
			left: rect.left + (rect.right - rect.left) / 2,
			top: rect.top + (rect.bottom - rect.top) / 2
        }

		
		var max_margin_x = (rect.right - rect.left) / 3;
		var max_margin_y = (rect.bottom - rect.top) / 3;
		
		var x = pointer.x - center.left;
		var y = pointer.y - center.top;
		
		setTimeout(function (){
			if (x>=0){
				image.style.left = -(max_margin_x)*Math.exp(-x/max_margin_x/10) + max_margin_x;
			}else{
				image.style.left = (max_margin_x)*Math.exp(x/max_margin_x/10) - max_margin_x;
			}
			if (y>=0){
				image.style.top = -(max_margin_y)*Math.exp(-y/max_margin_y/10) + max_margin_y;
			}else{
				image.style.top = (max_margin_y)*Math.exp(y/max_margin_y/10) - max_margin_y;
			}
		}, 1);
		
	}	
}



var getCoordInDocument = function(e) {
	e = e || window.event;
	var x = e.pageX ;
	var y= e.pageY ;
	return {'x':x,'y':y};
}

function getElementAbsPos(e) 
{
    var t = e.offsetTop;
    var l = e.offsetLeft;
    while(e = e.offsetParent)
    {
        t += e.offsetTop;
    l += e.offsetLeft;
    }
 
    return {left:l,top:t};
}


window.onload = function(){
	getCoordInDocumentExample();
};
