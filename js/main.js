$(function(){
/*导航栏*/
$(function(){
	$('#ul-top li').mouseover(function(){
		var i = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('#nav-box>ul>li').eq(i).fadeIn().siblings().fadeOut();
	})
	$('#nav-box .hot-lef p').mouseover(function(){
		$(this).addClass('p-1').siblings().removeClass('p-1');
	})
	$('#nav-box>ul>li').mouseleave(function(){
		$('#nav-box>ul>li').fadeOut();
		$('#ul-top li').eq(0).addClass('on').siblings().removeClass('on');
	})
})
/*中间侧显框*/
$(function(){
	$('#seo li').mouseover(function(){
		var i = $(this).index();
		$(this).addClass('se').siblings().removeClass('se');
		$('#seo-rit>ul>li').eq(i).show().siblings().hide();
	})
})
/*轮播图*/
$(function(){
	var k = 0;
	var timer = null;
	var long = $('#lunbotu .bo li').length;
	$('#lunbotu .dian span').click(function(){
		var k = $(this).index();
		clearInterval(timer);
		$(this).addClass('the').siblings().removeClass('the');
		$('#lunbotu .bo li').eq(k).fadeIn().siblings().fadeOut();
	}).mouseout(function(){autoPlay();});
	$('#lunbotu .qie .nex').click(function(){
		clearInterval(timer);
		k<long-1?k++:k=0;
		$('#lunbotu .dian span').eq(k).addClass('the').siblings().removeClass('the');
		$('#lunbotu .bo li').eq(k).fadeIn().siblings().fadeOut();
	}).mouseout(function(){autoPlay();});
	$('#lunbotu .qie .pre').click(function(){
		clearInterval(timer);
		k>0?k--:k=long-1;
		$('#lunbotu .dian span').eq(k).addClass('the').siblings().removeClass('the');
		$('#lunbotu .bo li').eq(k).fadeIn().siblings().fadeOut();
	}).mouseout(function(){autoPlay();});
	autoPlay();
	function autoPlay(){
		var k = 0;
		clearInterval(timer);
		timer = setInterval(function(){
			k<long-1?k++:k=0;
			$('#lunbotu .dian span').eq(k).addClass('the').siblings().removeClass('the');
			$('#lunbotu .bo li').eq(k).fadeIn().siblings().fadeOut();
		},2500);
	}
})
/**/
/*右侧边栏*/
$(function(){
	var time;
	$(window).scroll(function() {//鼠标发生滚动时
		var sTop = $(document.documentElement).scrollTop()+$(document.body).scrollTop();//获取当前滚动条位置
	});
	$('#Top').click(function(){
		clearInterval(time)
		yanshi(0);
	})
	$('#Close').click(function(){
		$('#ce-right .zi').css("right","-60px");
		$('#ce-right .tu').css("right","0");
	})
	$('#ce-right .tu').click(function(){
		$('#ce-right .zi').css("right","0");
		$('#ce-right .tu').css("right","-60px");
	})
	/*缓冲函数*/
	function yanshi(x){//延时函数 x 是目标值
		var S= $('body').scrollTop()+$('html').scrollTop();
		var Ss = S/30;
		time = setInterval(function(){
			S=(S>x)?(S-=Ss):(S+=Ss);
			if(Math.abs(S-x)<=Ss){
				S=x;
				clearInterval(time);					
			}
			$('html,body').scrollTop(S);
		},1000/60);
	}

})
/*滚动轮播图*/
$(function(){
var oUl = document.getElementById('gun');
	var oLi = oUl.getElementsByTagName('li');
	var oLiWidth = oLi[0].offsetWidth;
	var long = oLi.length;
	var timer = null;
	var speed =0;
	var UWidth = oLiWidth*long + 20*long;
		oUl.style.width = UWidth + 'px';
	auto();
	function auto (){
	clearInterval(timer);
		timer = setInterval(function(){
			speed+=3;
			if(speed<(UWidth/2-100)){
			oUl.style.left=-speed +'px';
			}else{
				speed = 0;
			}
		},1000/60);
	}
	oUl.onmouseover = function(){
		clearInterval(timer);
		oUl.onmouseout = function(){
		auto();
		}
	}	
	
})

























	
})/*$ function*/