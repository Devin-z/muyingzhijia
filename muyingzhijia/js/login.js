//表单验证
//手机号验证
var in1 = false;
var in2 = false;
var in3//
var in4
if(getCookie('oname')){
	window.location.href = "../html/index.html";
}

$("#phone").blur(function(){
	var phone = $(this).val();
	if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
		$(this).css("border-color","#FF0000");
		$(this).parents("dd").find("p").css({"background":"#FFEDB5","border-color":"#FF9900"});
		$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onError.gif) no-repeat center center ;'></b>手机格式不对，请重新输入！");
	}else{
		$(this).css("border-color","#0E931C");
		$(this).parents("dd").find("p").css({"background":"#fff","border-color":"#fff"});
		$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onSuccess.gif) no-repeat center center ;'></b>");
		in1 = true;
	}
	$(this).parents("dd").find("p").css("display","block");
});
$("#phone").focus(function(){
	$(this).parents("dd").find("p").css("display","none");
	$(this).css("border-color","#FF5C00");
});
//密码验证
$("#pass").blur(function(){
	var pass = $(this).val();
	if(!(/^[0-9A-Za-z%^&*#@$]{6,20}$/.test(pass))){
		$(this).css("border-color","#FF0000");
		$(this).parents("dd").find("p").css({"background":"#FFEDB5","border-color":"#FF9900","color":"#ff0000"});
		$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onError.gif) no-repeat center center ;'></b>密码长度限制为6-20位字符");
		
	}else{	
		$(this).css("border-color","#0E931C");
		$(this).parents("dd").find("p").css({"background":"#fff","border-color":"#fff","color":"#0E931C"});
		$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onSuccess.gif) no-repeat center center ;'></b>");
		in2 = true;
	}
	$(this).parents("dd").find("p").css("display","block");
});
$("#pass").focus(function(){
	$(this).parents("dd").find("p").css("display","none");
	$(this).css("border-color","#FF5C00");
});



$.ajax({
	type:'POS',
	url:'../php/login2.php',
	dataType:'json',
	success:function(data){

		//从cookie中查找是否有匹配数据
	$("button").click(function(){
		var name = $("#phone").val();
		var pass = $("#pass").val();
		for(var i = 0;i < data.length;i++){
			
			if(data[i].name==name){
				
				in3=true;
				
				if(data[i].password==pass){
					in4=true;
				}else{in4=false}
			}else{in3=false}
		}
		console.log(in1)
		console.log(in2)
		console.log(in3)
		console.log(in4)
		if(in1==true&&in2==true){
			if(in3==false){
				$(this).parents("dd").find("p").css({"background":"#FFEDB5","border-color":"#FF9900","color":"#ff0000"});
				$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onError.gif) no-repeat center center ;'></b>用户名不存在");
				$(this).parents("dd").find("p").css("display","block");
				return false;
			}else if(in4==false){
				$(this).parents("dd").find("p").css({"background":"#FFEDB5","border-color":"#FF9900","color":"#ff0000"});
				$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onError.gif) no-repeat center center ;'></b>密码输入错误！");
				$(this).parents("dd").find("p").css("display","block");
				return false;
			}else{return true}

		}else{

			return false;	
		}
		
	})

		}
})
//从cookie中查找是否有匹配数据
$("button").click(function(){
	var name = $("#phone").val();
	var pass = $("#pass").val();

	

	if(in1==true&&in2==true){
		if(in3==false){
			$(this).parents("dd").find("p").css({"background":"#FFEDB5","border-color":"#FF9900","color":"#ff0000"});
			$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onError.gif) no-repeat center center ;'></b>用户名不存在");
			$(this).parents("dd").find("p").css("display","block");
			return false;
		}else if(in4==false){
			$(this).parents("dd").find("p").css({"background":"#FFEDB5","border-color":"#FF9900","color":"#ff0000"});
				$(this).parents("dd").find("p").html("<b style='background: url(../img/index/onError.gif) no-repeat center center ;'></b>密码输入错误！");
				$(this).parents("dd").find("p").css("display","block");
			return false;
		}else{
			if($('#cont_check').prop('checked')){
				setCookie("oname",name,setCookieDate(30),"/");
			}else{setCookie("oname",name,setCookieDate(0),"/");}
			
		}

	}else{
		return false;	
	}
	
})
