/**
Name    : jValidate
Author  : kingthy
Download: http://sc.xueit.com
Email   : kingthy@gmail.com
Blog    : http://www.cnblogs.com/kingthy/
Version : 1.0.0
License : MIT,GPL licenses.

Sample:
---------------------------------------------
sample 1 :
    jQuery('form').jValidate();

sample 2 :
     jQuery('form').jValidate({
		 blurvalidate : true,
		 isbubble : false,
		 emptytip : true
	 });
sample 2 :
     jQuery('form').jValidate({
		 blurvalidate : false,
		 isbubble : false,
		 emptytip : true,
		 onerror  : function(item){
			 alert(item.attr('jverrortip'));
		 }
	 });
**/
if(typeof(jQuery) != 'undefined')(function($){
	$.fn.extend(
		{
			jValidate : function(settings){
				settings = $.extend({
					isbubble : false,
					blurvalidate : false,
					emptytip : false,
					oncorrect : function(item, form){
						return _setTip(item, form, true);
					},
					onerror : function(item, form){
						return _setTip(item, form, false);
					}
				},settings);

				this.submit(_validate);
				this.each(function(){
					var controls = $(':input', this);
					controls.keypress(function(){
						var item = $(this);
						var tipid = item.attr('jvtipid');
						if(tipid){
							var tipobj = $('#' + tipid, this.form);
							if(tipobj && tipobj.attr('jvnormaltip') != undefined){
								var normalclass = tipobj.attr('jvnormalclass');
								var correctclass = tipobj.attr('jvcorrectclass');
								var errorclass = tipobj.attr('jverrorclass');
								if(normalclass)tipobj.addClass(normalclass);
								if(errorclass)tipobj.removeClass(errorclass);
								if(correctclass)tipobj.removeClass(correctclass);
								tipobj.html(tipobj.attr('jvnormaltip'));
							}
						}
					});
					if(settings.blurvalidate){
						controls.blur(function(){
							_isCorrect($(this), this.form);
						});
					}
				});

				var _isFocusOn = false;
				function _setTip(item, form, isCorrect){
					var tipid = item.attr('jvtipid');
					var errortip = item.attr('jverrortip');
					var correcttip = item.attr('jvcorrecttip');
					var focuson = item.attr('jvfocuson');

					var tip = isCorrect ? correcttip : errortip;
					focuson = (focuson && (focuson.toLowerCase() == 'true' || focuson == '1'));
					if(tipid){
						var tipobj = $('#' + tipid, form);
						if(tipobj.length > 0){
							var normalclass = tipobj.attr('jvnormalclass');
							var correctclass = tipobj.attr('jvcorrectclass');
							var errorclass = tipobj.attr('jverrorclass');
							if(tipobj.attr('jvnormaltip') == undefined){
								tipobj.attr('jvnormaltip', tipobj.html())
							}
							if(normalclass)tipobj.removeClass(normalclass);
							if(isCorrect){
								if(errorclass)tipobj.removeClass(errorclass);
								if(correctclass && (settings.emptytip || tip))tipobj.addClass(correctclass);
							}else{
								if(errorclass && (settings.emptytip || tip))tipobj.addClass(errorclass);
								if(correctclass)tipobj.removeClass(correctclass);
							}
							if(tip){
								tipobj.html(tip);
							}else{
								tipobj.html(tipobj.attr('jvnormaltip'));
							}
						}else if(tip){
							alert(tip);
						}
					}else if(tip){
						alert(tip);
					}
					if(focuson && !isCorrect && !_isFocusOn){
						item.focus();
						_isFocusOn = true;
					}
					return true;
				}
				function _isCorrect(item, form){
					var jvpattern = item.attr('jvpattern');
					var compareid = item.attr('jvcompareid');
					var method = item.attr('jvmethod');
					var required = item.attr('jvrequired');

					if(!(jvpattern || compareid || method))return true;

					var f = false, p = false;
					if(required && (required.toLowerCase() == 'false' || required == '0')){
						if(item.val() == '')f = true;
					}else if(this.disabled || !item.val()){
						p = true;
						f = false;
					}
					if(!p && !f){
						f = true;
						if(jvpattern){
							var r = new RegExp(jvpattern,"im");
							if(!r.test(item.val()))f = false;
						}
						if(compareid && f){
							var co = $('#' + compareid, form);
							if(co.length > 0 && co.val() != item.val())f = false;
						}
						if(method && f){
							eval('f=' + method + '(item);');
							if(typeof(f) == 'object' && f.message){
								item.attr('jverrormessage', item.attr('jverrortip')).attr('jverrortip', f.message)
								f = f.result;
							}else{
								if(item.attr('jverrormessage'))
									item.attr('jverrortip',item.attr('jverrormessage'));
							}
						}
					}
					if(f){
						settings.oncorrect(item,form);
					}else{
						settings.onerror(item,form);
					}
					return f;
				}
				function _validate(){
					var success = true;
					var form = this;
					_isFocusOn = false;
					$(':input', this).each(function(){
						if(!_isCorrect($(this), form)){
							success = false;
							if(!settings.isbubble)return false;
						}
					});
					return success;
				}

				return this;
			}
		}
	)
})(jQuery);