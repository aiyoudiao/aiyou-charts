<template>
  <div class="total-orders">
    <common-card title="累计订单量" value="2,157,420">
      <template>
        <div
          id="total-orders-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">2,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCard from '../CommonCard'
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'total-orders',
  components: {
    CommonCard
  },
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.querySelector('#total-orders-chart')
    const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' })
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        /* 坐标轴两侧的间隙 */
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      // dataSet: []
      series: [
        {
          type: 'line',
          data: Array(12)
            .fill(1)
            .map(value => Math.ceil(Math.random() * 10000)),
          /* 面积区域的样式 */
          areaStyle: {
            color: 'purple'
          },
          /* 线条的样式 */
          lineStyle: {
            width: 0
          },
          /* 每一个点的样式 */
          itemStyle: {
            opacity: 0
          },
          /* 是否平滑显示 */
          smooth: true
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

<style lang="sass" scoped></style>
