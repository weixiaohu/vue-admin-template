<template>
  <div class="app-container">
    <el-row :gutter="15" style="margin-bottom: 15px;">
      <el-col :span="12">
        123
      </el-col>
      <el-col :span="12">
        <el-row :gutter="15" style="margin-bottom: 15px;">
          <el-col :span="24">
            <el-button type="primary">下载模板</el-button>
            <el-button type="warning">我要验证</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="15" type="flex" align="middle" style="margin-bottom: 15px;">
          <el-col :span="20">
            <el-progress :text-inside="true" :stroke-width="24" status="success" :percentage="70" />
          </el-col>
          <el-col :span="4">
            <el-button type="text">下载结果</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="15" style="margin-bottom: 15px;">
          <el-col :span="12">
            <v-chart :options="pieOption" style="width: 100%;height: 300px;" />
          </el-col>
          <el-col :span="12">
            <v-chart :options="barOption" style="width: 100%;height: 300px;" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="24" />
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Checking',
  data() {
    return {
      pieOption: {
        title: {
          text: '验证完成比例',
          bottom: 0
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} 条'
        },
        legend: {
          orient: 'vertical',
          left: '0',
          top: '0',
          data: ['处理完成', '处理中']
        },
        series: [
          {
            name: '处理结果',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '处理完成' },
              { value: 310, name: '处理中' }
            ],
            labelLine: null,
            label: null
          }
        ],
        animationDuration: 2000
      },
      barOption: {
        title: {
          text: '验证分类统计',
          bottom: 0
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 15px;
  }
}
</style>
