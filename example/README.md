# Basic

## Navigation

1. [custom-style](./custom-style.md)

## todo

1. [x] 修改 `.r-select-selection` `.r-select-menu` 结构
2. [x] clear
3. [ ] menu 不插入到body 而是插入到 select 内容，这样可以控制样式
4. [x] empty
5. [ ] searchEmpty
6. [ ] previewRender 控制预览区的显示
7. [ ] searchBlur 搜索框失焦
8. [ ] listScrollBottom 滚动到底部 ajax 获取内容

## Basic

<div id="example__basic_node" class="fast-flow-demo">loading...</div>

````css
.myOption {
    color:red;
}
html .r-select-menu-list-item--disabled.titleOption {
    font-weight: bold;
    font-size:2em;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    color:#333;
}
html .r-select-menu-list-item--disabled.titleOption:hover {
    background-color: white;
    color:#333;
}

html .r-select-menu--themes-simple.r-select-menu--themes-min .r-select-menu-body {
    max-height: 100px;
}
/* free */
html .r-select-menu-list-item--loading.r-select-menu-list-item--disabled,
html .r-select-menu-list-item--loading.r-select-menu-list-item--disabled:hover {
    background-color: transparent;
}
html body .r-select-menu--themes-simple .option---loading,
html body .r-select-menu--themes-simple .option---loading:hover {
    background-color: white;
    color:#34495e;
}
````

<!--MR-R {
    type: "pre",
    file: './basic.demo.js'
} -->
[./basic.demo.js](./basic.demo.js)
