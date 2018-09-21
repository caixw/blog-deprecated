// Copyright 2018 by caixw, All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

// 主题颜色，可以定义部分内容，缺失的会从 prism.css 和 style.css 中继承。
const themes = {
    'light': [
        ['--background', '#fff'],
        ['--appbar-background', '#3f51b5'],
        ['--appbar-foreground', '#ebeaf6'],
        ['--appbar-link-foreground', '#bbb'],
        ['--post-background', '#ebeaf6'],
        ['--post-foreground', '#212121'],
        ['--post-foreground-link', '#000'],
        ['--post-foreground-meta', '#757575'],
        ['--divider-foreground', '#f5f5f5'],
        ['--placeholder-foreground', '#bdbdbd'],
        ['--hl-text', '#212121'],
        ['--hl-shadow', '#f5f5f5'],
        ['--hl-background', '#b3d4fc'],
        ['--hl-code-background', '#f5f2f0'],
        ['--hl-comment', 'slategray'],
        ['--hl-punctuation', '#999'],
        ['--hl-type', '#905'],
        ['--hl-string', '#690'],
        ['--hl-operator', '#9a6e3a'],
        ['--hl-keyword', '#07a'],
        ['--hl-class', '#dd4a68'],
        ['--hl-var', '#e90'],
    ],
    'dark': [
        ['--background', '#000'],
        ['--appbar-background', '#3f51b5'],
        ['--appbar-foreground', '#ccc'],
        ['--appbar-link-foreground', '#aaa'],
        ['--post-background', '#212121'],
        ['--post-foreground', '#ccc'],
        ['--post-foreground-link', '#fff'],
        ['--post-foreground-meta', '#eee'],
        ['--divider-foreground', '#333'],
        ['--placeholder-foreground', '#bdbdbd'],
        ['--hl-text', 'white'],
        ['--hl-shadow', 'black'],
        ['--hl-background', 'hsl(30, 20%, 25%)'],
        ['--hl-comment', 'hsl(30, 20%, 50%)'],
        ['--hl-type', 'hsl(350, 40%, 70%)'],
        ['--hl-string', 'hsl(75, 70%, 60%)'],
        ['--hl-operator', 'hsl(40, 90%, 60%)'],
        ['--hl-keyword', 'hsl(350, 40%, 70%)'],
    ]
};

// 保存在 localStorage 中的变量名称。
const themeKey = 'theme';
const store = window.localStorage;

initTheme()

function initTheme() {
    let name = getQuery(themeKey);

    if (!name) { // 地址参数中不存在，则从 store 中查找。
        name = store.getItem(themeKey);
    }

    if (!name) { // 依然不存在，则不需要变换主题颜色
        return
    }

    const theme = themes[name];
    if (!theme) {
        return
    }

    const html = document.getElementsByTagName('html')[0];
    theme.forEach((elem)=>{
        html.style.setProperty(elem[0],elem[1]);
    });

    store.setItem(themeKey, name);
}

function getQuery(name) {
    const url = new URLSearchParams(window.location.search);
    return url.get(name);
}
