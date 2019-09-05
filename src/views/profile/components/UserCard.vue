<template>
  <el-card style="height: 300px;">
    <div slot="header">
      <span>我的账户</span>
    </div>
    <div class="user-profile">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="box-center">
            <el-avatar :src="user.avatar" :size="100" />
            <div class="user-name text-center">{{ user.name }}</div>
            <div class="user-email text-center text-muted">{{ user.email }}</div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-point">
              <svg-icon icon-class="point" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">账户余额</div>
              <div class="card-panel-num">9999</div>
            </div>
          </div>
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-money">
              <svg-icon icon-class="money" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">当月消费</div>
              <div class="card-panel-num">1234</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </el-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-profile {
    .user-name {
      padding-top: 10px;
      font-weight: bold;
    }
    .box-center {
      margin: 0 auto;
      display: table;
      padding: 20px;
    }
    .card-panel {
      height: 90px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;
      color: #666;
      background: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-point {
          background: #40c9c6;
        }

        .icon-money {
          background: #36a3f7;
        }
      }
      .icon-point {
        color: #40c9c6;
      }

      .icon-money {
        color: #36a3f7;
      }
      .card-panel-icon-wrapper {
        float: left;
        margin: 10px;
        padding: 10px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }
      .card-panel-icon {
        float: left;
        font-size: 50px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 20px 30px 20px 0;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
    .user-email {
      padding-top: 10px;
      font-weight: 400;
      font-size: 14px;
    }
    .user-label{
      font-weight: bold;
      color:#606266;
      line-height: 40px;
    }
  }
</style>
