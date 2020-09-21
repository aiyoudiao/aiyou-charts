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
  viewMode: "3D", //使用3D视图
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
AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function () {
  //异步加载插件
  var toolbar = new AMap.ToolBar();
  map.addControl(toolbar);
  var scale = new AMap.Scale({
    offset: new AMap.Pixel(10, 10),
  });
  map.addControl(scale);
});
```

</details>

### 添加一个超链接的标记点

超链接标记点是为了方便点击时直接跳转，但每一个 maker 都一个单击事件， `marker.on('click', function (data) {console.log(data)}); //绑定click事件`。  
你可以在单击事件中进行跳转，同时可以获取关于这个点的一些数据。你可以在创建这个 maker 的时候，通过给它设置 extData 属性，从而添加一些自定义数据。这样对于单页面应用来说更加友好。

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
                        </a>`,
});

/* 给绘制点以及移除点添加相应的单击事件 */
document.getElementById("show-point").addEventListener("click", function (e) {
  map.add(marker);
});
document.getElementById("hide-point").addEventListener("click", function (e) {
  map.remove(marker);
});
```

</details>

### 添加一个文本

[文档地址](https://lbs.amap.com/api/javascript-api/reference/overlay#text)

1. 文本标记继承自 marker，所以我就直接使用 marker，我觉得这样要灵活一些噢。
2. 初始化一个标记点

## 百度地图

素质三联：

1. [官网教程](http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/getkey)
2. [个人控制台](http://lbsyun.baidu.com/apiconsole/key#/home)
3. [1.0 API 文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a0b0)
4. [坐标拾取器](http://api.map.baidu.com/lbsapi/getpoint/index.html)
5. [个性化地图编辑器](http://lbsyun.baidu.com/index.php?title=open/custom)
6. []

### 入门案例

1. baidu/01-basic
2. baidu/02-async
3. baidu/03-3d
4. baidu/04-3d2
5. baidu/05-plugins
6. baidu/06-theme

<details>
<summary>01-basic</summary>

1. 引入百度地图的脚本并配置密钥
2. 在页面中添加容器 DIV，并设置宽高
3. 初始化 Map 对象
4. 初始化 Point 对象
5. 设置通过 map 对象设置中心点和地图级别(焦距)

</details>

<details>
<summary>02-async</summary>

1. 在页面中添加容器 DIV，并设置宽高
2. 在全局封装一个 init 函数，包含 01-basic 中 3-5 步的内容
3. 在 window.onload 的函数中创建 script 元素并且设置 src，在百度地图的脚本 url 中配置密钥同时添加一个 callback 参数，指向全局封装的 init 函数。
4. 把 script 元素追加到 body 中去。

</details>

<details>

<summary>03-3d</summary>

1. 设置地图的heading和tilt，heading是地图的3D旋转角度，tilt是地图的3D倾斜角度
2. 通过setInterval去设置heading，就能实现360度景点展示，非常有意思，但是会有渲染延迟。

</details>

<details>
<summary>04-3d2</summary>

1. 设置地图的type，设置为卫星图，然后把zoom设置低一点，就能看到地球。

</details>

<details>
<summary>05-plugins</summary>

1. ZoomControl 缩放或则放大的焦距控件
2. ScaleControl 当前缩放的地图比例尺的控件
3. 可以绑定地图的zoomstart和zoomend事件
4. 初始化控件时，可以设置锚点位置和偏移位置

</details>

<details>

<summary>06-theme</summary>

1. 第一种：在百度地图个性化编辑器中选择皮肤，并发布，拷贝样式ID，使用地图对象的设置样式方法，传入styleId。
2. 第二种：拷贝个性化编辑器中的json串儿，使用地图对象的设置样式方法，传入styleJson。

</details>

### 进阶案例

绘图、动画、轨迹

1. 绘图：绘制图标，绘制线条，多边形，文本
2. 弹窗：绑定事件，弹出百度弹窗
3. 普通动画：动画帧，开始、结束、取消、迭代事件。地图动画和CSS动画帧类似
4. 轨迹动画：折线集合，轨迹动画类。轨迹图要知道足够多的point，它是由足够多的点组合成的折线段。
