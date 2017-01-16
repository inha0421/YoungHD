$(document).ready(function(){

    //슬라이드 구현
    
    
    var i = $(".btn .on").index();
    var wid = $(".slider").width();
    var len = $(".btn li").length;
    var j = 0;
    
    //버튼 on 클래스처리
    //버튼 누르면 해당 슬라이드화면으로 이동
    
    $(".btn li").click(function(){
        
        i = $(this).index();
        
        $(".btn li").removeClass("on");
        $(this).addClass("on");
        $(".panel").animate({"margin-left":-wid *i},500);        
        
    });
    

    
    //슬라이드 함수
    
    var auto = setInterval(function(){
        
        if(i ==len-1){
            i = 0;
        }
        else{
            i++;    
        }
                
        $(".panel").animate({"margin-left":-wid *i},500);
        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
        
    },1500);
    
    
    
    $(".slider >div p").click(function(){
        
        $(".slider >div p").toggleClass("pause");
        
        
    });
    
    
    $(".pause").click(function(){
        
        $(".pause").toggleClass("play");
        
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
                        
                $(".panel").animate({"margin-left":-wid *i},500);
                $(".btn li").removeClass("on");
                $(".btn li").eq(i).addClass("on");
        
            },1500);
            
            j = 0;
        }
            
        
        
    });
    
    
    //자동재생
    
    
    
    
    
    //플레이버튼
    
    
    
    
    
    //일시정지 버튼
    
    
    
    
    
    // family 구현
    
    
    $(".family p").click(function(){
        
        $(".family ul").toggleClass("f_on");
       // $(".family ul").css({"display":"block"});
        
    });
    
});
