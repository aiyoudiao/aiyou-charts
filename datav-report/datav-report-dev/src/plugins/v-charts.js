import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import VeMap from 'v-charts/lib/map.common'
import VeBMap from 'v-charts/lib/bmap.common'
import VeLiquidFill from 'v-charts/lib/liquidfill.common'
import VeWordCloud from 'v-charts/lib/wordcloud.common'
import 'v-charts/lib/style.css'

Vue.component(VeLine.name, VeLine)
Vue.component(VeMap.name, VeMap)
Vue.component(VeBMap.name, VeBMap)
Vue.component(VeLiquidFill.name, VeLiquidFill)
Vue.component(VeWordCloud.name, VeWordCloud)
