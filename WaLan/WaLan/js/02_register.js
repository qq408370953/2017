(()=>{
//引入页头
$.ajax({
    type:"get",
    url:"03-header.html",
    success:function(data){
        $("#header").html(data+`<link rel="stylesheet" href="css/header.css">`);
    },
    error:function(){alert("网络故障")}
});
//引入页尾
$.ajax({
    type:"get",
    url:"02-footer.html",
    success:function(data){
        $("#footer").html(data+`<link rel="stylesheet" href="css/footer.css">`);
    },
    error:function(){alert("网络故障")}
});
})();

(()=>{
//注册验证
var rs=true;      //验证密码输入是否正确
function vali($txt){  //验证电话、邮箱是否为空，是否注册过
  return new Promise(resolve=>{
  var $span=$txt.next();
  if($txt.val()==""){
    $span.removeClass("right").addClass("error").html("不能为空");
  }else{
    $.ajax({
      type:"post",
      url:"data/02-register/vali.php",
      data:$txt.attr("name")+"="+$txt.val(),
      success:function(data) {
        if (data == "true") {
          $span.removeClass("error").addClass("right").html("通过");
          resolve();
        } else {
          $span.removeClass("right").addClass("error").html("用户已注册，请重新输入");
        }
      },
      error:function(){alert("网络故障")}
    });
  }
  });
}
$("input[name=uphone]").blur(e=>{
  vali($(e.target));
});
$("input[name=uemail]").blur(e=>{
  vali($(e.target));
});
function checkPwd(){     //验证两次输入密码是否一致
 var $pwd1=$("input[name=upwd]");
 var $pwd2=$("#upwd2");
 var $span=$("#upwd2").next();
  if($pwd1.val()!=$pwd2.val()){
   $span.removeClass("right").addClass("error").html("两次输入密码不一致");
   rs=false;
 }else if($pwd2.val()==""){
    $span.removeClass("right").addClass("error").html("不能为空");
    rs=false;
  }else{
    $span.removeClass("error").addClass("right").html("通过");
    rs=true;
  }
}
$("input[name=upwd]").blur(checkPwd);
$("#upwd2").blur(checkPwd);
$("#regis-form .btn").click(e=>{        //提交ajax请求，注册
    e.preventDefault();
    Promise.all([vali($("input[name=uphone]")),vali($("input[name=uemail]"))])
    .then(()=>{
        if(rs==true){
            var uphone=$("input[name=uphone]").val();
            var uemail=$("input[name=uemail]").val();
            var upwd=$("input[name=upwd]").val();
           $.ajax({
               type:"post",
               url:"data/02-register/register.php",
               data:{uphone:uphone,uemail:uemail,upwd:upwd},
               success:function(data){
										if(data.code>0){alert(data.msg)}
								},
               error:function(){alert("网络故障")}
           });
        }
     });
});
})();
