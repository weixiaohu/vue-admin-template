<template>
  <el-card class="box-card">
    <div slot="header">
      <span>使用明细</span>
    </div>
    <div class="filter-container">
      <el-date-picker
        v-model="listQuery.useDate"
        type="daterange"
        size="small"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      />
      <el-button type="primary" size="small" @click="search">查询</el-button>
    </div>
    <el-table
      :data="list"
      border
      :v-loading="listLoading"
      element-loading-text="Loading"
      highlight-current-row
      stripe
      style="width: 100%"
      max-height="400"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="updateTime"
        label="使用时间"
      />
      <el-table-column
        prop="usePoint"
        label="积分变化"
        width="150"
      />
      <el-table-column
        prop="type"
        label="类型"
        width="100"
      />
    </el-table>
    <el-pagination
      :page-size="10"
      :pager-count="5"
      layout="prev, pager, next"
      :total="total"
    />
  </el-card>
</template>

<script>
export default {
  name: 'UseDetails',
  data() {
    const moment = this.$moment
    return {
      list: [],
      listQuery: [],
      listLoading: false,
      total: 10,
      pickerOptions: {
        shortcuts: [{
          text: '当月',
          onClick(picker) {
            const start = moment().startOf('month').toDate().getTime()
            picker.$emit('pick', [start, new Date().getTime()])
          }
        }, {
          text: '近3个月',
          onClick(picker) {
            const start = moment().add(-3, 'M').toDate().getTime()
            picker.$emit('pick', [start, new Date().getTime()])
          }
        }, {
          text: '近1年',
          onClick(picker) {
            const start = moment().add(-1, 'y').toDate().getTime()
            picker.$emit('pick', [start, new Date().getTime()])
          }
        }]
      }
    }
  },
  methods: {
    search() {
      console.log(this.listQuery)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
