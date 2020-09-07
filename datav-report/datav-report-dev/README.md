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

设置了eslint的保存自动修复时，要去掉setting.json中的这部分配置

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

通常只需要设置xAxis、yAxis、series就能实现一个普通的图表。

xAxis 和 yAxis 的type 只有 value 和 category，这两个属性也让xAxis和yAxis相辅相成。  

areaStyle、itemStyle、lineStyle 分别是 面积区域样式、数据项样式(点的样式)、线条样式，smooth 让折线图显示的更加平滑。  

通过stack 可以将相同名称的系列数据或者图表进行合并。

坐标轴默认两侧会有间隙，可以通过boundaryGap来去除。

有时图例会显示不完整，可以通过将grid四个方向设置为0来让图例显示完全。
有时通过给坐标轴设置min和max的值，也能够解决图例显示不完全的问题，一般在y轴上设置。

图例之间的间隙是通过itemGap来控制的。

饼图的位置是通过center属性来控制的。

### 自定义图例

自定义图表很强大，它的type为custom，可以通过它的renderItem方法来渲染你想渲染的图形。不光这一个方法，还有很多方法，在[官网](https://echarts.apache.org/zh/option.html#series-custom.renderItem)中可以找到。

自定义图例的renderItem方法中有两个参数，params和api，通过它们就能得到一些有用的数据，比如坐标。
最终返回的对象，就能绘制出自定义的图例或者图例的某一项。返回的可以是一个对象或者数组。
可以像在画布中绘制svg图表一样噢，所以能够把从[iconfont](https://www.iconfont.cn/search/index?q=triangle-down)找到的svg图标直接拿过来使用，直接复制里面的svg标签的d属性来使用。

```html
<svg t="1599341198563" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8123" width="200" height="200"><path d="M128 320.001l383.744 383.744 383.744-383.744h-767.488z" fill="#666666" p-id="8124"></path></svg>
```

### vue-echarts

[vue-echarts](https://github.com/ecomfe/vue-echarts) 是官方基于echarts 和 vue封装的一个库，可以简化你对echarts的操作，只需要传入相关的配置即可，用起来也比较方便

[vue-echarts 默认的宽高是400*600。  

它的源码比较简单，就是你手写一个图表初始化的那些代码，同时它提供了一些更加通用的方法给你使用。

### v-charts

v-charts 是一个图表组件库，操作更加简便了。只需要传入结构化的数据，马上就能得到想要的图表信息。
正是如此，v-charts中定义的某些属性和echarts中的option是不兼容的，所以需要进行二次学习才能掌握。
当你需要进行一些复杂的样式定制的时候，还是需要你使用echarts的option。

## element ui

### el-card

Card  
它的源码比较简单也比较清晰。向外暴露的只有三个属性，header、body-style、shadow。

### el-menu和el-menu-item

Menu 和 Menu-item

### el-radio-group 和 el-radio-button

RadioGroup 和 RadioButton

### el-data-picker

DatePciker
可以通过picker-options来添加额外配置，从而可以定制化data-picker。  
可以通过unlink-panels来消除两个时间面板的联动效果（在选择年份时的左边的面板会随着右侧的面板联动）。

阅读源码可以知道更多的实现细节，这就是好处。

### el-table 和 el-table-column

Table 和 TableColumn

### el-pagination

Pagination

**注意**：使用pagination的组件时，如果把layout属性中的值写错了，浏览器汇会报`vue.runtime.esm.js?2b0e:6243 Uncaught TypeError: Cannot read property 'key' of undefined`这样的错误，非常难排查。

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

饼图是不需要坐标系的，直接设置series即可。
label属性中可以通过formatter来过滤要显示的数据。  
通过position的值，可以设置label在饼图内部显示还是外部显示。  
label显示的位置，饼图外部或者饼图内部，默认值是outter ，在饼图内部显示label时使用inner。  
center属性可以设置圆心的位置，比如`center: ['35%', '50%']`，圆心在画布的x轴百分之35、y轴的百分之五十。
radius属性可以设置饼图的内半径和外半径，内半径就是圆心到内圈，外半径就是圆心到外圈，比如`radius: ['45%', '60%']`，饼图显示的区域就只是半径百分之45到半径百分之60的面积（默认值是百分之0到百分之75），其它的都是空白区域。
radius取的是画布的高度。
labelLine分成两段，分别可以设置线段1和线段2的长度。
通过clockwise可以控制饼图是按照顺时针还是逆时针排列。
legend可以指定容器高度同时设置为可滚动的类型，也可以设置它的排列方式。

### tooltip 提示框

trigger属性表示触发类型，默认值是item。  
通过formatter属性可以对提示框展示的内容进行定制化。
