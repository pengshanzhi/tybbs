<template>
  <div>
      <x-header title="本月账单" :left-options="{showBack: true}"></x-header>

    <v-chart
      :data="data"
      :padding="[20, 'auto']">
      <v-tooltip disabled />
      <v-scale y :options="yOptions" />
      <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#FE5D4D','#3BA4FF','#737DDE']" />
      <v-legend :options="legendOptions" />
      <v-guide type="html" :options="htmlOptions" />
    </v-chart>

    <van-cell title="娱乐" icon="location-o" value="30.00" />
    <van-cell title="娱乐" icon="location-o" value="30.00" />
    <van-cell title="娱乐" icon="location-o" value="30.00" />
    <van-cell title="娱乐" icon="location-o" value="30.00" />
    <van-cell title="娱乐" icon="location-o" value="30.00" />
  </div>
</template>

<script>
import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale, XHeader} from 'vux'
import { Cell, CellGroup } from 'vant';
const data = [
  { name: '生活缴费', percent: 83.59, a: '1' },
  { name: '购物消费', percent: 2.17, a: '1' },
  { name: '其他', percent: 14.24, a: '1' }
]

const map = {}
data.map(obj => {
  map[obj.name] = obj.percent + '%'
})

export default {
  name:'bill',
  components: {
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    VPie,
    VGuide,
    VScale,
    XHeader,
    [Cell.name] : Cell,
    [CellGroup.name] : CellGroup
  },
  data () {
    return {
      map,
      htmlOptions: {
        position: [ '50%', '45%' ],
        html: `
          <div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>`
      },
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      data
    }
  }
}
</script>


<style scoped>

</style>


