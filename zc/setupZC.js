ZeroClipboard.setDefaults({ moviePath: 'zc/ZeroClipboard.swf' });
var clip = new ZeroClipboard();
clip.glue($('#btn-lastcopy'));
clip.glue($('#btn-maxcopy'));
clip.on('complete', function(c, a) { showToast('Copied: ' + a.text); });
