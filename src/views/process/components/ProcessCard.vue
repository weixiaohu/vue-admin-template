<template>
  <el-card class="box-card" shadow="hover">
    <span slot="header">{{ filename }}</span>
    <div class="body">
      <el-progress type="circle" :percentage="percentage" :stroke-width="20" :width="150" />
    </div>
    <div style="padding: 14px;">
      <div class="row">处理条数<span class="text">{{ processedNum + unprocessedNum }}条</span></div>
      <div class="row">上传时间<span class="text">{{ updateStr }}</span></div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ProcessCard',
  props: {
    filename: {
      type: String,
      default: ''
    },
    processedNum: {
      type: Number,
      default: 0
    },
    unprocessedNum: {
      type: Number,
      default: 0
    },
    updateTime: {
      type: Date,
      default: function() {
        return new Date()
      }
    }
  },
  computed: {
    percentage: function() {
      if (this.processedNum + this.unprocessedNum === 0) {
        return 0
      }
      const percent = this.processedNum / (this.processedNum + this.unprocessedNum)
      return Math.round(percent * 100)
    },
    updateStr: function() {
      return this.$moment(this.updateTime).format('YYYY-MM-DD hh:mm:ss')
    }
  }
}
</script>

<style lang="scss">
  .box-card {
    .body{
      text-align: center;
    }
    .row{
      margin: 0 10%;
      line-height: 30px;
      font-size: 14px;
      color: #333;
    }
    .text {
      margin-left: 15px;
      color: #999;
    }
  }
</style>
