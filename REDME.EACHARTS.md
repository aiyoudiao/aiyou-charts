# echarts

一个使用非常广泛的JS开源可视化库。兼容性比较好，兼容IE8+，但是HeightCharts更好，它支持IE6+，但商业版收费。 

1. 支持千万级的数据展示
2. 在移动端做了优化，PC端展示的图表可以在移动端直接显示
3. 多渲染方案，可以跨平台使用，4.0版本后支持SVG。
4. 支持深度交互，支持动态数据、绚烂特效，支持3D绘图。

[官网文档](https://echarts.apache.org/zh/feature.html)
[官方案例](https://echarts.apache.org/examples/zh/index.html)
[社区案例](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)


## 基本使用

[入门教程](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)

###  自定义样式

[自定义主题](https://echarts.apache.org/zh/tutorial.html#%E4%B8%AA%E6%80%A7%E5%8C%96%E5%9B%BE%E8%A1%A8%E7%9A%84%E6%A0%B7%E5%BC%8F)

[官方主题编辑器](https://echarts.apache.org/zh/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E6%A0%B7%E5%BC%8F%E7%AE%80%E4%BB%8B)

推荐UE的人员去使用[主题编辑器](https://echarts.apache.org/zh/theme-builder.html)

在主题编辑器中调整样式之后，可以选择之后导出主题，这时候会导出一个json文件。   
也可以选择下载主题，有两个选项可供选择，一个是js版本，开箱即用，直接引入，然后使用。另一个是json版本，需要调用注册皮肤的方法来使用。  

引入自定义的皮肤脚本

```js
// HTML 引入 purple-passion.project.js 文件后（假设主题名称是 "purple-passion.project"）
var chart = echarts.init(dom, 'purple-passion.project');
```


注册皮肤

```js
$.getJSON('xxx/xxx/purple-passion.project.json', function (themeJSON) {
    echarts.registerTheme('purple-passion.project', JSON.parse(themeJSON))
    var chart = echarts.init(dom, 'purple-passion.project');
});
```

### svg渲染

在init时，将第三个参数传入，意为使用svg的渲染器，默认为canvas渲染器。  
如果频繁的更新动画，推荐使用canvas渲染器。如果是在大屏上显示，svg是一个不错的选择，矢量图保真，放大时图和文字也很清晰。


使用svg渲染器

```js
const chart = echarts.init(chartDom, 'purple-passion', {renderer: 'svg'});
```

## 基本概念

### series 系列

`系列是和图形之间进行映射的。`  
每一个系列对应这个echarts中的一张图，series取值可以是一个数组或者对象。  

在实际开发场景中，有多图展示，这个时候就会使用到多系列。
在series中添加多个对象，设置不同的type、data就可以实现多图例。

多系列混合

```js
chart.setOption({
    title: {
        text: '多系列（多图例）',
    },
    xAxis: {
        data: ['产品A', '产品B', '产品C', '产品D']
    },
    yAxis: {},
    series: [{
            type: 'pie',
            /* 左侧，上面 */
            center: ['45%', 60],
            radius: 35,
            data: [{
                    name: '季度一销量',
                    value: 200
                },
                {
                    name: '季度二销量',
                    value: 100
                },
                {
                    name: '季度三销量',
                    value: 150
                }
            ]
        },
        {
            type: 'line',
            data: [120, 320, 400, 90]
        },
        {
            type: 'bar',
            data: [100, 200, 500, 80]
        }
    ]
});
```

### dataset 数据集（数据源）

dataset可以让数据源被集中管理。  

设置数据源之后，将会使用encode 代替 data,encode可以过索引来取出dataset中的数据作为图例的data。

### 组件

常用组件包括这些：

1. xAXis 直角坐标系X轴
2. yAxis 直角坐标系Y轴
3. grid 直角坐标系底板
4. angleAxis 极坐标系角度轴
5. tooltip 悬浮提示框
6. legend 图例按钮
7. toolbox 工具条
8. visualMap 虚拟地图
9. dataZoom 数据区域缩放


#### legend 图例按钮

legend 需要和 series进行绑定，这样点击按钮才会显示或者隐藏相应的图例。
legend 和 series中每一项的name属性进行关联。

#### toolbox 工具条

支持图表另存为图片，以及选取缩放区域等等。

#### dataZoom 数据缩放区域

可以在图表数据量过多时，只显示指定区域的图表。

### 定位

大多数组件都提供了类似CSS absolute 这样的定位属性来控制组件的位置，有 left、right、top、bottom。  
他们支持的设定超超越absolute的属性限制，比如水平居中可以设置`left:center`，垂直居中可以设置为`top:center`。  
并且在设置这个属性时，有些组件的宽高也会随之改变，比如grid，修改grid的left、top、right、bottom 可以改变直角坐标系的位置和宽高。

### 坐标系

大部分图例是需要运行在坐标系中，比如line折线图、bar柱状图、scatter散点图、heatmap热力图等等。  
也有些图例不运行在坐标系中，比如pie 饼图、tree树图等等。  
也有些图例即能独立存在也能布局在坐标系，比如 graph 关系图等。  

坐标系分为：直角坐标系、极坐标系、地理坐标系(GEO)、单轴坐标系、日历坐标系等等。  

#### 双坐标系

设置多个yAxis，在series中每个图例中设置yAxisIndex的索引与yAxis中某一项对应。
多坐标系时，要设置xAxis的type为`category`。

#### 多坐标系

设置多个grid，设置多个yAxis和多个xAxis，在yAxis和xAxis中设置gridIndex与grid中某一项对应。同时series中每个图例也需要设置yAxisIndex和xAxisIndex的索引与yAxis和xAxis中某一项对应。  
不同的横纵坐标轴明确指定相应的直角坐标系底板，每个图例都要明确指定相应的横纵坐标轴。  
