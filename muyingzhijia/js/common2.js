$(function(){
	//登录退出效果
	if(getCookie("oname")){
		$("#log").html('<b>'+getCookie("oname")+'</b><a href="#" id="tuichu" style="display: inline-block;">[退出]</a>');
	}else{
		$("#log").html('<a class="l" href="login.html">[登录]</a><a class="l" href="zhuce.html">[免费注册]</a>')
	}
	$("#log").on("click","#tuichu",function(){
		removeCookie("oname");
		window.location.href = "index.html";});




	//输入框事件
	$(".search").find("input").focus(function(){
		$(this).val("");
	});
	$(".search").find("input").blur(function(){
		$(this).val("搜索 母婴之家 商品/品牌");
	});	
	//三级菜单效果
	$(".nav_erji").find("li").mouseover(function(){
		$(this).siblings().find(".nav_sanji").css("display","none");
		$(this).find(".nav_sanji").css("display","block");
	});
	$(".nav_erji").find("li").mouseout(function(){
		$(this).find(".nav_sanji").css("display","none");
	});
	//通知消息滚动
	var timer = null;
	news_gundong();
	$(".nav_news li").mouseover(function(){
		clearInterval(timer);
	});
	$(".nav_news li").mouseout(function(){
		news_gundong();
	})
	function news_gundong(){
		clearInterval(timer);
		timer = setInterval(function(){
			$(".nav_news").find("ul").animate({"marginTop":"-36px"},500,function(){
				$(".nav_news").find("li").eq(0).appendTo(".nav_news ul");
				$(".nav_news").find("ul").css("margin-top","0px");
			})
		},3000)
	}




		
})
