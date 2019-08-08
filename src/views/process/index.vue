<template>
  <div class="dashboard-container">
    <el-tabs v-show="$route.meta.showParent" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="标准处理" name="standard">
        <standard />
      </el-tab-pane>
      <el-tab-pane label="终端处理" name="terminal">
        <terminal />
      </el-tab-pane>
      <el-tab-pane label="产品处理" name="product">
        <product />
      </el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Standard from './components/Standard'
import Terminal from './components/Terminal'
import Product from './components/Product'

export default {
  name: 'Process',
  components: { Standard, Terminal, Product },
  data() {
    return {
      activeName: 'standard'
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleClick(tab, event) {
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
