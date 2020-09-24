<template>
  <div id="container" class="container">
    LiquidFill
  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  mounted () {
    // const data = [0.68] /* 单个波浪 */
    const data = [0.68, 0.4, 0.2, 0.1] /* 多个波浪 */
    const color = [
      'red',
      'blue',
      'yellow',
      'green'
    ] /* 颜色也是按照data的顺序 */
    const echarts = this.$echarts.init(document.querySelector('#container'))
    echarts.setOption({
      series: [
        // {
        //   type: 'liquidFill',
        //   data,
        //   color,
        //   itemStyle: {
        //     opacity: 0.6
        //   },
        //   emphasis: {
        //     itemStyle: {
        //       opacity: 0.9
        //     }
        //   }
        // },
        // {
        //   type: 'liquidFill',
        //   data: [
        //     0.68,
        //     0.4,
        //     {
        //       value: 0.2,
        //       itemStyle: {
        //         opacity: 0.5
        //       },
        //       emphasis: {
        //         itemStyle: {
        //           opacity: 0.9
        //         }
        //       }
        //     }
        //   ],
        //   color: ['red', 'blue', 'yellow']
        // },
        // {
        //   type: 'liquidFill',
        //   data: [
        //     0.68,
        //     0.4,
        //     {
        //       value: 0.2,
        //       itemStyle: {
        //         opacity: 0.5
        //       },
        //       emphasis: {
        //         itemStyle: {
        //           opacity: 0.9
        //         }
        //       }
        //     }
        //   ],
        //   color: ['red', 'blue', 'yellow'],
        //   waveAnimation: false, /* 是否开启动态波浪动画 */
        //   animationDuration: 0, /* 动画延时的时间 */
        //   animationDurationUpdate: 0, /* 动画延时更新的时间 */
        //   amplitude: 0 /* 波纹的正负, 值越大，波浪越大 */
        // },
        // {
        //   type: 'liquidFill',
        //   data: [
        //     0.68,
        //     {
        //       value: 0.4,
        //       direction: 'left' /* 波浪的流动的方向，left往左 */
        //     },
        //     {
        //       value: 0.2,
        //       itemStyle: {
        //         opacity: 0.5
        //       },
        //       emphasis: {
        //         itemStyle: {
        //           opacity: 0.9
        //         }
        //       }
        //     }
        //   ],
        //   color: ['red', 'blue', 'yellow']
        // },
        // {
        //   type: 'liquidFill',
        //   data: [
        //     0.68,
        //     0.4,
        //     0.2
        //   ],
        //   backgroundStyle: { /* 设置背景样式 */
        //     borderWidth: 15,
        //     borderColor: 'white',
        //     color: 'white'
        //   },
        //   outline: { /* 外层边框 */
        //     show: false
        //   }
        // },
        // {
        //   type: 'liquidFill',
        //   data: [
        //     0.68,
        //     0.4,
        //     0.2
        //   ],
        //   backgroundStyle: { /* 设置背景样式 */
        //     borderWidth: 15,
        //     borderColor: 'white',
        //     color: 'white'
        //   },
        //   outline: { /* 外层边框 */
        //     show: true,
        //     borderDistance: 10, /* 设置内外边框之间的距离 */
        //     itemStyle: { /* 设置外层边框的样式 */
        //       borderWidth: 2,
        //       borderColor: 'red',
        //       shadowBlur: 'none' /* 去掉边框阴影 */
        //     }
        //   }
        // },
        {
          type: 'liquidFill',
          data: [
            0.68,
            0.4,
            0.2
          ],
          shape: 'arrow'/* 箭头形状，这个shape可以是svg的path属性 */

        }
      ]
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
