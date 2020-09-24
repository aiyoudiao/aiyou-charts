<template>
  <ve-wordcloud
    :data="chartData"
    height="100%"
    :settings="chartSettings"
  ></ve-wordcloud>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
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
          }
        ].concat(Array(10).fill(1).map(item => {
          const value = parseInt(Math.random() * 100)
          return {
            name: `机器人${value}号`,
            value: value
          }
        }))
      },
      chartSettings: {
        color: [
          'rgba(97,216,0,0.7)',
          'rgba(204,178,26,0.7)',
          'rgba(245,166,35,0.7)',
          'rgba(156,13,113,0.7)'
        ],
        // sizeRange: [8, 12]
        sizeMin: 10,
        sizeMax: 14
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
