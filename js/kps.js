var kWait = 1700;
var kLast = 0;
var kBegin = 0;
var kCount = 0;
var kMeasure = false;

function handleKPS(e) {
	if (! kMeasure) {
		kMeasure = true;
		kBegin = e.timeStamp;
		$('#kps-status').html('Measuring..');
	}
	kLast = e.timeStamp;


	kCount++;
	kpsUpdate();
}

function calcKPS(cnt, samp) {
	var kps = (cnt / samp) * 1000;
	return parseFloat(kps.toFixed(2));
}
function kpsTimer() {	
	if (! kMeasure) return;
	var kNow = new Date().getTime();
	var kDiff = kNow - kLast;
	if (kDiff < kWait) return;

	//kpsUpdate();

	$('#kps-status').html('Ready');
	kMeasure = false;
	kCount = 0;
}

setInterval(kpsTimer, kWait);


function kpsUpdate() {
	var kSample = kLast - kBegin;
	if (kSample < 1000) kSample = 1000;
	$('#kps-sample').html(kSample + ' ms');
	$('#kps-count').html(kCount);

	var kps = calcKPS(kCount, kSample);
	$('#kps').html(kps);
	$('#kpm').html((kps*60).toFixed(1));
	$('#kph').html(Math.round(kps*3600));
}