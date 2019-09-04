<template>
  <div class="app-container">
    <el-row :gutter="15" style="margin-bottom: 15px;">
      <el-col :span="8">
        <el-card class="box-card" style="height: 300px;">
          <div slot="header">
            <span>我的账户</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card" style="height: 300px;">
          <div slot="header">
            <span>充积分</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card" style="height: 600px;">
          <div slot="header">
            <span>充值明细</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
