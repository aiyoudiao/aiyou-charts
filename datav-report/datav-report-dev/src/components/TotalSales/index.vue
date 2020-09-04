<template>
  <div class="total-sales">
    <common-card title="累计销售额" value="￥ 32,039,165">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">38.79%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasis">￥ 30,000,000</span>
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
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
      // height: 50%;
      // background-color: yellow;

      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
}
</style>
