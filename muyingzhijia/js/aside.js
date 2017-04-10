
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

    
    render();

    function render(){
        var sumPrice = 0;
        var sumnum = 0;

        var $ul = $('<ul></ul>');
        carlist.forEach(function(goods){
        
            sumPrice += goods.price*goods.num;
            sumnum+=Number(goods.num);

            var $li = $('<li></li>');
            $li.attr('data-guid',goods.guid);
            var $img = $('<img>');$img.attr({'src':goods.src});
            var $a = $('<a></a>');$a.html(goods.name);

            var $span_1 = $('<span></span>');$span_1.addClass('_price').html(goods.price+'&nbsp;x&nbsp;'+goods.num);
            var $span_2 = $('<span></span>');$span_2.addClass('btn-close').html('删除')
            $li.append($img).append($a).append($span_2).append($span_1);
            $ul.append($li);
        });
        $('.num').html(sumnum);
        $('.oCarList').html('').append($ul);
        $('.sumprice').html(sumPrice);
    }


    $('#aside .btn-close').click(function(){

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

    $('#aside .close').click(function(){
        $('.showCar').hide()
    })
    $('#aside .btn-car').click(function(){
        $('.showCar').fadeToggle()
    })

    $('#aside .h').hover(function(){
        $(this).css('background-color','#f60');
        
    },function(){
        $(this).css('background-color','#fff')
    })

})




