/**
 * Created by WEB-UID-JAVA on 2017/11/1.
 */
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
//加载分页列表内容
function loadProductsByPages(n){
    $.ajax({
        type:'get',
        url:"data/03-printTrend/fashionNews.php",
        data:{pno:n},
        success:function(data){
            console.log(data);
             var pageContent=data.data;
             console.log(pageContent);
             var html="";
             for(var d of pageContent) {
                 html += `
                 <li>
                <a href="${d.href}">
                <img src="img/02_fashionNews/${d.img}" >
                </a>
                <a href="${d.href}" class="title">${d.title}</a>
                <p>${d.msg}</p>
            </li>
                 `;
             }
             $("#fashionNews .pageContent").html(html);
            //  //生成分页按钮
            var html="";
            if(n!=1){
                html+=`<a href="javascript:;"> <span class="glyphicon glyphicon-chevron-left"></span></a>`;
            }
            for(var i=0;i<data.pageCount;i++){
                html+=`<a href="javascript:;">${i+1}</a>`;
            }
            if(n!=data.pageCount){
                html+=`<a href="javascript:;" class="lg">下一页</a>`;
            }
            $("#fashionNews .pages").html(html+`<a href="javascript:;" >页面${n}</a>`);
            if(n==1){
                $("#fashionNews .pages").children(":eq(0)").addClass("hover");
            }else{
                $("#fashionNews .pages").children(":eq("+n+")").addClass("hover");
            }
            if(n==1)
                $("#pages>a:first-child").addClass("disabled");
            if(n==data.pageCount)
                $("#pages .large").addClass("disabled");
            if(n!=1&&n!=data.pageCount)
                $("#pages>a:first-child,#pages .large").removeClass("disabled");


        },
        error:function(){
            alert("网络故障");
        }
    })

}
loadProductsByPages(1);
$("#fashionNews .pages").on("click","a:not(.disabled):not(.hover)",e=>{
    var $a=$(e.target);
    var n=parseInt($("#fashionNews a.hover").html());
    if($a.is(":first-child"))
        loadProductsByPages(n-1);
    else if($a.is(".lg"))
        loadProductsByPages(n+1);
    else loadProductsByPages($a.html());
});