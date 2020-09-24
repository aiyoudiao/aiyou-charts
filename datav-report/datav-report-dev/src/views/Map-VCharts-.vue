<template>
  <div class="map-vcharts">
        <ve-map :data="chartData" :height="'600px'" :width="'600px'"></ve-map>
  </div>
</template>

<script>
export default {
  data () {
    return {

      chartData: {
        columns: ['位置', '税收'],
        rows: [
          { 位置: '上海', 税收: 123 },
          { 位置: '北京', 税收: 456 }

        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .map-vcharts {
    width: 100%;
    height: 100%;
  }
</style>
