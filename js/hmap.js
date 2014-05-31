
var hmap = h337.create({
	'element': document.getElementById('keyboard'),
	'radius': 20,
	'opacity': 25
});

hmap.get('canvas').onclick = function(e) {
	hmap.store.addDataPoint(e.layerX, e.layerY);
};

function heatKey(k) {
	var id = '#vk-' + k;
	var x = $(id).offset().left + $(id).width() / 2 - $('#keyboard').offset().left;
	var y = $(id).offset().top + $(id).height() / 2 - $('#keyboard').offset().top;

	hmap.store.addDataPoint(Math.round(x), Math.round(y));
}

$('#hmap-checkbox').click(function(e) {
	hmap.toggleDisplay();
});

$('#btn-resetheatmap').click(function(e) {
	hmap.clear();
});


function showToast(text) {
	$('#toast').clearQueue().finish();
	$('#toast_text').html(text);
	$('#toast').fadeIn(200).delay(700).fadeOut(500);
}

showToast('Toast Message Test');