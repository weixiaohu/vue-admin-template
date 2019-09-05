<template>
  <div class="app-container">
    <el-row :gutter="15" style="margin-bottom: 15px;">
      <el-col :span="8">
        <user-card :user="user" />
      </el-col>
      <el-col :span="16">
        <recharge />
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="12">
        <recharge-details />
      </el-col>
      <el-col :span="12">
        <use-details />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Recharge from './components/Recharge'
import UseDetails from './components/UseDetails'
import RechargeDetails from './components/RechargeDetails'
export default {
  name: 'Profile',
  components: { UserCard, Recharge, UseDetails, RechargeDetails },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>
