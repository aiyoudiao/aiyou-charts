<template>
  <div class="today-users">
    <common-card title="今日交易用户数" value="81,014">
      <template>
        <div
          id="today-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCard from '../CommonCard'
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'today-users',
  components: {
    CommonCard
  },
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.querySelector('#today-users-chart')
    const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' })
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        // boundaryGap: false
        data: Array(14)
          .fill(0)
          .map((value, index) => {
            const num = index + 1
            const firstNumStr = num > 9 ? '0' + num : '' + num
            const lastNumStr = '00'
            return firstNumStr + ':' + lastNumStr
          })
      },
      yAxis: {
        show: false
      },
      color: ['#3398DB'],
      series: [
        {
          type: 'bar',
          data: Array(14)
            .fill(1)
            .map(value => Math.ceil(Math.random() * 10000)),
          smooth: true,
          barWidth: '60%'
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

<style lang="scss" scoped></style>
