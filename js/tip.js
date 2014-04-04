$('.key').attr('title', '');
$('.key').tooltip({content: function() { return $(this).html();}, show: 'fade', track: false});