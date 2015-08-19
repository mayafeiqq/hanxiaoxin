$(document).ready(function(e) {
    
	/*$('.top ul').hover(function(){
		$(this).find('b').toggleClass('hover');
		$(this).find('.topli').toggleClass('hover');
		$(this).find('.bottomli').toggle();
		});*/
		
		
/*	$('.out li').mouseover(function(){
			var index=$(this).index();
			$(this).addClass('hover').siblings().removeClass('hover');
			$('.out .content').eq(index).show().siblings().hide();
		});
*/	
/*$('.list li').mouseover(function(){
		var index=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.win img').eq(index).fadeIn(200).siblings().fadeOut(200);
	});
*/
/*$('.ani ul li').hover(function(){
		var index=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.ani span').stop().animate({'left':-470*index},'fast');
	});*/
	
	
	/*$('.left,.right').hover(function(){
		$(this).toggleClass('hover');	
	});
	
	$('.left').click(function(){
		var $ul=$('.wrap ul')
		$ul.not(':animated').animate({'left':-440},500,function(){
		$ul.children().first().appendTo('.wrap ul');
		$ul.css('left',0);
		});
	});
	$('.right').click(function(){
		var $ul=$('.wrap ul')
		$ul.children().last().prependTo('.wrap ul');
		$ul.css('left',-440);
		$ul.not(':animated').animate({'left':0},500);
	});*/
	
	
 
	
	 /*var cur=1,
		len=$('.win ul li').size();
 		$('.two span').html(cur);
		$('.two b').html(len);
 		$('.left,.right').hover(function(){
			$(this).toggleClass('hover');	
		});
 		$('.right').click(function(){
			if(cur<len){
				cur++;
				$('.two span').html(cur);
				$('.win ul').animate({'top':-168*(cur-1)},'fast');
			}
		});
 		$('.left').click(function(){
			if(cur>1){
				cur--;
				$('.two span').html(cur);
				$('.win ul').animate({'top':-168*(cur-1)},'fast')
			}
		}); */
		 
/*	 $('.win span').width(470*$('.win img').length);
			var index=0,
				  timer;
			$('.list li').hover(function(){
				clearInterval(timer);
				index=$(this).index();
				abc(index);
			});
			$('.big').hover(function(){
				clearInterval(timer);
			},function(){
				timer=setInterval(function(){
				index++;
				if(index==$('.win img').length){
					index=0;
					};
					abc(index);
				},1000);
			}).trigger('mouseleave');
			function abc(index){
				$('.list li').eq(index).addClass('hover').siblings().removeClass('hover');
				$('.win span').stop().animate({'left':-470*index},500);
			}
			
*/
	/*固定菜单*/	  
	
	 var t=$('.center').offset().top;
	$(window).scroll(function(){
		var wt=$(this).scrollTop(); 
		if(wt>=t){
			$('.top_nav').show().css({'position':'fixed','top':'0','z-index':'9999999'});
		}
		else{
			$('.top_nav').hide().css({'position':'relative'});
			}
	});
	  

/*$('.win ul').width(780*$('.win ul li').length);
	$('.num li').hover(function(){
		var index=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.win ul').stop().animate({'left':-780*index});
	});
	$('.win img').mouseover(function(){
		$(this).fadeTo(100,1).siblings().fadeTo(100,.6);
	});
	$('.win').mouseleave(function(){
		$('.win img').fadeTo(100,1);
	});*/



	/*$('.dock').hover(function(){
		$(this).stop().animate({'right':0},'fast',function(){
		$('.arrow').addClass('hover');
		})},function(){
		$(this).stop().animate({'right':-86},'fast',function(){
		$('.arrow').removeClass('hover');	
		});
		});*/
	
	
	/*$('.content ul li div').hover(function(){
		$(this).stop().animate({'top':0},'fast');
	},function(){
		$(this).stop().animate({'top':80},'fast');
	});*/

	/*$('.scr ul li').hover(function(){
		var index=$(this).index();
		$('.bg span img').stop().animate({'left':-233*index},200);
		$('.scr img').stop().animate({'left':109*index},200);
	});*/
		
/*$('.box ul').width($('.box ul li').length*61);
	//alert($('.box ul li').outerWidth(true));
	$('b,s,ul img ').hover(function(){
		$(this).toggleClass('hover');
	});
	$('ul li').hover(function(){
		var index=$(this).index();
		$('dl dt img,i img').attr('src','images/img0/'+(index+1)+'md.jpg');
	});
	var page=1,len=$('ul li').length;
	$('s').click(function(){
			if(page<len-4){
				page++;
				$('ul').css('margin-left','-=60');
			}
	});

	$('b').click(function(){
			if(page>1){
				$('ul').css('margin-left','+=60');
				page--;
			}
	});*/
/*       var telreg=/^(13|14|15|18)\d{9}$/,
		mailreg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
		pwsreg=/\S{6,20}/,
		pwsreg1=/[^\u4E00-\u9FA5\uf900-\ufa2d]/;
		$('.tel').blur(function(){
			var tel=$('.tel').val();	
			if(telreg.test(tel)){
				$('.one').html('正确').css('color','#0f0');
			}else{
				$('.one').html('错误').css('color','#f00');
			};
		});
		$('.mail').blur(function(){
			var mail=$('.mail').val();
			if(mailreg.test(mail)){
				$('.two').html('正确').css('color','#0ff');
			}else{
				$('.two').html('错误').css('color','#f00');	
			}	
		});
		$('.pwd').blur(function(){
			var pwd=$('.pwd').val();
			if(pwsreg.test(pwd) && pwsreg1.test(pwd)  ){
				$('.three').html('正确').css('color','#0ff');
			}else{
				$('.three').html('错误').css('color','#f00');	
			}	
		});
		$('.pwd').blur(function(){
			var pwd=$('.pwd').val(),
				repwd=$('.repwd').val();
			if(pwd==repwd){
				$('.four').html('正确').css('color','#0ff');
			}else{
				$('.four').html('错误').css('color','#f00');	
			}	
		});
*//*		if(telreg.test(tel)){
			alert('正确')
			}else{
				alert('错误')
				}
	*/
});
