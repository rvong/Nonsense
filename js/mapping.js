var vkMap = {
	1:'VK_LBUTTON',
	2:'VK_RBUTTON',
	3:'VK_CANCEL',
	4:'VK_MBUTTON',
	5:'VK_XBUTTON1',
	6:'VK_XBUTTON2',
	7:'UNDEFINED',
	8:'VK_BACK',
	9:'VK_TAB',
	10:'RESERVED',
	11:'RESERVED',
	12:'VK_CLEAR',
	13:'VK_RETURN',
	14:'UNDEFINED',
	15:'UNDEFINED',
	16:'VK_SHIFT',
	17:'VK_CONTROL',
	18:'VK_MENU',
	19:'VK_PAUSE',
	20:'VK_CAPITAL',
	21:'VK_KANA', //VK_HANGUEL & VK_HANGUEL for IME Hanja
	22:'UNDEFINED',
	23:'VK_JUNJA',
	24:'VK_FINAL',
	25:'VK_KANJI', //VK_HANJA for IME Hanja
	26:'UNDEFINED',
	27:'VK_ESCAPE',
	28:'VK_CONVERT',
	29:'VK_NONCONVERT',
	30:'VK_ACCEPT',
	31:'VK_MODECHANGE',
	32:'VK_SPACE',
	33:'VK_PRIOR',
	34:'VK_NEXT',
	35:'VK_END',
	36:'VK_HOME',
	37:'VK_LEFT',
	38:'VK_UP',
	39:'VK_RIGHT',
	40:'VK_DOWN',
	41:'VK_SELECT',
	42:'VK_PRINT',
	43:'VK_EXECUTE',
	44:'VK_SNAPSHOT',
	45:'VK_INSERT',
	46:'VK_DELETE',
	47:'VK_HELP',
	48:'VK_0',
	49:'VK_1',
	50:'VK_2',
	51:'VK_3',
	52:'VK_4',
	53:'VK_5',
	54:'VK_6',
	55:'VK_7',
	56:'VK_8',
	57:'VK_9',
	58:'UNDEFINED',
	59:'UNDEFINED',
	60:'UNDEFINED',
	61:'UNDEFINED',
	62:'UNDEFINED',
	63:'UNDEFINED',
	64:'UNDEFINED',
	65:'VK_A',
	66:'VK_B',
	67:'VK_C',
	68:'VK_D',
	69:'VK_E',
	70:'VK_F',
	71:'VK_G',
	72:'VK_H',
	73:'VK_I',
	74:'VK_J',
	75:'VK_K',
	76:'VK_L',
	77:'VK_M',
	78:'VK_N',
	79:'VK_O',
	80:'VK_P',
	81:'VK_Q',
	82:'VK_R',
	83:'VK_S',
	84:'VK_T',
	85:'VK_U',
	86:'VK_V',
	87:'VK_W',
	88:'VK_X',
	89:'VK_Y',
	90:'VK_Z',
	91:'VK_LWIN',
	92:'VK_RWIN',
	93:'VK_APPS',
	94:'RESERVED',
	95:'VK_SLEEP',
	96:'VK_NUMPAD0',
	97:'VK_NUMPAD1',
	98:'VK_NUMPAD2',
	99:'VK_NUMPAD3',
	100:'VK_NUMPAD4',
	101:'VK_NUMPAD5',
	102:'VK_NUMPAD6',
	103:'VK_NUMPAD7',
	104:'VK_NUMPAD8',
	105:'VK_NUMPAD9',
	106:'VK_MULTIPLY',
	107:'VK_ADD',
	108:'VK_SEPARATOR',
	109:'VK_SUBTRACT',
	110:'VK_DECIMAL',
	111:'VK_DIVIDE',
	112:'VK_F1',
	113:'VK_F2',
	114:'VK_F3',
	115:'VK_F4',
	116:'VK_F5',
	117:'VK_F6',
	118:'VK_F7',
	119:'VK_F8',
	120:'VK_F9',
	121:'VK_F10',
	122:'VK_F11',
	123:'VK_F12',
	124:'VK_F13',
	125:'VK_F14',
	126:'VK_F15',
	127:'VK_F16',
	128:'VK_F17',
	129:'VK_F18',
	130:'VK_F19',
	131:'VK_F20',
	132:'VK_F21',
	133:'VK_F22',
	134:'VK_F23',
	135:'VK_F24',
	136:'UNASSIGNED',
	137:'UNASSIGNED',
	138:'UNASSIGNED',
	139:'UNASSIGNED',
	140:'UNASSIGNED',
	141:'UNASSIGNED',
	142:'UNASSIGNED',
	143:'UNASSIGNED',
	144:'VK_NUMLOCK',
	145:'VK_SCROLL',
	146:'VK_OEM_FJ_JISHO',
	147:'VK_OEM_FJ_MASSHOU',
	148:'VK_OEM_FJ_TOUROKU',
	149:'VK_OEM_FJ_LOYA',
	150:'VK_OEM_FJ_ROYA',
	151:'UNASSIGNED',
	152:'UNASSIGNED',
	153:'UNASSIGNED',
	154:'UNASSIGNED',
	155:'UNASSIGNED',
	156:'UNASSIGNED',
	157:'UNASSIGNED',
	158:'UNASSIGNED',
	159:'UNASSIGNED',
	160:'VK_LSHIFT',
	161:'VK_RSHIFT',
	162:'VK_LCONTROL',
	163:'VK_RCONTROL',
	164:'VK_LMENU',
	165:'VK_RMENU',
	166:'VK_BROWSER_BACK',
	167:'VK_BROWSER_FORWARD',
	168:'VK_BROWSER_REFRESH',
	169:'VK_BROWSER_STOP',
	170:'VK_BROWSER_SEARCH',
	171:'VK_BROWSER_FAVORITES',
	172:'VK_BROWSER_HOME',
	173:'VK_VOLUME_MUTE',
	174:'VK_VOLUME_DOWN',
	175:'VK_VOLUME_UP',
	176:'VK_MEDIA_NEXT_TRACK',
	177:'VK_MEDIA_PREV_TRACK',
	178:'VK_MEDIA_STOP',
	179:'VK_MEDIA_PLAY_PAUSE',
	180:'VK_LAUNCH_MAIL',
	181:'VK_LAUNCH_MEDIA_SELECT',
	182:'VK_LAUNCH_APP1',
	183:'VK_LAUNCH_APP2',
	184:'RESERVED',
	185:'RESERVED',
	186:'VK_OEM_1',
	187:'VK_OEM_PLUS',
	188:'VK_OEM_COMMA',
	189:'VK_OEM_MINUS',
	190:'VK_OEM_PERIOD',
	191:'VK_OEM_2',
	192:'VK_OEM_3',
	193:'VK_ABNT_C1',
	194:'VK_ABNT_C2',
	195:'UNASSIGNED',
	196:'UNASSIGNED',
	197:'UNASSIGNED',
	198:'UNASSIGNED',
	199:'UNASSIGNED',
	200:'UNASSIGNED',
	201:'UNASSIGNED',
	202:'UNASSIGNED',
	203:'UNASSIGNED',
	204:'UNASSIGNED',
	205:'UNASSIGNED',
	206:'UNASSIGNED',
	207:'UNASSIGNED',
	208:'UNASSIGNED',
	209:'UNASSIGNED',
	210:'UNASSIGNED',
	211:'UNASSIGNED',
	212:'UNASSIGNED',
	213:'UNASSIGNED',
	214:'UNASSIGNED',
	215:'UNASSIGNED',
	216:'UNASSIGNED',
	217:'UNASSIGNED',
	218:'UNASSIGNED',
	219:'VK_OEM_4',
	220:'VK_OEM_5',
	221:'VK_OEM_6',
	222:'VK_OEM_7',
	223:'VK_OEM_8',
	224:'RESERVED',
	225:'VK_OEM_AX',
	226:'VK_OEM_102',
	227:'VK_ICO_HELP',
	228:'VK_ICO_00',
	229:'VK_PROCESSKEY',
	230:'VK_ICO_CLEAR',
	231:'VK_PACKET',
	232:'UNASSIGNED',
	233:'VK_OEM_RESET',
	234:'VK_OEM_JUMP',
	235:'VK_OEM_PA1',
	236:'VK_OEM_PA2',
	237:'VK_OEM_PA3',
	238:'VK_OEM_WSCTRL',
	239:'VK_OEM_CUSEL',
	240:'VK_OEM_ATTN',
	241:'VK_OEM_FINISH',
	242:'VK_OEM_COPY',
	243:'VK_OEM_AUTO',
	244:'VK_OEM_ENLW',
	245:'VK_OEM_BACKTAB',
	246:'VK_ATTN',
	247:'VK_CRSEL',
	248:'VK_EXSEL',
	249:'VK_EREOF',
	250:'VK_PLAY',
	251:'VK_ZOOM',
	252:'VK_NONAME',
	253:'VK_PA1',
	254:'VK_OEM_CLEAR',
	255:'RESERVED'
}

var descMap = {
	1:'Left Mouse Button',
	2:'Right Mouse Button',
	3:'Control-break processing',
	4:'Middle Mouse Button',
	5:'X1 Mouse Button',
	6:'X2 Mouse Button',
	7:'UNDEFINED',
	8:'Backspace',
	9:'Tab',
	10:'RESERVED',
	11:'RESERVED',
	12:'Clear',
	13:'Enter',
	14:'UNDEFINED',
	15:'UNDEFINED',
	16:'Shift',
	17:'Ctrl',
	18:'Alt',
	19:'Pause',
	20:'Caps Lock',
	21:'IME Kana/Hangul Mode', //VK_HANGUEL & VK_HANGUEL for IME Hanja
	22:'UNDEFINED',
	23:'IME Junja Mode',
	24:'IME Final Mode',
	25:'IME Kanji Mode', //VK_HANJA for IME Hanja
	26:'UNDEFINED',
	27:'ESC',
	28:'IME Convert',
	29:'IME Nonconvert',
	30:'IME Accept',
	31:'IME Mode Change Request',
	32:'Spacebar',
	33:'Page Up',
	34:'Page Down',
	35:'End',
	36:'Home',
	37:'Left Arrow',
	38:'Up Arrow',
	39:'Right Arrow',
	40:'Down Arrow',
	41:'Select',
	42:'Print',
	43:'Execute',
	44:'Print Screen',
	45:'Insert',
	46:'Delete',
	47:'Help',
	48:'0',
	49:'1',
	50:'2',
	51:'3',
	52:'4',
	53:'5',
	54:'6',
	55:'7',
	56:'8',
	57:'9',
	58:'UNDEFINED',
	59:'UNDEFINED',
	60:'UNDEFINED',
	61:'UNDEFINED',
	62:'UNDEFINED',
	63:'UNDEFINED',
	64:'UNDEFINED',
	65:'A',
	66:'B',
	67:'C',
	68:'D',
	69:'E',
	70:'F',
	71:'G',
	72:'H',
	73:'I',
	74:'J',
	75:'K',
	76:'L',
	77:'M',
	78:'N',
	79:'O',
	80:'P',
	81:'Q',
	82:'R',
	83:'S',
	84:'T',
	85:'U',
	86:'V',
	87:'W',
	88:'X',
	89:'Y',
	90:'Z',
	91:'Left Windows',
	92:'Right Windows',
	93:'Applications',
	94:'RESERVED',
	95:'Sleep',
	96:'Numpad 0',
	97:'Numpad 1',
	98:'Numpad 2',
	99:'Numpad 3',
	100:'Numpad 4',
	101:'Numpad 5',
	102:'Numpad 6',
	103:'Numpad 7',
	104:'Numpad 8',
	105:'Numpad 9',
	106:'Multiply',
	107:'Add',
	108:'Separator',
	109:'Subtract',
	110:'Decimal',
	111:'Divide',
	112:'F1',
	113:'F2',
	114:'F3',
	115:'F4',
	116:'F5',
	117:'F6',
	118:'F7',
	119:'F8',
	120:'F9',
	121:'F10',
	122:'F11',
	123:'F12',
	124:'F13',
	125:'F14',
	126:'F15',
	127:'F16',
	128:'F17',
	129:'F18',
	130:'F19',
	131:'F20',
	132:'F21',
	133:'F22',
	134:'F23',
	135:'F24',
	136:'UNASSIGNED',
	137:'UNASSIGNED',
	138:'UNASSIGNED',
	139:'UNASSIGNED',
	140:'UNASSIGNED',
	141:'UNASSIGNED',
	142:'UNASSIGNED',
	143:'UNASSIGNED',
	144:'Num Lock',
	145:'Scroll Lock',
	146:'OEM Specific',
	147:'OEM Specific',
	148:'OEM Specific',
	149:'OEM Specific',
	150:'OEM Specific',
	151:'UNASSIGNED',
	152:'UNASSIGNED',
	153:'UNASSIGNED',
	154:'UNASSIGNED',
	155:'UNASSIGNED',
	156:'UNASSIGNED',
	157:'UNASSIGNED',
	158:'UNASSIGNED',
	159:'UNASSIGNED',
	160:'Left Shift',
	161:'Right Shift',
	162:'Left Control',
	163:'Right Control',
	164:'Left Menu',
	165:'Right Menu',
	166:'Browser Back',
	167:'Browser Forward',
	168:'Browser Refresh',
	169:'Browser Stop',
	170:'Browser Search',
	171:'Browser Favorites',
	172:'Browser Home',
	173:'Volume Mute',
	174:'Volume Down',
	175:'Volume Up',
	176:'Next Track',
	177:'Previous Track',
	178:'Stop Media',
	179:'Play/Pause Media',
	180:'Start Mail',
	181:'Select Media',
	182:'Start Application 1',
	183:'Start Application 2',
	184:'RESERVED',
	185:'RESERVED',
	186:';: (US)',
	187:'+',
	188:',',
	189:'-',
	190:'.',
	191:'/? (US)',
	192:'`~ (US)',
	193:'/? (Brazil)',
	194:'. (Brazil)',
	195:'UNASSIGNED',
	196:'UNASSIGNED',
	197:'UNASSIGNED',
	198:'UNASSIGNED',
	199:'UNASSIGNED',
	200:'UNASSIGNED',
	201:'UNASSIGNED',
	202:'UNASSIGNED',
	203:'UNASSIGNED',
	204:'UNASSIGNED',
	205:'UNASSIGNED',
	206:'UNASSIGNED',
	207:'UNASSIGNED',
	208:'UNASSIGNED',
	209:'UNASSIGNED',
	210:'UNASSIGNED',
	211:'UNASSIGNED',
	212:'UNASSIGNED',
	213:'UNASSIGNED',
	214:'UNASSIGNED',
	215:'UNASSIGNED',
	216:'UNASSIGNED',
	217:'UNASSIGNED',
	218:'UNASSIGNED',
	219:'[{ (US)',
	220:'\\| (US)',
	221:']} (US)',
	222:'\' \" (US)',
	223:'(Varies)',
	224:'RESERVED',
	225:'OEM Specific',
	226:'> < or \ (RT 102-key)',
	227:'OEM Specific',
	228:'OEM Specific',
	229:'IME Process',
	230:'OEM Specific',
	231:'(Unicode as Keystrokes)',
	232:'UNASSIGNED',
	233:'OEM specific',
	234:'OEM specific',
	235:'OEM specific',
	236:'OEM specific',
	237:'OEM specific',
	238:'OEM specific',
	239:'OEM specific',
	240:'OEM specific',
	241:'OEM specific',
	242:'OEM specific',
	243:'OEM specific',
	244:'OEM specific',
	245:'OEM specific',
	246:'Attn',
	247:'CrSel',
	248:'ExSel',
	249:'Erase EOF',
	250:'Play',
	251:'Zoom',
	252:'Reserved',
	253:'PA1',
	254:'Clear',
	255:'RESERVED'
}

var key = [];
for (var i = 1; i <= 255; i++)
	key[i] = new KeyStruct(i);
	
function KeyStruct(i) {
	this.vk = vkMap[i];
	this.desc = descMap[i];
	this.isDown = false;
	this.downTime = 0;
	this.upTime = 0;

	this.setDown = function(e) {
		heatKey(e.keyCode);

		tot.downs++;
		
		if (! this.isDown) {
			this.downTime = e.timeStamp;
			this.isDown = true;
			tot.current++;

			$('#markey-wrap div').last().remove();
			$('#markey-wrap').prepend('<div>'+ key[e.keyCode].desc +'</div>');

			var current = $('#txt-current').val();
			current += ' [ ' + key[e.keyCode].desc + ' ]';
			$('#txt-current').val(current);
			$('#txt-last').val(' ' + tot.current + ' Keys: ' + current);

			if (records.maxDown < tot.current) {
				records.maxDown = tot.current;
				$('#lbl-maxdown').html(records.maxDown);
				$('#txt-max').val(' ' + records.maxDown + ' Keys: ' + current);
			}

			var eLoc = getELoc(e);
			if (eLoc == NO_PAIR || eLoc == NUM_PAIR || (pairExists(e) && eLoc == LEFT_PAIR)) lightKeyDown(e.keyCode);
			if (pairExists(e) && (eLoc == NO_PAIR || eLoc == RIGHT_PAIR || eLoc == NUM_PAIR)) lightPairDown(e.keyCode);
			fixChromeMenuUp(e);
		}
	};
	
	this.setUp = function(e) {
		tot.ups++;

		if (this.isDown) {
			this.upTime = e.timeStamp - this.downTime;  // Depress time
			this.isDown = false;
			
			var current = $('#txt-current').val();

			current = current.replace(' [ ' + key[e.keyCode].desc + ' ]', '');
			$('#txt-current').val(current);;

			var eLoc = getELoc(e);
			if (eLoc == NO_PAIR || eLoc == NUM_PAIR || (pairExists(e) && eLoc == LEFT_PAIR)) lightKeyUp(e.keyCode);
			if (pairExists(e) && (eLoc == NO_PAIR || eLoc == RIGHT_PAIR || eLoc == NUM_PAIR)) lightPairUp(e.keyCode);

			tot.current--;
		}
		else
		{
			fixPrtScn(e);
		}
	};
}

function lightKeyDown(vk) { $('#vk-' + vk).stop(true, true).addClass('pressed'); }
function lightKeyUp(vk) { $('#vk-' + vk).stop(true, true).removeClass('pressed', 100, 'linear'); }
function lightPairDown(vk) {
	if (vk == LWIN) { lightKeyDown(RWIN); return; } // Firefox workaround.
	lightKeyDown('p' + vk);
}
function lightPairUp(vk) {
	if (vk == LWIN) { lightKeyUp(RWIN); return; }  // Firefox workaround.
	lightKeyUp('p' + vk);
}

var pairMap = {	// Array.indexOf not supported in IE8 and below.
	13:true, // Enter, Numpad Enter
	16:true, // Left Shift, Right Shift
	17:true, // Left Ctrl, Right Ctrl
	18:true, // Left Alt, Right Alt
	91:true  // Right Win for Firefox
};

var LWIN = 91;
var RWIN = 92;
var MENU = 93;
var PRTSCN = 44;

var NO_PAIR = -1;
var LEFT_PAIR = 1;
var RIGHT_PAIR = 2;
var NUM_PAIR = 3;
function pairExists(e) { return pairMap[e.keyCode] !== undefined; }
function getELoc(e) { return (e.location !== undefined && e.location > 0) ? e.location : NO_PAIR; }

function isChrome(e) { return e.keyLocation !== undefined; }
function fakeMenuUp() { setTimeout(function() {
	key[MENU].isDown = false;
	lightKeyUp(MENU); }, 150);

	var current = $('#txt-current').val();
	current = current.replace(' [ ' + key[MENU].desc + ' ]', '');
	$('#txt-current').val(current);;
	tot.current--;
}
function fixChromeMenuUp(e) { if (e.keyCode == MENU && isChrome(e)) fakeMenuUp(); } // Temp..

function fixPrtScn(e) {
	if (e.keyCode == PRTSCN) {
		lightKeyDown(PRTSCN);
		setTimeout(function() { lightKeyUp(PRTSCN); }, 150);
	}
}

var combo = [];