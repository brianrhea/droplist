(function ( $ ) {

	$.fn.droplist = function(options) {

		var settings = $.extend({
			overflow: "left",
            ellipsis: "&#8230;",
            dropicon: "caret"
        }, options );

        if ( settings.dropicon !== "caret" ) {
        	settings.dropicon = "fa " + settings.dropicon;
        }

		this.each(function(){
			var createDropList			= false;
			var width					= $(this).width() - 26;
			var children				= $.makeArray($(this).find('li'));
			var childrenWithWidths		= [];
			var childrenWidthTotal		= 0;
			var hiddenChildren			= [];

			_.each(children, function(child){
				childrenWidthTotal += $(child).outerWidth();
				childrenWithWidths.push([child, $(child).outerWidth()]);
			});

			if ( settings.overflow === "left" ) {

				$('.droplist').addClass('droplist-left');

				if ( childrenWidthTotal > width ) {
					childrenWidthTotal = 0;
					for ( var i = childrenWithWidths.length - 1; i >= 0; i-- ) {
						childrenWidthTotal += childrenWithWidths[i][1];
						if ( childrenWidthTotal > width ) {
							hiddenChildren.push(childrenWithWidths[i][0]);
							$(childrenWithWidths[i][0]).remove();
							createDropList = true;
						}
					}
				}

				if ( createDropList === true ) {

					var html = [];

					if ( settings.ellipsis ) {
						$(this).prepend('<li class=\"droplist-ellipsis\">' + settings.ellipsis + '</li>');
					}

					$(this).prepend('<li class=\"droplist-dropdown\"><a href=\"javascript:void(0);\" class=\"droplist-toggle\" data-toggle=\"droplist\"><i class=\"' + settings.dropicon + '\"></i></a><ul class=\"droplist-menu\"></ul></li>');

					_.each(hiddenChildren, function(hiddenChild){
						html.push(hiddenChild.outerHTML);
					})

					$(this).find('.droplist-menu').append( html.join('') );
				}

			} else {

				$('.droplist').addClass('droplist-right');

				if ( childrenWidthTotal > width ) {
					childrenWidthTotal = 0;
					for ( var i = 0; i < childrenWithWidths.length; i++ ) {
						childrenWidthTotal += childrenWithWidths[i][1];
						if ( childrenWidthTotal > width ) {
							hiddenChildren.push(childrenWithWidths[i][0]);
							$(childrenWithWidths[i][0]).remove();
							createDropList = true;
						}
					}
				}

				if ( createDropList === true ) {

					var html = [];

					if ( settings.ellipsis ) {
						$(this).append('<li class=\"droplist-ellipsis\">' + settings.ellipsis + '</li>');
					}

					$(this).append('<li class=\"droplist-dropdown\"><a href=\"javascript:void(0);\" class=\"droplist-toggle\" data-toggle=\"droplist\"><i class=\"' + settings.dropicon + '\"></i></a><ul class=\"droplist-menu\"></ul></li>');

					_.each(hiddenChildren, function(hiddenChild){
						html.push(hiddenChild.outerHTML);
					})

					$(this).find('.droplist-menu').append( html.join('') );
				}

			}

		});
	};

}( jQuery ));

$('.droplist').on('click', '.droplist-dropdown', function(e){
	if ( $(this).hasClass('open') ) {
		$(this).find('.droplist-menu').fadeOut();
		$(this).removeClass('open');
	} else {
		$(this).find('.droplist-menu').fadeIn();
		$(this).addClass('open');
		e.stopPropagation();
	}
});

$(document).click(function(){
	$(this).find('.droplist-menu').fadeOut();
});