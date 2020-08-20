# 地图可视化 demo

1. 高德地图
2. 百度地图

## 高德地图 - basic

### 官方教程

[入门教程](https://lbs.amap.com/api/javascript-api/guide/abc/prepare)

1. 引入 JS API 库
2. 添加 div 标签作为地图容器，同时给 div 指定 id
3. 设置地图容器的宽高

### 简单使用

1. 初始化一个地图

<details>

<summary>初始化地图</summary>

```css
/* 宽高 设置满 */
html,
body {
  width: 100%;
  height: 100%;
}

/* 容器宽高为父容器的宽高 */
#container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
```

··· html

<div id="container"></div>
···

```js
/* 初始化一个地图容器，注意这个container 与上面的 id为container的div对应，同时要给这个id为container的div设置宽高 */
var map = new AMap.Map("container", {
  zoom: 11, //级别
  zooms: [8, 15],
  center: [116.397428, 39.90923], //中心点坐标
  viewMode: "3D" //使用3D视图
});
```

</details>

### 添加一个控制器

[文档地址](https://lbs.amap.com/api/javascript-api/reference/map-control)

1. 引入插件 `['AMap.ToolBar','AMap.Scale']`
2. 在回调函数中去初始化插件对象，并挂载到地图上

<details>

<summary>添加新插件</summary>

```js
AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
  //异步加载插件
  var toolbar = new AMap.ToolBar();
  map.addControl(toolbar);
  var scale = new AMap.Scale({
    offset: new AMap.Pixel(10, 10)
  });
  map.addControl(scale);
});
```

</details>

### 添加一个超链接的标记点

超链接标记点是为了方便点击时直接跳转，但每一个maker都一个单击事件， `marker.on('click', function (data) {console.log(data)}); //绑定click事件`。  
你可以在单击事件中进行跳转，同时可以获取关于这个点的一些数据。你可以在创建这个maker的时候，通过给它设置extData属性，从而添加一些自定义数据。这样对于单页面应用来说更加友好。  

[文档地址](https://lbs.amap.com/api/javascript-api/reference/overlay#marker)

1. 初始化一个标记点对象，重写里面 content 属性为一个 a 标签，同时添加自定义的标记点样式
2. 将点追加到地图

<details>

<summary>初始化超链接标记点</summary>

```html
<link rel="stylesheet" href="./link-marker.css" />
```

```js
/* 定义一个能够跳转的超链接标记点 */
/* https://lbs.amap.com/api/javascript-api/reference/overlay/#marker */
var marker = new AMap.Marker({
  // 这里的经纬度，可以设置动态生成
  position: [116.406315, 39.908775],
  /* 这里使用了自定义地图标记点样式，记住添加相应的样式 */
  content: `<a class="link-marker" href="https://lbs.amap.com/api/javascript-api/reference/overlay#marker" tool="跳转页面"  alt="一个链接">
                            <div class="pin"></div><div class="pulse"></div>
                        </a>`
});

/* 给绘制点以及移除点添加相应的单击事件 */
document.getElementById("show-point").addEventListener("click", function(e) {
  map.add(marker);
});
document.getElementById("hide-point").addEventListener("click", function(e) {
  map.remove(marker);
});
```

</details>

### 添加一个文本

[文档地址](https://lbs.amap.com/api/javascript-api/reference/overlay#text)

1. 文本标记继承自marker，所以我就直接使用marker，我觉得这样要灵活一些噢。
2. 初始化一个标记点


## 百度地图
