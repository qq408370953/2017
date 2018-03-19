/**
 * Created by Administrator on 2017/10/12 0012.
 */
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

/*异步请求验证登录*/