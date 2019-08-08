<template>
  <div class="card-container">
    <el-card class="card-box">
      <div slot="header">
        <span>处理结果</span>
        <el-button class="tool-btn" type="text">下载数据</el-button>
      </div>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">2</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">3</div></el-col>
      </el-row>
    </el-card>
    <el-card class="card-box">
      <div slot="header">
        <span>异常终端原因</span>
        <el-button class="tool-btn" type="text">终端验证</el-button>
        <el-button class="tool-btn" type="text">下载数据</el-button>
      </div>
      <el-table
        :data="invalidList"
        :v-loading="listLoading"
        element-loading-text="Loading"
        highlight-current-row
        stripe
        style="width: 100%"
      >
        <el-table-column
          type="index"
          width="50"
        />
        <el-table-column
          prop="name"
          label="终端名称"
        />
        <el-table-column
          prop="type"
          label="异常分类"
          width="250"
        />
        <el-table-column
          prop="reason"
          label="异常原因"
          width="300"
        />
        <el-table-column
          label="操作"
          width="180"
        />
      </el-table>
      <el-pagination
        :page-size="10"
        :pager-count="5"
        layout="prev, pager, next"
        :total="invalidTotal"
      />
    </el-card>
    <el-card class="card-box">
      <div slot="header">
        <span>新增终端</span>
        <el-button class="tool-btn" type="text">下载数据</el-button>新增终端</div>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">2</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">3</div></el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { getInvalidTerminals } from '@/api/table'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['id'],
  data() {
    return {
      invalidList: null,
      invalidTotal: 0,
      invalidListLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.invalidListLoading = true
      getInvalidTerminals().then(response => {
        this.invalidList = response.data.items
        this.invalidTotal = response.data.total
        this.invalidListLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .card-container{
    width: 1200px;
    margin:auto;
    .card-box{
      margin-bottom: 15px;
      .tool-btn{
        float: right; padding: 3px
      }
    }
  }
</style>
