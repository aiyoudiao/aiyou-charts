<template>
  <div class="total-sales">
    <common-card title="累计销售额" value="🐏 32,039,165">
      <template>
        <div class="compare"></div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="money">🐏 30,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCard from '../CommonCard'
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'total-sales',
  components: {
    CommonCard
  },
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.total-sales {
  .compare {
    height: 100%;
    background-color: yellow;
  }

  span {
    font-size: 12px;
  }

  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
}
</style>
