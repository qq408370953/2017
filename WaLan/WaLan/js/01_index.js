/**
 * Created by WEB-UID-JAVA on 2017/9/19.
 */

(function($){
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
//banner轮播图--动态引入
(()=>{
	var n=0,LIWIDTH=730,TRANS=300,INTERVAL=2000,timer=null;
	$.ajax({
		type:"get",
		url:"data/01-index/banner1.php",
		success:function(data){
				var banners=[...data];
				banners.push(banners[0]);
				console.log(banners);
				var strImgs="";
				for(var d of banners){
					strImgs+=`<li>
                    <a href="${d.href}">
                    <img src="${d.src}" >
                    </a>
                </li>`;
				}
				$("#banner .banner_img").html(strImgs);
				var strInds="<li></li>".repeat(banners.length-1);
				$("#banner .indicators").html(strInds).children(":eq("+n+")").addClass("hover");
    
		function moveOnce(){
        n++;
        var left=-LIWIDTH*n;
        $("#banner .banner_img").css("left",left);
        $("#banner .indicators").children().removeClass("hover");
        if(n===4){
            $("#banner .indicators").children(":eq(0)").addClass("hover");
            setTimeout(()=>{
                $("#banner .banner_img").css("transition","");
                $("#banner .banner_img").css("left",0);
                n=0;
                setTimeout(()=>{
                    $("#banner .banner_img").css("transition","all .3s linear");
                },100);
            },TRANS);
        }else
            $("#banner .indicators").children(":eq("+n+")").addClass("hover");
    }
    timer=setInterval(moveOnce,INTERVAL+TRANS);
    $("#banner .left").mouseover(function(){
        clearInterval(timer);
        timer=null;
    });
    $("#banner .left").mouseout(function(){
        timer=setInterval(moveOnce,INTERVAL+TRANS);
    });
    $("#banner .indicators").on("click","li",function(){
         n=$("#banner .indicators>li").index(this);
         $("#banner .indicators").children().removeClass("hover");
        $("#banner .indicators").children(":eq("+n+")").addClass("hover");
        left=-LIWIDTH*n;
        $("#banner .banner_img").css("left",left);
    });
      
		},
		error:function(){
			alert("网络故障");
		}
	});

//动态引入header的秀场直击热图
(function(){
    var pno=1;
    function loadImg(pno){
        $.ajax({
            type:"post",
            url:"data/01-index/show_pics.php",
            data:{pno:pno},
            success:function(data){
                var html="";
                for(var d of data.data){
                    html+=`<a href="${d.shref}" >
                    <img src="${d.spic}" >
                </a>`;
                }
                $("#banner .right .imgs").html(html).children(":first-child").addClass("hover");
                var html="";
                for(var d of data.data){
                    html+=`<li>
                        <a href="${d.shref}">
                            <span>${d.sdate}</span>
                             ${d.stitle}</a>
                    </li>`;
                }
                $("#banner .right ul").html(html);
                if(pno==1)
                 $("#banner .right .btn1").addClass("disabled");
                if(pno==data.pageCount)
                 $("#banner .right .btn2").addClass("disabled");
                if(pno!=1&&pno!=data.pageCount)
                 $("#banner .right .btn1,#banner .right .btn2").removeClass("disabled");
            },
            error:function(){
                alert("网络故障");
            }
        });
    }
    loadImg();
    $("#banner .right .btn0")
        .on("click","button:not(.disabled)",e=>{
            var $a=$(e.target);
            // var n=parseInt($("#pages>a.current").html());
            if($a.is(".btn1")){
                pno--;
                loadImg(pno);
            }else if($a.is(".btn2")){
                pno++;
                loadImg(pno);
            }else{
                loadImg(pno);
            }
        });
})();
    /*banner右边悬停显示图片*/
$("#banner .right ul").on("mouseover","a",function(){
    var $li=$(this).parent();
    var n=$li.index("#banner .right ul li");
    $("#banner .right .imgs").children().removeClass("hover");
    $("#banner .right .imgs").children(":eq("+n+")").addClass("hover");
});


})();
/*动态加载楼层图片*/
function loadFloor(){
    $.ajax({
        type:'get',
        url:'data/01-index/floor.php',
        success(data){
            console.log(data.s1);
            //楼层1动态加载图片
            var html=`<div class="sort hover ">`;
            for(var i=0;i<data.s1.length;i++){
                html+=`
                <a href="${data.s1[i].href}"><img src="${data.s1[i].src}"></a>
                `;
            }
            html+=`</div>
            <div class="sort2 ">`;
            for(var i=0;i<data.s2.length;i++){
                html+=`
                <a href="${data.s2[i].href}"><img src="${data.s2[i].src}"></a>
                `;
            }
            html+=`</div>
            <div class="sort ">`;
            for(var i=0;i<data.s3.length;i++){
                html+=`
                <a href="${data.s3[i].href}"><img src="${data.s3[i].src}"></a>
                `;
            }
            html+=`</div>
            <div class="sort ">`;
            for(var i=0;i<data.s4.length;i++){
                html+=`
                <a href="${data.s4[i].href}"><img src="${data.s4[i].src}"></a>
                `;
            }
            html+=`</div>
            <div class="sort">`;
            for(var i=0;i<data.s5.length;i++){
                html+=`
                <a href="${data.s5[i].href}"><img src="${data.s5[i].src}"></a>
                `;
            }
            html+=`</div>`;
            $("#floor1 .show_imgs").html(html);
            //楼层2动态加载图片
            html=`<li class="hover">
                <ul class="imgs clear" >`;
            for(var i=0;i<data.i1.length;i++){
                html+=`
                <li><a href="${data.i1[i].href}"><img src="${data.i1[i].src}" ></a></li>
                `;
            }
            html+=`</ul>
            </li>
            <li>
                <ul class="imgs clear">`;
            for(var i=0;i<data.i2.length;i++){
                html+=`
                <li><a href="${data.i2[i].href}"><img src="${data.i2[i].src}" ></a></li>
                `;
            }
            html+=`</ul>
            </li>
            <li>
                <ul class="imgs clear">`;
            for(var i=0;i<data.i3.length;i++){
                html+=`
                <li><a href="${data.i3[i].href}"><img src="${data.i3[i].src}" ></a></li>
                `;
            }
            html+=`</ul>
            </li>
            <li>
                <ul class="imgs clear">`;
            for(var i=0;i<data.i4.length;i++){
                html+=`
                <li><a href="${data.i4[i].href}"><img src="${data.i4[i].src}" ></a></li>
                `;
            }
            html+=`</ul>
            </li>`;
            $("#floor2 ul.img-list").html(html);
        },
        error(){
            alert('网络故障');
        }
    });
}
loadFloor();
/*floor1*/
/*花型区域悬停变色(换了张图片)加底部区域显示图片*/
/*active绑在圆圈的选择图标li上，是点击选中这个li，hover属性控制下面div显示的图片*/
$("#floor1 .imgs li a").css("background-image",'url("img/01_index/icons.png")');
$("#floor1 .imgs li:not(:last-child)").mouseenter(function(){
    $("#floor1 .imgs").children("li").removeClass("active");
    $(this).addClass("active");
    var index=$(this).index("#floor1 .imgs li");
    $("#floor1 .show_imgs").children("div").removeClass("hover");
    $("#floor1 .show_imgs").children(":eq("+index+")").addClass("hover");
});

/*floor2下面的图片*/
$("#floor2 .nav1").on("mouseover","li a",function(){
    var n=$(this).parent().index("#floor2 .nav1 li");
    if(n!=4){
    $("#floor2 .img-list").children().removeClass("hover");
    $("#floor2 .img-list").children(":eq("+n+")").addClass("hover");
    }
});
})(jQuery);
/*floor2轮播图*/

$(".zy-Slide section:nth-child(1)").css("background","url('img/01_index/left1.png') no-repeat");
$(".zy-Slide section:nth-child(2)").css("background","url('img/01_index/right1.png') no-repeat");
(function ($) {
    // 创建构造函数
    function Slide(ele, options) {
        this.$ele = $(ele)//this. 构造函数的实例对象
        this.options = $.extend({
            speed: 1000,
            delay: 5000
        }, options)//拓展
        this.states = [
            { '&zIndex': 1, width: 174, height: 224, top: 23, left: 101, $opacity: 0.5 },
            { '&zIndex': 3, width: 530, height: 224, top: 23, left: 0, $opacity: 0.7 },
            { '&zIndex': 4, width: 640, height: 270, top: 0, left: 275, $opacity: 1 },
            { '&zIndex': 3, width: 530, height: 224, top: 23, left: 660, $opacity: 0.7 }
//				{ '&zIndex': 1, width: 174, height: 224, top: 23, left:449, $opacity: 0.5 }
        ];
        this.lis = this.$ele.find('li');

        // 点击切换到下一张

        this.$ele.find('section:nth-child(2)').on('click', function () {
            this.stop();
            this.next();
            this.play();
        }.bind(this));
        // 点击切换到上一张
        this.$ele.find('section:nth-child(1)').on('click', function () {
            this.stop();
            this.prev();
            this.play();
        }.bind(this));
        this.move();
        // 让轮播图开始自动播放
        this.play();
        console.log(this);
        //nav上指定位置切换

    }


    Slide.prototype = {
        // 原型是一个对象，所以写成一个花括号

        // move()方法让轮播图到达states指定的状态
        // <1>当页面打开时将轮播图从中心点展开
        // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
        move: function () {
            this.lis.each(function (i, el) {

                $(el)
                    .css('z-index', this.states[i]['&zIndex'])
                    .finish().animate(this.states[i], this.options.speed)
                    // .stop(true,true).animate(states[i], 1000)
                    .find('img').css('opacity', this.states[i].$opacity)
            }.bind(this))
        },
        // 让轮播图切换到下一张
        next: function (n) {
            n++;
            this.states.unshift(this.states.pop());
            this.move();
        },
        // 让轮播图滚动到上一张
        prev: function (n) {
            n--;
            if(n<0){n=3}
            this.states.push(this.states.shift());
            this.move();
        },
        play: function (n) {
            n++;
            this.interval = setInterval(function () {//这个this指window
                // setInterval、setTimeOut 中的this指向window

                // states.unshift(states.pop())       //从后往前走
                // states.push(states.shift())     //从前往后走
                this.next();
            }.bind(this), this.options.delay)
        },
        // 停止自动播放
        stop: function () {
            // var _this = this
            clearInterval(this.interval)
        }

    };
    $.fn.zySlide = function (options) {
        this.each(function (i, ele) {
            new Slide(ele, options);
        });
        return this;
    };
})(jQuery)
$.noConflict()
jQuery('.zy-Slide').zySlide({ speed: 500 })
    .css('border', '0px solid blue');



