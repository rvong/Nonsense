/** Handle 'F1 Help', Context menu. */
window.onhelp = function() { return false; }
window.oncontextmenu = function(e) { if (e.pageX <= 1 && e.pageY <= 1) return false; } // Disallow button, allow right click

/** Get keys */
window.onkeydown = handleDown;
window.onkeyup = handleUp;

function handleDown(e) {
	processLag(e);
	processDown(e);
	processBoth(e);
	handleKPS(e);
	doRawOutput(e, 'raw-output-down');
	if (! (e.ctrlKey)) return false; // Allow ctrl shortcuts
}

function handleUp(e) {
	//processLag(e);
	processUp(e);
	processBoth(e);
	doRawOutput(e, 'raw-output-up');
	if (! (e.ctrlKey)) return false; // Allow ctrl shortcuts
}

function doRawOutput(e, id) {
	var result = '';
	for (var i in e) result += i + ' => ' + e[i] + '&#10;';
	$('#' + id).html(result);
}

function processLag(e) {
	if (last.down == 0) last.down = e.timeStamp;
	last.lag = e.timeStamp - last.down + ' ms';
	$('#lbl-lag').html(last.lag);
	last.down = e.timeStamp;
}

function processDepress(e) {
	$('#lbl-depress').html(key[e.keyCode].upTime + ' ms');
}

function processDown(e) {
	key[e.keyCode].setDown(e);
	addEvent(e);
	updateInfoKey(e, 'down');
}

function processUp(e) {
	key[e.keyCode].setUp(e);
	processDepress(e);
	updateInfoKey(e, 'up');
}

function processBoth(e) {
	tot.events++;
	updateInfoTotal();
	updateInfoKey(e, 'lastkey');
}


function timeFormat(t) {
	var d = new Date(t);
	return d.getHours().pad(2) + ':' 
			+ d.getMinutes().pad(2) + ':'
			+ d.getSeconds().pad(2) + '.'
			+ d.getMilliseconds().pad(3);
}

Number.prototype.pad = function(n) {
	var s = '000' + this;
	return s.substr(s.length - n);
}

var tot = {
	current: 0,
	downs: 0,
	ups: 0,
	events: 0
};

var last = {
	down: 0,
	lag: 0
};

var records = {
	maxDown: 0,
	quickestPress: 0,
	longestPress: 0,
};

function updateInfoTotal() {
	$('#lbl-totaldown').html(tot.current);
	$('#lbl-downcount').html(tot.downs);
	$('#lbl-upcount').html(tot.ups);
	$('#lbl-eventcount').html(tot.events);
}

function updateInfoKey(e, t) {
	var pre = '#lbl-' + t + '-';
	$(pre + 'type').html(e.type);
	$(pre + 'keycode').html(e.keyCode + ' (' + toHex(e.keyCode) + ')');
	$(pre + 'name').html(key[e.keyCode].vk);
	$(pre + 'time').html(timeFormat(e.timeStamp));
	$(pre + 'loc').html(getKeyLocName(e));
}

function deleteRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
}

var listCount = 0;
function addEvent(e) {
	if (listCount > 100) $('#event-list tr').last().remove(); // Faster than :last
	listCount++;

	var row = '<tr><td>'+tot.events+'</td><td>'
			+ key[e.keyCode].desc + '</td><td>'
			+ e.keyCode + ' (' + toHex(e.keyCode) + ')' + '</td>'
			+ '<td>' + e.type + '</td><td>'
			+ timeFormat(e.timeStamp) + '</td>'
			+ '<td>' + getKeyLocName(e) + '</td>'
			+ '<td>depress</td>'
			+ '<td>' + last.lag + '</td></tr>';

	$('#event-list').prepend(row);

}
/*	// Fill events, JS create faster than jQuery prepend(html).
	// ********Really weird IE :hover bug.*****
	var row = document.createElement('tr');
	row.appendChild(genCell(tot.events));
	row.appendChild(genCell(key[e.keyCode].desc));
	row.appendChild(genCell(e.keyCode + ' (' + toHex(e.keyCode) + ')'));
	row.appendChild(genCell(e.type));
	row.appendChild(genCell(timeFormat(e.timeStamp)));
	row.appendChild(genCell(getKeyLocName(e), 'cell-loc'));
	row.appendChild(genCell('depress'));
	row.appendChild(genCell(last.lag));

	var eventList = document.getElementById('event-list');
	eventList.insertBefore(row, eventList.firstChild);
}

function genCell(text, cls) {
	var cell = document.createElement('td');
	var txt = document.createTextNode(text);
	cell.appendChild(txt);
	if (cls !== undefined) cell.className = cls;
	return cell;
}*/

function toHex(d) { return '0x' + d.toString(16).toUpperCase(); }

function getKeyLocName(e) {
	var loc = getKeyLocation(e);
	return locToName(loc) + ' (' + loc + ')';
}
function getKeyLocation(e) {
	if (e.location !== undefined) return e.location;
	if (e.keyLocation !== undefined) return e.keyLocation;
	return -1;
}

function locToName(loc) {
	var locMap = {
		0:'Standard',
		1:'Left',
		2:'Right',
		3:'Numpad',
		4:'Mobile',
		5:'Joystick'
	}
	
	if (loc >= 0 && loc <= 5)
		return locMap[loc];
	else
		return 'LOC_ERR';
}
	
