
$(function(){

	$(".cont1_cen_num input").val(1);
	//获取相关产品数据并将数据写入相对位置
	var goodsID = getCookie("goodsID");
	var _img='';
	$.ajax({
		url: '../php/goodsShow.php',
		dataType:"json",
		type: 'post',
		success:function(data){
			console.log(data);
			let str='';
			let str_1='';
			let color;
			for(var i=0;i<data.length;i++){
				if(data[i].id == goodsID){
					$('.superiors').html(data[i].superiors);
					$('.superior').html(data[i].superior);
					$('.name').html(data[i].name);
					$('.price').html(data[i].price);
					$('.made').html(data[i].made);
					color=data[i].color
					let x = data[i].showimg
					let y = data[i].imgurl
					for(let i=1;i<5;i++){
						str+=`<li><img src='${x}-${i}'></li>`
					}
					for(let j=1;j<3;j++){
						str_1+=`<li><img src='${y}-${j}'></li>`
					}
					$('.showimg').html(str);
					$('.listimg').html(str_1);
					$('.imgurl').html(str_1);
				}
			}
			let _color = $('.color a')
			console.log(_color)
			for(let k = 0;k<_color.length;k++){
				if(_color[k].innerHTML==color){
					$(_color[k]).addClass('active');
				}
			}
			zoom();
			

		}

	});

	function zoom(){
		var $tab = $('.cont1_left');
		$tab.children('.listimg').children().first().addClass('active');
		$tab.children('.imgurl').children().addClass('gdsz').not(':first').removeClass('gdsz').hide();
		$tab.on('click','li',function(){
			$(this).addClass('active').siblings().removeClass('active');
			var idx = $(this).index();
			$tab.children('.imgurl').children().eq(idx).fadeIn().addClass('gdsz').siblings().removeClass('gdsz').fadeOut();
			$('.gdsz').gdszoom({width:600,gap:10});
		});
		$('.gdsz').gdszoom({width:600,gap:10});
	}

	
	




	$(".cont1_cen_btn1").click(function(){
		var num = $("#num").val();
		num++;
		$("#num").val(num);
	});
	$(".cont1_cen_btn2").click(function(){
		var num = $("#num").val();
		if(num > 1){
			num--;
		}
		$("#num").val(num);
	});


	$(".gouwu").click(function(e){

			// 用于保存购物车中的商品列表
	var carlist = [];

	// 如果cookie中存在商品列表，则赋值给carlist
	var cookie = document.cookie.split('; ');
	cookie.forEach(function(item){
		var arr = item.split('=');
		if(arr[0] == 'carlist'){
			// 在cookie中得到的数据都是字符串
			// 所以需要转换成数组/对象
			carlist = JSON.parse(arr[1]);
		}
	});
		//商品id和数量写入购物车
				var currentGUID = goodsID;

				// 判断当前商品是否已经存在cookie
				// 如果已存在，则数量增加
				// 否则直接追加到cookie

				for(var i=0;i<carlist.length;i++){
					if(carlist[i].guid === currentGUID){
						console.log(carlist[i].num)

						carlist[i].num=Number($('#num').val())+Number(carlist[i].num);
						break;
					}
				}

				// 如果i值等于carlist.length
				// 说明当前商品不存在cookie中
				if( i==carlist.length){
					// 创建一个对象，用于保存商品信息
					var obj = {};

					obj.guid = goodsID;
					obj.src = $('.imgurl li img').attr('src');
					obj.name =$('.name').html();
					obj.price =$('.price').html();
					obj.num = $('#num').val();
					carlist.push(obj);
				}
				console.log(JSON.stringify(carlist));

				var now = new Date();
				now.setDate(now.getDate() + 3);
				document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires='+now;
		

		//购物车飞入效果
		var cx=e.clientX-30;
		var cy=e.clientY-30;
		console.log(cx);
		console.log(cy);
		let $img= $('.imgurl li img').clone();
		console.log($img)

		$img.css({'width':80,'height':80,'borderRadius':30,'position':'fixed','top':cy,'left':cx })
		.appendTo($(this)).animate({'top':250,'left':$(window).width()},function(){
				$(this).remove()})

		setTimeout(function(){
			window.location.reload();
		},500);

	})



	



	//tab标签切换
	$("#cont2 .cont2_right_top li").click(function(){
		$(this).find("a").addClass("a_cur");
		$(this).siblings().find("a").removeClass("a_cur");
		var _index = $(this).index();
		if(_index == 1){
			$("#goodsShows").css("display","none");
			$("#goodsQuanping").css("display","block");
			$("#goodsPingjia").css("display","block");
			$(window).scrollTop(735);
		}else if(_index == 2){
			$("#goodsPingjia").css("display","none");
			$("#goodsQuanping").css("display","block");
			$("#goodsShows").css("display","none");
			$(window).scrollTop(735);
		}else if(_index == 3){
			$("#goodsQuanping").css("display","none");
			$("#goodsPingjia").css("display","none");
			$("#goodsShows").css("display","none");
			$(window).scrollTop(735);
		}else{
			$("#goodsQuanping").css("display","block");
			$("#goodsPingjia").css("display","block");
			$("#goodsShows").css("display","block");
			$(window).scrollTop(735);
		}
	});

	
	



	//放大镜效果

})




