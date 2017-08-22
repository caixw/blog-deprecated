"use strict";

window.document.addEventListener('DOMContentLoaded', ()=>{
    // 语法高亮
    Prism.plugins.autoloader.languages_path='//cdn.bootcss.com/prism/1.6.0/components/';
    Prism.highlightAll(false);

    initTop()
})

// 初始化所有与 goto top 相关的内容
function initTop () {
    const top = window.document.getElementById('top')

    const scrollTop = function() {
        return document.body.scrollTop + document.documentElement.scrollTop
    }

    // 根据与页面顶部的距离，控制是否显示 top 按钮。
    const showTopButton = function() {
        const dsp = scrollTop() > 30 ? 'block' : 'none'
        if (dsp !== top.style.display) {
            top.style.display = dsp
        }
    }

    showTopButton()
    window.addEventListener('scroll', ()=>{showTopButton()})

    // 滚动到顶部
    top.addEventListener('click', (event)=>{
        const times = 20;
        let height = scrollTop()
        const offset = height / times;

        const tick = window.setInterval(function(){
            height -= offset;
            window.scrollTo(0, height);

            if (height <= 0){
                window.clearInterval(tick);
            }
        }, 10);

        event.returnValue = false // 防止继续执行 A 标签的 href
    });
}
