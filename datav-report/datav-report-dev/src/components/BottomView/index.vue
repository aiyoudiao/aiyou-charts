<template>
  <div id="bottom-view" class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">关键词搜索</div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <vue-echarts :options="searchUserOption"></vue-echarts>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <vue-echarts :options="searchUserOption || searchNumberOption"></vue-echarts>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180"> </el-table-column>
                <el-table-column prop="keyword" label="关键字" width="180"> </el-table-column>
                <el-table-column prop="count" label="总搜索量"> </el-table-column>
                <el-table-column prop="users" label="搜索用户数"> </el-table-column>
              </el-table>
              <el-pagination
              layout="prev,pager,next"
              :total="100"
              :page-size="4"
              background
              @current-change="onPageChange"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <vue-echarts :options="categoryOptions"></vue-echarts>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom-view',
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
          // min: 0,
          // max: 500
        },
        series: [
          {
            type: 'line',
            data: Array(12).fill(1).map((value, index) => {
              return Math.ceil(Math.random() * 500)
            }),
            areaStyle: {
              color: 'rgba(95, 187, 255, 0.5)'
            },
            lineStyle: {
              color: 'rgba(95, 187, 255, 0.5)'
            },
            itemStyle: {
              // color: 'rgba(95, 187, 255, 0.5)'
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
        // color: []
      },
      searchNumberOption: {},
      tableData: Array(4).fill(0).map((value, index) => {
        return {
          id: index + 1,
          rank: index + 1,
          keyword: '北京' + index,
          count: 100 - index,
          users: 90 - index,
          range: `${90 - index}%`
        }
      }),
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  mounted () {
    this.renderPieChart()
  },
  methods: {
    onPageChange (page) {
      console.log(page)
    },
    renderPieChart () {
      const mockData = [
        {
          legendName: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          },
          name: '粉面粥店 | 15.40%'
        },
        {
          legendName: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '简餐便当 | 22.30%'
        },
        {
          legendName: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: {
            color: '#5085f2'
          },
          name: '汉堡披萨 | 21.15%'
        }
      ]

      this.categoryOptions = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        },
        {
          text: '累计订单量',
          subtext: '320',
          x: '34.5%',
          y: '42.5%',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          textAlign: 'center'
        }
        ],
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: mockData,
            /* 圆心位置 */
            center: ['35%', '50%'],
            /* 饼图的 内半径和外半径，默认值是百分之0到百分之75 */
            radius: ['45%', '60%'],
            label: {
              normal: {
                show: true,
                position: 'outter', /* label显示的位置，饼图外部或者饼图内部，默认值是outter ，在饼图内部显示label时使用inner */
                formatter (params) {
                  // console.log(params)
                  // return `${params.data.legendName}|${params.data.percent}`
                  return params.data.legendName
                }
              }
            },
            /* 折线分两段 */
            labelLine: {
              normal: {
                length: 5, /* 线段1 */
                length2: 3, /* 线段2 */
                smooth: true/* 绘制平滑的线条 */
              }
            },
            clockwise: false, /* 是否顺时针，true为顺时针，false为逆时针 */
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ],
        legend: {
          type: 'scroll', /* 可滚动的图例 */
          orient: 'vertical', /* 垂直方向对齐 */
          height: 250, /* 指定图例容器的高度 */
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter (params) {
            // console.log(params)
            let str = params.seriesName
            str += '<br />'
            str += params.marker /* marker 就是对应区域的饼图的小圆店 */
            str += params.data.legendName
            str += '<br />'
            str += `数量：${params.data.value}`
            str += '<br />'
            str += `占比：${params.data.percent}`

            return str
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }
    }
    .table-wrapper {
      flex: 1;
      margin-top: 20px;
      padding: 0 20px 20px;
      .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
      }
    }
  }
}
</style>
