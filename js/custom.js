$(document).ready(function(){



    $(".pos_left > li > a").click(function(){

        // 클릭한 <a>의 인덱스
        var i = $(this).parent("li").index();

        // div가 on 클래스를 가지고 있는지 없는지
        var toggle = $(".toggleWrap >div").hasClass("on");

        var t1 = $(".toggleWrap >div:first-child").hasClass("on");
        var t2 = $(".toggleWrap >div:last-child").hasClass("on");

//        alert(i);

        //div가 on 클래스를 가지고 있을 때
        if(toggle){

            //햄버거가 클릭되어있었던 경우
            if(t1==true){

                if(i == 0){
                    $(".toggleWrap >div").removeClass("on");
                    $(".pos_left > li > a").removeClass("bg");
                }
                else{
                    $(".toggleWrap >div").removeClass("on");
                    $(".pos_left > li > a").removeClass("bg");
                    $(".toggleWrap >div").eq(i).addClass("on");
                    $(this).addClass("bg");
                }
            }

            //검색이 클릭되어있었던 경우
            else if(t2==true){

                if(i == 1){
                    $(".toggleWrap >div").removeClass("on");
                    $(".pos_left > li > a").removeClass("bg");
                }
                else{
                    $(".toggleWrap >div").removeClass("on");
                    $(".pos_left > li > a").removeClass("bg");
                    $(".toggleWrap >div").eq(i).addClass("on");
                    $(this).addClass("bg");
                }
            }
        }

        //div가 on 클래스를 가지고 있지 않을 때
        else{
            $(".toggleWrap >div").eq(i).addClass("on");
            $(this).addClass("bg");
        }

    });


    // 햄버거빵 사이트맵 버튼

    $(".toggle .siteMap").click(function(){

        /*siteMap 버튼색 toggle*/
        $(".toggle .siteMap").toggleClass("sitemap_on");

        /* sitemap ul display block */
        $("header .toggle .more").toggleClass("ul_on");

    });

    //search에 검색 box

    $(".search_toggle > div > p").click(function(){

        /* 검색창 ul display block */
        $(".toggleWrap .search_toggle > div > ul").toggleClass("search_ul_on");

    });



    ////////////////////////////////////////////////////

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
