<template>
  <div class="navbar">
    <!--<breadcrumb class="breadcrumb-container" />-->
    <el-row>
      <el-col :span="16">
        <el-menu :default-active="defaultActiveIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{ route.meta.title }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <div class="right-menu">
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" alt="avatar">
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <router-link to="/">
                <el-dropdown-item>
                  Home
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">Log Out</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="search-container">
            <el-input v-model="search" size="medium" placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      search: '',
      defaultActiveIndex: this.$route.path
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ]),
    routes() {
      return this.$router.options.routes.filter(i => !i.hidden)
    }
  },
  methods: {
    handleSelect(index) {
      this.$router.push(index)
      this.defaultActiveIndex = index
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }
    .search-container{
      float: left;
      width: 300px;
      margin-right: 20px;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
