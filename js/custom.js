$(document).ready(function(){


    var li = $(".toggle").hasClass("toggle_on");
    var sear = $(".search_toggle").hasClass("search_on");


    /* 헤더 높이 같이 토글처리 */
    //이거 안됌...

    $("header .pos_left >a").click(function(){

        if(li){
            $("header").css({"height":"250px"});
            //            $("header").toggleClass("header_on");
        }

        else if(sear){
            $("header").toggleClass("header_on");
        }

    });





    //햄버거빵 toggle

    $(".list").click(function(){

        /* search toggle이 켜있으면 끄기 */
        $(".search_toggle").removeClass("search_on");

        /* 햄버거빵 toggle display block */
        $(".toggle").toggleClass("toggle_on");

    });

    $("header .toggle .siteMap").click(function(){

        /*siteMap 버튼색 toggle*/
        $(".toggle .siteMap").toggleClass("sitemap_on");

        /* sitemap ul display block */
        $("header .toggle .more").toggleClass("ul_on");

    });


    //검색 toggle

    $(".search").click(function(){


        /* 햄버거 toggle이 켜있으면 끄기 */
        $(".toggle").removeClass("toggle_on");


        /* 검색 toggle display block */
        $(".search_toggle").toggleClass("search_on");


    });

    $(".toggleWrap .search_toggle > div > p").click(function(){

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
