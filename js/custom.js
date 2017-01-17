$(document).ready(function(){

    //햄버거빵 toggle

    $(".list").click(function(){

        $(".toggle").toggleClass("toggle_on");
        $("header").toggleClass("header_on");

    });

    $("header .toggle .siteMap").click(function(){

        $(".toggle .siteMap").toggleClass("div_on");//버튼
        $("header .toggle .more").toggleClass("ul_on");
        $("header .toggle").toggleClass("toggle_height");

    });

    //슬라이드 구현
    
    
    var i = $(".btn .on").index();
    var wid = $(".slider").width();
    var len = $(".btn li").length;
    var j = 0;
    
    //버튼 on 클래스처리
    //버튼 누르면 해당 슬라이드화면으로 이동
    
    $(".btn li").click(function(e){

        e.preventDefault();
        
        i = $(this).index();
        
        $(".btn li").removeClass("on");
        $(this).addClass("on");
        $(".panel").animate({"margin-left":-wid *i},500);        
        
    });

    
    //자동으로 슬라이드
    
    var auto = setInterval(function(){
        
        if(i == len-1){
            i = 0;
        }
        else{
            i++;    
        }
                
        $(".panel").animate({"margin-left":-wid *i},500);
        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
        
    },2000);


    //일시정지 버튼 누를때

    
    $(".pause").click(function(){
        
        $(this).toggleClass("play");
        
        if(j==0){
            
            clearInterval(auto);
            j = 1;
        }
        
        else if(j==1){
            
            
            auto = setInterval(function(){
        
                if(i ==len-1){
                    i = 0;
                }
                else{
                    i++;    
                }

                $(".btn li").removeClass("on");
                $(".btn li").eq(i).addClass("on");
                $(".panel").animate({"margin-left":-wid *i},500);
        
            },2000);
            
            j = 0;
        }
        
    });
    
    

    ////////////////////////////////////////////////////////////
    
    // family 구현

    $(".family p").click(function(){
        
        $(".family ul").toggleClass("f_on");
       // $(".family ul").css({"display":"block"});
        
    });
    

    //tab 구현

    $(".tab_menu >ul >li").click(function(e){

        e.preventDefault();

        var list = $(this).index();


        $(".tab_box >div").stop().hide();
        $(".tab_box >div").eq(list).stop().show();
        $(".tab_menu >ul>li").removeClass("tab_on");
        $(this).addClass("tab_on");

    });

});
