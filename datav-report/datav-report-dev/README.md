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
