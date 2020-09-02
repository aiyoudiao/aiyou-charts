# aiyou-charts
玩数据可视化

## 前端可视化解决方案

![众多可视化解决方案](./md-source/可视化解决方案-20200816095839.png)

HightCharts、AntV、Echarts 三大解决方案对比。

1. HightCharts 收费产品，文档齐全详细，兼容IE6+，图表分为三类：普通图表类、股票图类、地图类。使用方式类似，不同图表产品学习成本不大。
2. AntV 开源产品，文档齐全，符合互联网开发习惯，图表分为：G2、G6、L7、F2。不同图表产品使用差异大，有一定学习成本。
3. Echarts 开源产品，文档齐全，兼容IE8+，企业中名气大。图表产品使用类似，学习成本不大。

### canvas 画布

1. basic
2. 图片压缩


<details>
<summary>01-basic</summary>

1. 在html中编写canvas标签，得指定宽高
2. 获取canvas 的 dom
3. 获取canvas 上下文对象
4. 设置你要的绘图属性
5. 调用绘图的API方法

> **HELP**
> [html5 canvas 手册](https://www.w3school.com.cn/tags/html_ref_canvas.asp)

</details>


<details>
<summary>02-canvas-compress</summary>

1. html中添加一个type为file的input
2. 在script中定义上传类型以及上传容器限制的常量
3. 监听文件域的change事件，对文件的类型以及大小进行判断，最后调用`convertImageToBase64`方法
4. 在`convertImageToBase64`将图片转换成base64，并将base64码传到回调函数中，回调函数中会调用`compress`方法来进行base64后的图片的压缩
5. 在`compress`方法中定义压缩后的图片的最大宽高，将base64码赋值给Image对象的src，同时监听Image对象的load方法。
6. 根据图片的原始宽高除以最大宽高来计算图片的压缩比率，通过压缩比率来重置压缩后的图片宽高。当图片原始宽高小于最大宽高时可以不进行压缩，也可以将图片新的宽高设置为原始宽高。创建画布对象，设置它的宽高，创建画布上下文，将图片绘制到画布上去，调用canvas的toBase64URL方法，同时设置压缩比率和图片类型。最终调用回调函数，将压缩后的图片的base64码传到回调函数中去。最后会调用`uploadToServer`方法，将base64码传递到服务上。

</details>



### svg 矢量图

1. basic

<details>

<summary>01-basic</summary>

1. 在html中编写svg标签，指定宽高
2. 编写svg绘图标签
3. 编写绘图标签的属性和样式

> **HELP**
> [html5 svg 手册](https://www.w3school.com.cn/svg/svg_reference.asp)

</details>

### webgl 3d绘图

webgl 是一个3d绘图协议，可以借助硬件显卡让动画更加流程，也是通过canvas来实现的，但是属于另一套体系。

### zrender 2d绘图引擎

1. basic

<details>

<summary>01-basic</summary>

1. 引入zrender的类库
2. 编写一个div容器
3. 初始化zrender容器对象
4. 初始化zrender绘图对象（矩形、折现、圆、点...）
5. 调用zrender 的 add方法进行绘图

> **HELP**
> [zrender 官网](https://ecomfe.github.io/zrender-doc/public/)
> [zrender 官网-实例](https://ecomfe.github.io/zrender-doc/public/examples.html)
> [zrender 官网-文档](https://ecomfe.github.io/zrender-doc/public/api.html)
> [zrender 官网-实例代码](https://github.com/ecomfe/zrender-doc/tree/master/public/examples)

</details>

### d3 数据驱动dom 图形绘制

1. basic

<details>

<summary>01-basic</summary>

1. 引入d3的类库
2. 通过调用d3的API将html的dom转换成d3的dom
3. 调用d3的API(datum、data、text...)来实现以数据驱动DOM

> **HELP**
> [d3 官网](https://d3js.org/)
> [d3 案例](https://observablehq.com/@d3/gallery)
> [d3 学习之路](https://zhuanlan.zhihu.com/p/38001672)
> [d3 绘制思维导图](https://github.com/reclay/vue-d3-tree-example)

</details>

### three.js 基于webgl 3d 图形绘制

这是一个基于webgl的3d图形绘制库

1. basic

<details>
<summary>01-basic</summary>

> **HELP**
> [开源地址](https://github.com/mrdoob/three.js)
> [官方文档](https://threejs.org/docs/)

</details>

### heightcharts 纯JavaScript编写图表库

[官网](https://www.highcharts.com.cn/)  文档非常的细致。

分`Heightcharts JS`、`Hightstock JS`、`Highmaps JS`三个库  
免费提供给 个人学习、个人网站、非商业用途使用，商业用途需要付费。  

1. Heightcharts JS，一个优秀的图表库，如折线图、柱图、饼图、气泡图等等
2. Hightstock JS，一个优秀的股票图，适合金融领域的趋势图表展示。
3. Highmaps JS，一个优秀的地图，基于HTML5实现的一个地图库。

### antv 一套数据可视化的解决方案

[官网](https://antv.vision/zh)  文档非常的细致
AntV是蚂蚁金服全新一代的数据可视化方案，不是一个方案，而是一套方案：

1. G2: 可视化引擎（柱状图、折线图等等）
2. G2Plot: 图表库 （G2的扩展产品，用它来完成图表的绘制）
3. G6: 图可视化引擎（思维导图、流程图等等）
4. Graphin：基于G6的图分析组件
5. F2：移动可视化方案（移动端可视化）
6. ChartCube: AntV 图表在线制作平台
7. L7：地理控件数据可视化（地图可视化）

#### 实例流程

1. antv-g2/01-basic
2. antv-g6/01-basic
3. antv-L7

<details>

<summary>antv-g2/01-basic</summary>

1. 引入js库
2. 编写渲染容器的DOM
3. 获取渲染的DOM对象
4. 获取渲染的数据，准备数据源，G6和D3一样也是用数据驱动，G6使用canvas，D3使用svg。
5. 初始化G2绘图对象，如G2Plot.Line，配置绘图参数
6. 调用data方法填充数据，调用render完成渲染。

</details>

<details>

<summary>antv-g6/01-basic</summary>

1. 引入js库
2. 编写渲染容器的DOM
3. 获取渲染的数据，准备数据源，点集合、边集合
4. 获取渲染DOM对象
5. 初始化G6绘图对象，如G6.Graph，配置绘图参数
6. 调用render完成渲染

</details>

<details>

<summary>antv-l7</summary>

1. 引入js脚本
2. 编写渲染容器的DOM
3. 初始化地图对象 L7.Scene
4. 获取数据
5. 数据清洗（数据过滤）
6. 初始化绘图对象，如L7.PonintLayer，对绘图对象进行一系列的属性部署
7. 调用 L7.Scene.addLayer 来添加绘制的图层

</details>