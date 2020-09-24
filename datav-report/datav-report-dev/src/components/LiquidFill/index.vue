<template>
  <ve-liquidfill
    :data="chartData"
    height="100%"
    :settings="chartSettings"
  ></ve-liquidfill>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [
          {
            title: '支付转化率',
            percent: 0.28999
          }
        ]
      },
      chartSettings: {}
    }
  },
  methods: {
    getColor (percent) {
      return percent > 0 && percent < 0.5 ? 'rgba(97, 216, 0, 0.7)'
        : percent > 0.5 && percent <= 0.8 ? 'rgba(204, 178, 26, 0.7)'
          : percent > 0.8 ? 'rgba(241, 47, 28, 0.7)' : '#c7c7cb'
    }
  },
  mounted () {
    this.chartSettings = {
      seriesMap: {
        支付转化率: {
          radius: '80%',
          label: {
            normal: {
              formatter (v) {
                // console.log('v', v)
                return `${Math.floor(v.data.value * 100)}%`
              },
              textStyle: {
                fontSize: 36,
                color: '#999',
                fontWeight: 'normal'
              },
              insideColor: '#fff' /* 波浪与文字重叠时的颜色 */,
              position: ['50%', '50%']
            }
          },
          outline: {
            itemStyle: {
              borderColor: '#aaa4a4',
              borderWidth: 1,
              color: 'none',
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            opacity: 0.95,
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          amplitude: 8 /* 振幅，波浪的幅度 */,
          color: [this.getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
