"use strict";

$(document).ready(function(){
    // 语法高亮
    Prism.plugins.autoloader.languages_path='//cdn.bootcss.com/prism/1.5.1/components/';
    Prism.highlightAll(false);

    // 根据与页面顶部的距离，控制是否显示top按钮。
    $(window).on('scroll', function(){
        var button = $('#top');
        if($(document).scrollTop() > 30){
            button.fadeIn();
        }else{
            button.fadeOut();
        }
    }).trigger('scroll'); // end $(window).onscroll

    // 滚动到顶部
    $('#top').on('click', function(){
        var times = 20;
        var height = $('#top').offset().top;
        var offset = height / times;

        var tick = window.setInterval(function(){
            height -= offset;
            window.scrollTo(0, height);

            if (height <= 0){
                window.clearInterval(tick);
            }
        }, 10);

        return false;
    });

}); // end $(document).ready()
