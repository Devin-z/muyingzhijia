$(function(){


var carlist = [];

    var cookie = document.cookie.split('; ');
    cookie.forEach(function(item){
        var arr = item.split('=');
        if(arr[0] === 'carlist'){
            carlist = JSON.parse(arr[1]);

		}
	});

		console.log(carlist);

		// 生成购物车列表
		render();

		function render(){
			var sumPrice = 0;

        var $ul = $('<ul></ul>');
        carlist.forEach(function(goods){
        
            sumPrice += goods.price*goods.num;

            var $li = $('<li></li>');
            $li.attr('data-guid',goods.guid);
            var $img = $('<img>');$img.attr({'src':goods.src});
            var $a = $('<a></a>');$a.html(goods.name);


			var p=`		<span class="price">${goods.price}</span>
						<span class="num">${goods.num}</span>
						<span class="" id="count">${sumPrice}</span>
						<span class='btn-close'>删除</span>`
			var $p=$('<p></p>');$p.html(p);




            $li.append($img).append($a).append($p);
            $ul.append($li);
        });

        $('.oCarList').html('').html($ul);
        $('.sumprice').html(sumPrice);
		}


		// 删除商品
		// 删除商品对应的cookie
		// 利用事件委托把事件绑定到#carList

		
    $('.oCarList .btn-close').click(function(){

        var currentGUID = $(this).parents('li').attr('data-guid');
        for(var i=0;i<carlist.length;i++){
            if(carlist[i].guid === currentGUID){
                carlist.splice(i,1);

                render();

                
                var now = new Date();
                now.setDate(now.getDate() + 3);
                document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires='+now;
                break;
            }
        }
    })


		// 清空购物车
		// 删除carlist这个cookie
		// 利用设置过期时间达到删除的效果。
		$('.btnClear').click(function(){
			var now = new Date();
			now.setDate(now.getDate()-1);
			document.cookie = 'carlist=null;expires=' + now;

			// 清空数组
			carlist = [];

			render();
		})
})