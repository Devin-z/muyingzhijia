$(function(){
	
//轮播图
var $banner = $('#banner');
var $ul = $banner.children('ul');
var len = $ul.children().length;
var index = 0;
var timer;


// 生成分页
// 创建一个div
var $page = $('<div/>');
$page.addClass('page');

for(var i=0;i<len;i++){
	var $span = $('<span/>').html(i+1);

	if(i===index){
		$span.addClass('active');
	}

	$page.append($span);
}

$banner.append($page);


// 鼠标移入移除
$banner.on('mouseenter',function(){

	clearInterval(timer);
}).on('mouseleave',function(){
	timer = setInterval(function(){
		index++;

		showPic();
	},3000);
})

// 事件触发函数

// 手动触发mouseleave事件
.trigger('mouseleave');


// 上一张/下一张
$('#banner .page span').on('click',function(){
	index = $(this).index();
	showPic();
});


function showPic(){
	if(index<0){
		index = len - 1;
	}else if(index > len - 1){
		index = 0;
	}

	// 页码高亮
	$page.children().eq(index).addClass('active').siblings().removeClass('active');

	$ul.animate({left:-index*1090})
}
	



$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top > 200){
			$("#fixLeftImg").css("display","block");
		}else{
			$("#fixLeftImg").css("display","none");
		}
		if(top > 520){
			$("#fixTop").css("display","block");
		}else{
			$("#fixTop").css("display","none");
		}
	})


	

	
	//回到顶部
	// $("#fix_dingbu").click(function(){
	// 	$(window).animate({'scrollTop':0});
	// })

	$.ajax({
		url: '../php/index-tehui.php',
		dataType:"json",
		type: 'post',
		success:function(data){
			console.log(data);
			let str='';
			for(var i=0;i<data.length;i++){
					str+=`<li>
							<dl id='${data[i].id}'>
								<dt class='l'>
									<a href='./list.html'>
										<img src='${data[i].imgurl}'>
									</a>
								</dt>
								<dd class='pd'>
									<a href='./list.html'><h2>${data[i].name}</h2></a>
									<p>${data[i].description}</p>
								</dd>
								<dd class='pr'>
									<div>
										<span>￥</span><span class='price'>${data[i].price}</span><span>起</span>
									</div>
									<a href='./list.html'>点击进入</a>
								</dd>
							</dl>
						</li>`
			}
			$(".content_2 ul").html(str)
		}
	});


	$.ajax({
		url: '../php/index-jingxuan.php',
		dataType:"json",
		type: 'post',
		success:function(data){
			console.log(data);
			let str='';
			for(var i=0;i<data.length;i++){
					str+=`<li>
							<dl id='${data[i].id}'>
								<dt class='l'>
									<a href='./list.html'>
										<img src='${data[i].imgurl}'>
									</a>
								</dt>
								<dd class='pd'>
									<a href='./list.html'><h2>${data[i].name}</h2></a>
									<p>${data[i].description}</p>
								</dd>
								<dd class='dispatch'>
									<p><span></span>${data[i].dispatch}</p>
								</dd>
								<dd class='pr'>
									<div>
										<span>￥</span><span class='price'>${data[i].price}</span><span>起</span>
									</div>
									<a href='./list.html'>点击进入</a>
								</dd>
							</dl>
						</li>`
			}
			$(".content_3 ul").html(str)
		}
	});
});