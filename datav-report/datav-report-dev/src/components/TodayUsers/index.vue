<template>
    <div class="today-users">
        <common-card></common-card>
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
  mixins: [commonCardMixin]
}
</script>

<style lang="sass" scoped>

</style>
