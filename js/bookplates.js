$(document).ready(function(){
	// The bookplate popup
	$('h3.EXLResultFourthLine a').click(function(event){
		event.preventDefault();
		var bookplateText = $(this).text();
		$.magnificPopup.open({
			items: {
				src: $('<div class="bookplate-popup bp-standard"><div class="bookplate-text"><div class="bookplate_library_logo"></div>' + bookplateText + '</div></div>'),
				type: 'inline'
			}
		}, 0 );
	});
});