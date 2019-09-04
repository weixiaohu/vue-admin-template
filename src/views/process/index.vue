<template>
  <div class="app-container">
    <el-tabs v-show="$route.meta.showParent" v-model="processTab" type="border-card" @tab-click="handleClick">
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
import { mapGetters, mapActions } from 'vuex'
import Standard from './components/Standard'
import Terminal from './components/Terminal'
import Product from './components/Product'

export default {
  name: 'Process',
  components: { Standard, Terminal, Product },
  computed: {
    ...mapGetters(['processTab'])
  },
  methods: {
    ...mapActions('app', ['toggleProcessTab']),
    handleClick(tab) {
      this.toggleProcessTab(tab.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .el-tabs{
    min-height: calc(100vh - 90px);
    width: 100%;
    position: relative;
    overflow: auto;
  }
}
</style>
