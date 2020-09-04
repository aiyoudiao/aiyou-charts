<template>
  <div class="total-users">
    <common-card title="累计用户数" value="1,087,503">
      <template>
        <div
          id="total-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCard from '../CommonCard'
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'total-users',
  components: {
    CommonCard
  },
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.querySelector('#total-users-chart')
    const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' })
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [200],
          barWidth: 10,
          /* 可以通过stack 可以将相同名称的系列数据或者图表进行合并 */
          stack: '总量',
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          data: [250],
          barWidth: 10,
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])

            /* 绘制多个svg图 */
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M128 320.001l383.744 383.744 383.744-383.744h-767.488z',
                    x: -8,
                    y: -24,
                    width: 15,
                    height: 20
                  },
                  style: {
                    fill: '#45c946'
                  },
                  layout: 'cover'
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M511.744 319.999l-383.744 383.744h767.488l-383.744-383.744z',
                    x: -8,
                    y: 4,
                    width: 15,
                    height: 20
                  },
                  style: {
                    fill: '#45c946'
                  },
                  layout: 'cover'
                }
              ]
            }
            /* 绘制单个svg图 */
            // {
            //   type: 'path',
            //   position: endPoint,
            //   shape: {
            //     d: 'M514.525867 67.529387L3.413333 953.53856l1017.173334 2.92864L514.525867 67.529387z',
            //     x: 0,
            //     y: 0,
            //     width: 20,
            //     height: 20
            //   },
            //   style: {
            //     fill: 'red'

            //   }
            // }
          }
        }
      ],
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users {
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
}
</style>
