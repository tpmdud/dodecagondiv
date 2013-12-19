/**
* TPMdodecagondiv Sprint6
* Contact me: TPMgraber@hotmail.com
* by Timon Graber
*/
(function($){
	$.fn.extend({ 
		tpmdodecagondiv: function(options) {
			//default Settings
			var defaults = {
				width : '200px',
				corners : 12,
				coursorpointer : 'false',
				costomclass : '',
			}
    		
			return this.each(function() {
				$(this).load( function() {
					var o = $.extend(defaults, options); //combines defaults and optional Settings
					switch (o.cursorpointer) { //cursor state
						case "true":
							var cursor = "pointer";
							break;
						case "false":
							var cursor = "auto";
							break;
						default:
							var cursor = o.cursorpointer;
							break;
					}
					switch (o.corners) { //cursor state
						case 0:
							var wrapit = '<div class="TPMain TPMcircle '+o.costomclass+'" style="width: '+o.width+'; height: '+o.width+'"><div class="TPMcenterit"></div></div>';
							break;
						case 4:
							var wrapit = '<div class="TPMain TPMquare '+o.costomclass+'" style="width: '+o.width+'; height: '+o.width+'"><div class="TPMcenterit"></div></div>';
							break;
						case 6:
							var height =  parseInt(o.width) * 1.15;
							var wrapit = '<div class="TPMain TPMhexagon '+o.costomclass+'" style="width: '+o.width+'; height: '+height+'px"><div class="TPMhexagon-in1"><div class="TPMhexagon-in2"><div class="TPMhexagon-in2"><div class="TPMhexagon-in2"><div class="TPMcenterit TPMhexagon-in3"></div></div></div></div></div>';
							break;
						case 8:
							var wrapit = '<div class="TPMain TPMoctagon '+o.costomclass+'" style="width: '+o.width+'; height: '+o.width+'"><div class="TPMoctagon-in"><div class="TPMcenterit"></div></div></div>';
							break;
						default: //12
							var wrapit = '<div class="TPMain '+o.costomclass+'" style="width: '+o.width+'; height: '+o.width+'"><div class="TPMdodecagon"><div class="TPMdodecagon-in"><div class="TPMdodecagon-in"><div class="TPMcenterit"></div></div></div></div></div>';
							break;
					}
                    $(this).css({"cursor":cursor});
					var divh = $(this).height() /2;
					var divw = $(this).width() /2;
						//PRINT
					$(this).wrap( wrapit );	 //wrap the img/div
					$(this).css({"margin-top":"-"+divh+"px","margin-left":"-"+divw+"px"}); //css center img/div
				});	
    		});
    	}
	});
})(jQuery);