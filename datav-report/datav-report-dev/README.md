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

## vs code 注意事项

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