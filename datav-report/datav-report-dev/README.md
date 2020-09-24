# datav-report-dev

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 封装通用组件

1. CommonCard 通用卡片，用在第一排。在 CommonCard 中添加了两个插槽，一个具名插槽，一个默认插槽。

### vs code 注意事项

设置了 eslint 的保存自动修复时，要去掉 setting.json 中的这部分配置

```

  "editor.formatOnSave": true
```

eslint 保存自动修复

```
 "eslint.autoFixOnSave": true,
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "autoFix": true,
      "language": "html"
    },
    {
      "autoFix": true,
      "language": "vue"
    }
  ],
```

### 常用图例的一些使用

通常只需要设置 xAxis、yAxis、series 就能实现一个普通的图表。

xAxis 和 yAxis 的 type 只有 value 和 category，这两个属性也让 xAxis 和 yAxis 相辅相成。

areaStyle、itemStyle、lineStyle 分别是 面积区域样式、数据项样式(点的样式)、线条样式，smooth 让折线图显示的更加平滑。

通过 stack 可以将相同名称的系列数据或者图表进行合并。

坐标轴默认两侧会有间隙，可以通过 boundaryGap 来去除。

有时图例会显示不完整，可以通过将 grid 四个方向设置为 0 来让图例显示完全。
有时通过给坐标轴设置 min 和 max 的值，也能够解决图例显示不完全的问题，一般在 y 轴上设置。

图例之间的间隙是通过 itemGap 来控制的。

饼图的位置是通过 center 属性来控制的。

### 自定义图例

自定义图表很强大，它的 type 为 custom，可以通过它的 renderItem 方法来渲染你想渲染的图形。不光这一个方法，还有很多方法，在[官网](https://echarts.apache.org/zh/option.html#series-custom.renderItem)中可以找到。

自定义图例的 renderItem 方法中有两个参数，params 和 api，通过它们就能得到一些有用的数据，比如坐标。
最终返回的对象，就能绘制出自定义的图例或者图例的某一项。返回的可以是一个对象或者数组。
可以像在画布中绘制 svg 图表一样噢，所以能够把从[iconfont](https://www.iconfont.cn/search/index?q=triangle-down)找到的 svg 图标直接拿过来使用，直接复制里面的 svg 标签的 d 属性来使用。

```html
<svg
  t="1599341198563"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="8123"
  width="200"
  height="200"
>
  <path
    d="M128 320.001l383.744 383.744 383.744-383.744h-767.488z"
    fill="#666666"
    p-id="8124"
  ></path>
</svg>
```

### vue-echarts

[vue-echarts](https://github.com/ecomfe/vue-echarts) 是官方基于 echarts 和 vue 封装的一个库，可以简化你对 echarts 的操作，只需要传入相关的配置即可，用起来也比较方便

[vue-echarts 默认的宽高是 400\*600。

它的源码比较简单，就是你手写一个图表初始化的那些代码，同时它提供了一些更加通用的方法给你使用。

### v-charts

v-charts 是一个图表组件库，操作更加简便了。只需要传入结构化的数据，马上就能得到想要的图表信息。
正是如此，v-charts 中定义的某些属性和 echarts 中的 option 是不兼容的，所以需要进行二次学习才能掌握。
当你需要进行一些复杂的样式定制的时候，还是需要你使用 echarts 的 option。

## element ui

### el-card

Card  
它的源码比较简单也比较清晰。向外暴露的只有三个属性，header、body-style、shadow。

### el-menu 和 el-menu-item

Menu 和 Menu-item

### el-radio-group 和 el-radio-button

RadioGroup 和 RadioButton

### el-data-picker

DatePciker
可以通过 picker-options 来添加额外配置，从而可以定制化 data-picker。  
可以通过 unlink-panels 来消除两个时间面板的联动效果（在选择年份时的左边的面板会随着右侧的面板联动）。

阅读源码可以知道更多的实现细节，这就是好处。

### el-table 和 el-table-column

Table 和 TableColumn

### el-pagination

Pagination

**注意**：使用 pagination 的组件时，如果把 layout 属性中的值写错了，浏览器汇会报`vue.runtime.esm.js?2b0e:6243 Uncaught TypeError: Cannot read property 'key' of undefined`这样的错误，非常难排查。

```html
<!-- 错误的layout -->
<el-pagination
  layout="perv,pager,next"
  :total="100"
  :page-size="4"
  background
  @current-change="onPageChange"
></el-pagination>

<!-- 正确的layout -->
<el-pagination
  layout="prev,pager,next"
  :total="100"
  :page-size="4"
  background
  @current-change="onPageChange"
></el-pagination>
```

## 图例

### 饼图

饼图是不需要坐标系的，直接设置 series 即可。
label 属性中可以通过 formatter 来过滤要显示的数据。  
通过 position 的值，可以设置 label 在饼图内部显示还是外部显示。  
label 显示的位置，饼图外部或者饼图内部，默认值是 outter ，在饼图内部显示 label 时使用 inner。  
center 属性可以设置圆心的位置，比如`center: ['35%', '50%']`，圆心在画布的 x 轴百分之 35、y 轴的百分之五十。
radius 属性可以设置饼图的内半径和外半径，内半径就是圆心到内圈，外半径就是圆心到外圈，比如`radius: ['45%', '60%']`，饼图显示的区域就只是半径百分之 45 到半径百分之 60 的面积（默认值是百分之 0 到百分之 75），其它的都是空白区域。
radius 取的是画布的高度。
labelLine 分成两段，分别可以设置线段 1 和线段 2 的长度。
通过 clockwise 可以控制饼图是按照顺时针还是逆时针排列。
legend 可以指定容器高度同时设置为可滚动的类型，也可以设置它的排列方式。

### tooltip 提示框

trigger 属性表示触发类型，默认值是 item。  
通过 formatter 属性可以对提示框展示的内容进行定制化。

### bap

`src/views/BMap.vue，src/views/BMap2.vue` 是 vue 中使用 bmap 的参考示例

先得在 public 的 index.html 中引入官方 2.0 的百度地图脚本
然后引入 echarts 官方的 bmap 扩展包`import 'echarts/extension/bmap/bmap'`
最后设置百度地图可视化的配置项即可。
坐标系统一定要设置为 bmap

#### echarts@4.9.0 的 bug

已经提交了这个 bug 到官方的 github 了，
是 echarts/extension/bmap/BMapView.js 文件代码有问题。
代码位置在 120 行，newMapStyle2 应该改成 newMapStyle 就行了。

#### label

type 为 scatter 时为
label 分为普通 label 和悬浮时显示的 label

#### 普通散点和动态散点

scatter 是普通散点
effectScatter 是带波浪的动态散点

#### 悬浮动画和 波纹样式

hoverAnimation 是否开启悬浮动画
rippleEffect 是重新定义波纹样式

### vcharts 的 bmap 组件

vcharts 的 map 组件只能实现非常简单的功能，所以 vcharts 有封装基于百度、高德地图的 bmap、amap 组件。

使用 vcharts 的 bmap 组件，不需要在 index.html 中引入百度地图的脚本，也不需要引入 echarts 的 bmap 扩展。
非常的方便。

v-charts 将 echarts 的 options 中许多属性拆出来了，所以你可以直接通过`:name`的方式来使用，比如`:title="title"`的方式来使用

### 水球图 liquid fill

[配置项文档](https://github.com/ecomfe/echarts-liquidfill#api)

水球图使用的是echarts的 LiquidFill组件，是一个扩展组件，需要额外安装 liquidfill组件

**注意**: 水球图的数据需要从大到小放，不然显示的时候就会出问题。

水球非常的灵活，如果还不满足需求，可以直接看一下echarts-liquidfill这个组件的源码，这个源码src中只有四个文件。

**技巧**：如果要看这个组件有哪些配置，你可以通过查看它们默认的series中的options,比如echarts-liquidfill这个组件中src目录下的`liquidFillSeries.js`文件，这个文件中`defaultOption`属性就包含了很多属性，直接黏贴过来，改改就可以用了，就像修改CSS属性。

#### echarts-liquidfill 源码

liquidFillSeries.js：  
这个文件中有一些水球图的默认配置
liquidFillView.js：  
这个文件中有一个`echarts.extendChartView`方法，是echarts渲染图表的方法，传入的参数中有一个render函数，这个函数会渲染出图表。

#### v-charts 的水球图组件

按需引入该组件依赖。

### 词云图 word cloud

[配置项文档](https://github.com/ecomfe/echarts-wordcloud#usage)

词云图的配置项非常少，比水球图少很多

## git stash

[参考链接](https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html)

git stash 用于开发还未完成，但是需要切换分支时，可以暂存你git add 过的内容，这时候你就可以大胆切换分支了，
之后你还可以切换回原来的分支，再通过 git stash apply取回来。

常用命令：

1. 暂存一个 `git stash save "备注名称"`
2. 显示暂存列表 `git stash list`
3. 显示索引为0的暂存记录 `git stash show "stash@{0}"`
4. 显示索引为0的暂存记录详情 `git stash show -p "stash@{0}"`
5. 使用索引为0的暂存记录 `git stash apply "stash@{0}"`
6. 以出栈的方式取出索引为0的暂存记录 `git stash pop "stash@{0}"`
7. 丢掉索引为0的暂存记录 `git stash drop "stash@{0}"`
8. 清空所有的暂存记录 `git stash clear`
