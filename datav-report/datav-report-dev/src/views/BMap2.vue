<template>
  <div class="bmap">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'

export default {
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    const testPoint = [
      { name: '海门', value: [121.15, 31.89, 80] }
    ]

    const testPoint2 = [
      { name: '南京', value: [118.78, 32.04, 100] }
    ]

    this.options = {
      title: {
        text: '外卖销售数据大屏',
        subtext: '销售趋势统计',
        sublink: 'http://www.hao6.website:999',
        left: 'center'
      },
      tooltip: {},
      bmap: {
        key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
        center: [104.114129, 37.550339] /* 中心点 */,
        zoom: 5 /* 缩放比例，焦距 */,
        roam: false /* 是否允许缩放 */,
        mapStyle: {
          // styleId: 'ae2291f853c26c030656ffe33e6fbc4d',
          styleJson: [
            {
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            },
            {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            },
            {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }
          ]
        }
      },
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap' /* 坐标系统为bmap */,
          data: testPoint,
          encode: { /* 指定数据中的某项，比如指定value，指定第2项 */
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          /* 动态设置地图中图标的大小 */
          symbolSize: function (val) {
            return val[2] / 10
          },
          /* 默认就显示 */
          label: {
            show: false,
            position: 'right',
            fontSize: '50%',
            // formatter: '{b}'/* 取name最为显示的lable */
            formatter: function (v) {
              console.log('v', v)

              return `${v.name}-${v.data.value[2]}`
            }
          },
          /* 默认高亮的时候显示 */
          emphasis: {
            label: {
              show: true
            }
          }

        },
        {
          name: 'Top 1',
          type: 'effectScatter', /* 带波纹的散点图 */
          coordinateSystem: 'bmap',
          data: testPoint2,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          },
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
            show: true,
            position: 'right',
            fontSize: '50%',
            formatter (v) {
              return `${v.name} - ${v.data.value[2]}`
            }
          },

          hoverAnimation: true, /* 开启悬浮时的动画效果 */
          rippleEffect: { /* 波纹样式 */
            brushType: 'stroke'/* 描绘的效果 */
          }

          // emphasis: {
          //   label: {
          //     show: false,
          //     fontSize: '50%',
          //     position: 'right',
          //     formatter (v) {
          //       return `${v.name} - ${v.data.value[2]}`
          //     },
          //   }
          // }
        }]
    }
  }
}
</script>

<style lang="scss" scoped>
.bmap {
  height: 100%;
  width: 100%;
}
</style>
