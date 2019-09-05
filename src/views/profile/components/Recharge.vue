<template>
  <el-card class="box-card" style="height: 300px;">
    <div slot="header">
      <span>充积分</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="充值方式">
            <el-radio v-model="form.pay" label="alipay" border><svg-icon icon-class="alipay" />&nbsp;&nbsp;支付宝</el-radio>
            <el-radio v-model="form.pay" label="wechat" border><svg-icon icon-class="wechat_pay" />&nbsp;&nbsp;微信</el-radio>
          </el-form-item>
          <el-form-item label="充值金额">
            <el-radio-group v-model="form.point">
              <el-radio-button border label="100">￥10（100积分）</el-radio-button>
              <el-radio-button border label="500">￥45（500积分）</el-radio-button>
              <el-radio-button border label="1000">￥80（1000积分）</el-radio-button>
              <el-radio-button border label="2000">￥150（2000积分）</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="submit-btn">
            <el-button type="success">立即提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'Recharge',
  data() {
    return {
      form: {
        pay: 'alipay',
        point: 100
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .submit-btn{
    margin-left: 200px;
  }
</style>
