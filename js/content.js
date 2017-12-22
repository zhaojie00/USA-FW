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
	
})/*$ function*/