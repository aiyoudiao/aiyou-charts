<template>
    <div class="total-orders">
        <common-card></common-card>
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
  mixins: [commonCardMixin]
}
</script>

<style lang="sass" scoped>

</style>
