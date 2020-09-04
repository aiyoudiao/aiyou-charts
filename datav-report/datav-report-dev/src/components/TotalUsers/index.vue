<template>
    <div class="total-users">
        <common-card></common-card>
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
  mixins: [commonCardMixin]
}
</script>

<style lang="sass" scoped>

</style>
