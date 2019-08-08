<template>
  <div class="card-container">
    <el-row :gutter="50">
      <el-col :md="6" :lg="8">
        <router-link to="/process/detail/123">
          <process-card :filename="'测试文件.xlsx'" :processed-num="1000" :unprocessed-num="120" :update-time="updateTime1" />
        </router-link>
      </el-col>
      <el-col :md="6" :lg="8">
        <router-link to="/process/detail/456">
          <process-card :filename="'测试文件1.xlsx'" :processed-num="500" :unprocessed-num="100" :update-time="updateTime2" />
        </router-link>
      </el-col>
      <el-col :md="6" :lg="8">
        <router-link to="/process/detail/789">
          <process-card :filename="'测试文件2.xlsx'" :processed-num="5680" :unprocessed-num="1520" :update-time="updateTime3" />
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProcessCard from './ProcessCard'
export default {
  name: 'Standard',
  components: { ProcessCard },
  data() {
    return {
      updateTime1: this.$moment('2019-08-01 12:12:12').toDate(),
      updateTime2: this.$moment('2019-07-01 12:13:12').toDate(),
      updateTime3: this.$moment('2019-08-09 10:12:50').toDate()
    }
  }
}
</script>

<style lang="scss">
</style>
