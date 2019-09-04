<template>
  <div class="card-container">
    <el-card class="card-box">
      <div slot="header">
        <span>处理结果</span>
        <el-button class="tool-btn" type="text">下载数据</el-button>
      </div>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-card class="box-card" style="height: 300px;" shadow="never">
            <div class="text item">处理总量：10000</div>
            <div class="text item">处理完成：9000</div>
            <div class="text item">终端异常：980</div>
            <div class="text item">产品异常：180</div>
            <div class="text item">疑似可修复：190</div>
          </el-card>
        </el-col>
        <el-col :span="9">
          <el-card class="box-card" style="height: 300px;" shadow="never">
            <div style="height: 230px;">
              <v-chart :options="terminalOption" />
            </div>
            <el-button class="button">前往修复</el-button>
          </el-card>
        </el-col>
        <el-col :span="9">
          <el-card class="box-card" style="height: 300px;" shadow="never">
            <div style="height: 230px;">
              <v-chart :options="productOption" />
            </div>
            <el-button class="button">前往修复</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="card-box">
      <div slot="header">
        <span>异常终端原因</span>
        <el-button class="tool-btn" type="text" @click="dialogFormVisible = true">终端验证</el-button>
        <el-button class="tool-btn" type="text">下载数据</el-button>
      </div>
      <el-table
        :data="invalidList"
        :v-loading="invalidListLoading"
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
        <el-button class="tool-btn" type="text">下载数据</el-button>
      </div>
      <el-table
        :data="invalidList"
        :v-loading="invalidListLoading"
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
          width="300"
        />
        <el-table-column
          prop="type"
          label="终端类型"
          width="150"
        />
        <el-table-column
          prop="province"
          label="所属省"
          width="150"
        />
        <el-table-column
          prop="city"
          label="所属市"
          width="150"
        />
        <el-table-column
          prop="county"
          label="所属县"
          width="150"
        />
        <el-table-column
          prop="address"
          label="地址"
          width="300"
        />
        <el-table-column
          prop="yibao"
          label="是否医保"
          width="100"
        />
        <el-table-column
          prop="licenceCode"
          label="许可证"
          width="200"
        />
      </el-table>
    </el-card>
    <el-dialog
      title="终端验证"
      :visible.sync="dialogFormVisible"
      @closed="handleClosed"
    >
      <el-steps
        :active="activeStep"
        finish-status="success"
        align-center
        :style="{marginBottom: '40px'}"
      >
        <el-step title="上传文件" />
        <el-step title="终端验证" />
        <el-step title="返回结果" />
      </el-steps>
      <el-upload
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-exceed="handleExceed"
        :on-error="handleError"
        :file-list="fileList"
        :auto-upload="false"
        :limit="1"
        false
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传验证</el-button>
        <el-button v-show="showDownload" style="margin-left: 10px;" size="small" @click="download">下载数据</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
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
      invalidListLoading: true,
      terminalOption: {
        title: {
          text: '终端处理结果'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} 条'
        },
        legend: {
          orient: 'vertical',
          right: 0,
          data: ['处理完成', '处理中']
        },
        series: [
          {
            name: '处理结果',
            type: 'pie',
            radius: '85%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '处理完成' },
              { value: 310, name: '处理中' }
            ],
            labelLine: null,
            label: null
          }
        ],
        animationDuration: 2000
      },
      productOption: {
        title: {
          text: '产品处理结果'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} 条'
        },
        legend: {
          orient: 'vertical',
          right: 0,
          data: ['处理完成', '处理中']
        },
        series: [
          {
            name: '处理结果',
            type: 'pie',
            radius: '85%',
            center: ['50%', '50%'],
            data: [
              { value: 150, name: '处理完成' },
              { value: 666, name: '处理中' }
            ],
            labelLine: null,
            label: null
          }
        ],
        animationDuration: 2000
      },
      dialogFormVisible: false,
      activeStep: 0,
      fileList: [],
      showDownload: false
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
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleSuccess(response, file, fileList) {
      this.activeStep = 3
      this.showDownload = true
    },
    handleProgress(file, fileList) {
      this.activeStep = 2
    },
    handleError() {
      this.activeStep = 0
    },
    handleExceed() {
      this.$message({
        message: '一次只能上传验证一个文件',
        type: 'warning'
      })
    },
    download() {
      this.$message({
        message: '下载成功',
        type: 'success'
      })
    },
    handleClosed() {
      this.showDownload = false
      this.$refs.upload.clearFiles()
      this.activeStep = 0
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
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .button {
    float: right;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
