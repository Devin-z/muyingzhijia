$.ajax({
	url: '../php/list.php',
	dataType:"json",
	type: 'post',
	success:function(data){
		let str='';
		console.log(data.length)
		for(var i=0;i<data.length;i++){
				str+=`<li>
						<dl id='${data[i].id}'>
							<dt>
								<a href='detail2.html' title="${data[i].name}&nbsp;${data[i].color}">
									<img src='${data[i].imgurl}'>
								</a>
							</dt>
							<dd class='pd'>
								<p>${data[i].name}</p>
								<a>米高micro特价</a>
							</dd>
							<dd>
								<a  href='detail2.html'>
									<div>
										<span>￥${data[i].price}</span>
									</div>
								</a>
							</dd>
						</dl>
					</li>`
		}
		$("#content ul").html(str)
	}
});


$("#content ul ").on('click',"li",function(){

	var goodsID = $(this).find('dl').attr("id");
	setCookie("goodsID",goodsID);
});



