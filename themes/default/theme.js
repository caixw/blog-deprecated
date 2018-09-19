// Copyright 2018 by caixw, All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

const themes = {
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
    ],
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
    ]
};

function changeTheme(name) {
    const html = document.getElementsByTagName('html')[0];
    const theme = themes[name];

    theme.forEach((elem)=>{
        html.style.setProperty(elem[0],elem[1]);
    })
}
