<template>
  <div id="container" class="container">word cloud</div>
</template>

<script>

import 'echarts-wordcloud'

export default {
  mounted () {
    const data = [{
      name: '小尼莫',
      value: 100
    },
    {
      name: '小钢牙',
      value: 50
    },
    {
      name: '小布利',
      value: 30
    }]

    const chart = this.$echarts.init(document.querySelector('#container'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data,
        shape: 'triangle',
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
