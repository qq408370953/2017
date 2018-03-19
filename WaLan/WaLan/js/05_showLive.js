/**
 * Created by WEB-UID-JAVA on 2017/11/2.
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

(()=>{

//nav里的下拉菜单
$("#showLive .nav .myToggle").click(e=>{
    e.preventDefault();
    $this=$(e.target);
    $this.parent().siblings().find(".myDropdown").hide();
    $this.next().toggle();
});
//nav里myDropdown的li悬停变色
$("#showLive .myDropdown li").hover(
    (e)=>{
        $(e.target).css("background","#DADADA");
    }
    ,
    (e)=>{
        $(e.target).css("background","#fff");
    }
);

////////////////////////////////轮播图/////////////////////////////////////////////////////////////
/*左右按钮悬停变色*/
$("#showLive .myBanner>span").hover(
    (e)=>{
        $(e.target).css("color","#fff")
    },
    (e)=>{
        $(e.target).css("color","#C1B9B9")
    }
);
/*轮播图*/
var n=0,n2=0,LIWIDTH=300,LIWIDTH2=109.5,TRANS=300,INTERVAL=2000;
var l1="",l2="",l3="";
function loadBanner(l1,l2,l3){
    n=0;
    var category = {};
    if(l1){
        category['season']=l1;
    }
    if(l2){
        category['person']=l2;
    }
    if(l3){
        category['city']=l3;
    }
    console.log(category);
    $.ajax({
        type:'post',
        url:'data/03-printTrend/showLive.php',
        data:{
            category: JSON.stringify(category)
        },
        success:function(data){
            var banners=[...data.lgImg];
            // 大图轮播图ajax请求动态加载图片
            html="";
            for(var d of banners){
                html+=`
                <li><a href="javascript:;">
                    <img src="${d.img}">
                </a></li>
                `;
            }
            $("#showLive .myBanner .banner").html(html).children(":eq("+n+")").addClass("hover");
            //大图底部说明文字
            function loadIntro(){
                var intros=banners[n];
                var brands=[...data.smallImg][banners[n].bid];
                html="";
                html+=`
                <span>品牌：${brands.brands}</span>
                <span>季节：${intros.myseason}</span>
                <span>人群：${intros.person}</span>
                <span>城市：${intros.mycity}</span>
                `;
                $("#showLive .intro").html(html);
            }
            loadIntro();
            /*左右大图按钮点击图片移动*/
            $("#showLive .myBanner").on("click","span",(e)=>{
                $a=$(e.target);
                 if($a.is(".leftBar")){
                     if(n>0){
                         n--;
                         var left = -LIWIDTH * n;
                         $("#showLive .myBanner .banner").css("left", left);
                         $("#showLive .myBanner .banner").children().removeClass("hover");
                         $("#showLive .myBanner .banner").children(":eq(" + n + ")").addClass("hover");
                     }else{
                         n=banners.length-1;
                         var left = -LIWIDTH * n;
                         $("#showLive .myBanner .banner").css("left", left);
                         $("#showLive .myBanner .banner").children().removeClass("hover");
                         $("#showLive .myBanner .banner").children(":eq(" + n + ")").addClass("hover");
                     }
                 }else if($a.is(".rightBar")){
                     if(n==banners.length-1){
                         n=0;
                         var left = -LIWIDTH * n;
                         $("#showLive .myBanner .banner").css("left", left);
                         $("#showLive .myBanner .banner").children().removeClass("hover");
                         $("#showLive .myBanner .banner").children(":eq(" + n + ")").addClass("hover");
                     }else{
                         n++;
                         var left = -LIWIDTH * n;
                         $("#showLive .myBanner .banner").css("left", left);
                         $("#showLive .myBanner .banner").children().removeClass("hover");
                         $("#showLive .myBanner .banner").children(":eq(" + n + ")").addClass("hover");
                     }
                 }
                 loadIntro();
            });

            // 小图轮播
            var banner2=data.smallImg;
            html="";
            for(var d of banner2){
                html+=`
                <li>
                    <a href="javascript:;">
                    <img src="${d.img}">
                    </a><br>
                    <span>${d.brands}</span>
                </li>
                `;
            }
            $("#showLive .myBanner2 .banner2").html(html);
            //小图左右按钮
            $("#showLive .myBanner2").on("click","span",(e)=>{
                $a=$(e.target);
                if($a.is(".leftBar")){
                    if(n2>0){
                        n2--;
                        var left = -LIWIDTH2 * n2;
                        $("#showLive .myBanner2 .banner2").css("left", left);
                    }else{
                        n2=banner2.length-1;
                        var left = -LIWIDTH2 * n2;
                        console.log(left);
                        $("#showLive .myBanner2 .banner2").css("left", left);
                    }
                }else if($a.is(".rightBar")){
                    if(n2==banner2.length-1){
                        n2=0;
                        var left = -LIWIDTH2 * n2;
                        $("#showLive .myBanner2 .banner2").css("left", left);
                    }else{
                        n2++;
                        var left = -LIWIDTH2 * n2;
                        $("#showLive .myBanner2 .banner2").css("left", left);
                    }
                }
            });
        },
        error:function(){
            alert("网络故障");
        }
    })
}
//加载大小图完成
loadBanner(l1,l2,l3);
//nav里myDropdown下点击选中后上面会自动填充,并且重新请求数据库
$("#showLive .myDropdown li").click(
    (e)=>{
        var html=$(e.target).html();
        if($(e.target).parent().is(".l1")){
            $(e.target).parent().parent().find(".myToggle").html('季节：'+html);
            if(html=='全部'){
                l1="";
            }else{
                l1=html;
            }
        }else if($(e.target).parent().is(".l2")){
            $(e.target).parent().parent().find(".myToggle").html('人群：'+html);
            if(html=='全部'){
                l2="";
            }else{
                l2=html;
            }
        }else if($(e.target).parent().is(".l3")){
            $(e.target).parent().parent().find(".myToggle").html('城市：'+html);
            if(html=='全部'){
                l3="";
            }else{
                l3=html;
            }
        }
        loadBanner(l1,l2,l3);
    }
);

})();

































