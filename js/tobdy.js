//左侧固定导航
$(".left-top-nav li").click(function(){
    //添加背景色
    $(this).css("backgroundColor","orangered").siblings().css("backgroundColor","#fff");
})

$(".left-top-nav li").mouseenter(function(){
    //添加背景色
    $(this).css("backgroundColor","orangered").siblings().css("backgroundColor","#fff");
})
$(".left-top-nav li").mouseleave(function(){
    //去掉背景色
   $(".left-top-nav").children().css("backgroundColor","#fff")
})


//点击切换到固定位置

//$(function(){
//    //获取元素
//
//})





//-------------������--------
//-------������
$(function(){
    //var datas =["������֮������"]
    //��ȡ��������
    $(".searchText>input").focus(function(){
        //�������
        $(this).prop("placeholder","");
    })
    $(".searchText>input").blur(function(){
        //�������
        var str = "请输入作品";
        $(this).prop("placeholder",str);
    })
})




//�ֲ�ͼ
//��ȡԪ��
var box1 = document.getElementById("box1");
var screen = box1.children[0];
var ul = screen.children[0];
var lisUl = ul.children;
var ol = screen.children[1];
var arrow = document.getElementById("arrow");
var arrowLeft = arrow.children[0];
var arrowRight = arrow.children[1];

//��ȡͼƬ��
var imgWid = screen.offsetWidth;
//��ȡ���ʱ�����ǽ�����Ԫ�صĿ�ȣ�ԭ������ΪͼƬ�����ٶȱȽ������ṹ���ɵĿ졣

//����ͼƬ����������С����
for (var i = 0; i < lisUl.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = i + 1;
    ol.appendChild(li);
}

//��ÿһ��li����¼�Ч��
var lisOl = ol.children;
lisOl[0].className = "current";
//����
for (var i = 0; i < lisOl.length; i++) {
    //��ȡ����
    lisOl[i].index = i;
    //����¼�
    lisOl[i].onclick = function () {
        //�����ʱ�Ƿ��Ǽٵĵ�һ��
        if (pic == lisUl.length - 1) {
            ul.style.left = 0 + "px";
        }

//��ol��������
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }

        this.className = "current";
        //��ul�˶�
        animate(ul, -imgWid * this.index);
//����pic��indexͬ��
        pic = this.index;
    };
}


//���Ұ�ť���Ч��
var pic = 0;
//��¡��һ��ͼƬ
var firstPic = lisUl[0].cloneNode(true);
ul.appendChild(firstPic);

//����Ұ�ť
arrowRight.onclick = play;


arrowLeft.onclick = function () {
    if (pic == 0) {
        ul.style.left = -ul.offsetWidth + imgWid + "px";
        pic = lisUl.length - 1;
    }
    pic--;
    animate(ul, -pic * imgWid);

    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    lisOl[pic].className = "current";

};

//�Զ�����
var timer = null;


timer = setInterval(play, 1500);

//�����Ƴ�
box1.onmouseover = function () {
    arrow.style.display = "block";
    clearInterval(timer);
};

box1.onmouseout = function () {
    arrow.style.display = "none";
    timer = setInterval(play, 2500);
};


function play() {
    if (pic == lisUl.length - 1) {
        //���
        ul.style.left = 0 + "px";
        //pic����
        pic = 0;
    }
    //������
    pic++;
    animate(ul, -pic * imgWid);

    //ʹ��pic��Ϊ����ֵ
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }

    //�����ʾ���Ǽٵĵ�һ��
    if (pic == lisUl.length - 1) {
        lisOl[0].className = "current";
    } else {
        lisOl[pic].className = "current";
    }

}
;


function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var leader = tag.offsetLeft;
        //step = ( target - leader ) / 10
        var step = (target - leader) / 10;
        //����һ��step��ֵ����step��������ȡ��
        step = leader > target ? Math.floor(step) : Math.ceil(step);
        //leader = leader +  step
        leader = leader + step;

        //���ø�leftֵ
        tag.style.left = leader + "px";
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}



createTab("box2");//ע�⴫������Ϊ�ַ���
//tab��
function createTab(id) {
    //1 ��ȡԪ��
    var box1 = document.getElementById(id);
    var sps = box1.getElementsByTagName("h1");
    var lis = box1.getElementsByTagName("li");

    //2 ��������span����Ҫ��span����¼�
    for (var i = 0; i < sps.length; i++) {
        //6 ����ÿ��span������ֵ
        sps[i].suoYin = i;
        sps[i].onmouseover = function () {
            //3 ���������span������
            for (var i = 0; i < sps.length; i++) {
                sps[i].className = "";
                //7 ����sp�����ѭ�������ÿ��li������
                lis[i].className = "";
            }
            //4 �����Լ�������
            this.className = "current";

            //5 ������ĸ���ǰthis������ͬ��li��������Ϊshow
            lis[this.suoYin].className = "show";
        };
    }

}

//jq����



function myScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}



//��¥�¼�
//��һ��li���ֲ�ͼ
$(document).ready(function(){
    //��ں���
    //��ȡԪ��СԲ�㣬��ӵ���¼�
    $(".innerTitle").find("span").click(function(){
        //СԲ���͸���ȱ仯

        $(this).animate({
            "opacity": 1
        },700);
        $(this).siblings("span").animate({
            "opacity": 0.3
        },700)
        //�л�ͼƬ
        //��ȡspan������
        //ͨ��jq�е�width() ����
        //console.log($(this).index()-3);
        $("#screenone>ul").animate({

            "left": -($(this).index()-3)*($("#screenone").width()) +"px"
        },700)
    });

    //����ұ߱�ǩ���ƶ�ͼƬ
    var count = 0;//���ü�����
$("#arrow1").click(function(){
    count++;  //���һ�¼�һ
    console.log(count);
    //����count�ƶ�ͼƬ
    //�ж���������һ�ţ�ֱ�ӳ��
    if(count > 2){
        //��ص����һ��li
        $("#screenone>ul").animate({
            "left": -2*($("#screenone").width()) +"px"
        },700)
        count = 2;
    }
    $("#screenone>ul").animate({
        "left": -count*($("#screenone").width()) +"px"
    },700)
});


    //���ڶ���ll����tab��
    $(".leftli li").mouseenter(function(){
        //�����������
        $(this).addClass("special").siblings().removeClass("special");
    })
    $(".innerNav .leftli").mouseleave(function(){
        //�Ƴ��������
        $(this).children().children().removeClass("special")
    })


    //Vip����
    //�������ͷ
    //��ȡ����
    var count = 1;
    $("#arrow2Right").click(function(){
        if(count==3){
            count = 1;
            $("#digittwo").text(count+"/"+"3");
            count--;
            $(".screentwo>ul").animate({
                "left": 0
            })
        }
        count++;
        $("#digittwo").text(count+"/"+"3");

        //�л�ͼƬ
        $(".screentwo ul").animate({
            "left": -(count-1)*($(".screentwo").width()) +"px"

        })

    })

    //�����߼�ͷ
    $("#arrow2Left").click(function(){
        //������
        if(count==1){
            count=3;
            $("#digittwo").text(count+"/"+"3");
            count++;
            //�л�ͼƬ
            $(".screentwo ul").animate({
                "left": -2*($(".screentwo").width()) +"px"
            })
        }
        count--;
        $("#digittwo").text(count+"/"+"3");
        $(".screentwo ul").animate({
            "left": (1-count)*($(".screentwo").width()) +"px"
        });
    })


    //���3���л�
    $(".l-lionetitle>b").mouseenter(function(){
        //�����span��ѡ��
        $(this).addClass("currentlitwo").siblings().removeClass("currentlitwo");
        //ͬʱ�ƶ�ͼƬ  ��ȡ����
        var thisIndex = $(this).index();
        //console.log(thisIndex);
        $(".screentwo ul").animate({
            "left": -(thisIndex)*($(".screentwo").width()) +"px"
        });
    })

    $(".l-lionetitle").mouseleave(function(){
        $(this).children().eq(0).addClass("currentlitwo").siblings().removeClass("currentlitwo");
    })

    //���ر�  tab��
$(".threeTitle .span span").mouseenter(function(){
    //�л���ɫ
    $(this).addClass("currentlithree").siblings().removeClass("currentlithree");
    //�л������
    var thisIndex = $(this).index();
$("#lithreeleft .bdthree li").eq(thisIndex).addClass("showthree").siblings().removeClass("showthree");
})
//�Ҳ��ֲ�ͼ




//���ĸ�li
//��Сͼ����ͼ

    //console.log($(".rightlifour .bimg  a"));
    //因为a标签有12个，所以取前六个
    $(".rightlifour .bimg  a:lt(6)").click(function(){
    //��ͼƬ������
    //��a���汣���ͼƬ
    $("#imagesfourtwo").prop("src",$(this).prop("href"));
    return false;
});


    //console.log($("#lifourone  a"));
    $("#lifourone  a").click(function(){
        //��ͼƬ������
        //��a���汣���ͼƬ
        $("#imagesfourone").prop("src",$(this).prop("href"));
        return false;
    });
//

    //上升最快
    $(".sixtitle .r-six span").mouseenter(function(){
        //点击它，实现图片切换
        $(this).addClass("currentsix").siblings().removeClass("currentsix");
        var thisIndex = $(this).index();
        //同时实现图片切换
        $(".sixli>div").eq(thisIndex-1).css("display","block").siblings().css("display","none");
    })





});

