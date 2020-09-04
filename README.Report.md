# 数据报表

## 环境

node > 10
npm > 6
vue-cli > 4

### 环境安装

vue-cli

```s
# 安装命令vue命令行工具
npm i -g @vue/cli
# 查看vue-cli的版本，截止20200902，vue-cli的版本为：@vue/cli@4.5.4
vue -V
# 创建一个项目
vue create datav-report-dev
```

element ui

```s
vue add element
```

### 使用心得

1. 组件隔离，便于维护
2. 将共性的东西放入 mixin 中
3. [eslint 规则错误查询](https://eslint.cn/docs/rules/)
