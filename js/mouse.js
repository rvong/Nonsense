var mmLastUpdate = 0;
window.onmousemove = function(e) {
	if (e.timeStamp - mmLastUpdate > 33) {
		mmLastUpdate = e.timeStamp;
		$('#clientX').html(e.clientX);
		$('#clientY').html(e.clientY);
		$('#layerX').html(e.layerX);
		$('#layerY').html(e.layerY);
		$('#offsetX').html(e.offsetX);
		$('#offsetY').html(e.offsetY);
		$('#pageX').html(e.pageX);
		$('#pageY').html(e.pageY);
		$('#x').html(e.x);
		$('#y').html(e.y);
	}
}