<template>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <ul>
      <li v-for="(item,index) of arrList"
          :key="index">
        <div>{{item}}</div>
        <div>{{pwd | capitalize}}</div>
        <el-button type="text"
                   @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog title="提示"
                   :visible.sync="dialogVisible"
                   width="30%"
                   :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer"
                class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </li>
    </ul>
    <!-- <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[10, 20, 30, 100]"
                   :page-size="10"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="menuList.length">
    </el-pagination> -->
  </div>
</template>
<script>
import crypto from 'crypto'
import { Encrypt, Decrypt } from '@/utils/crypto'
export default {
  name: 'Pages',
  data () {
    return {
      menuList: [],
      currentPage: 1,
      pagesItem: 10,
      arrList: [],
      pwd: 'aaaaabB',
      timer: null,
      dialogVisible: false
    }
  },
  watch: {

  },
  computed: {},
  methods: {
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info'
          })
        }
      })
    },
    handleClose (done) {

    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagesItem = val
      // 如果当前页是第二页，每页显示20条

      this.getArrList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      // 如果当前页是第二页，每页显示10条
      this.currentPage = val
      this.$router.push({ name: 'pages', params: { id: val } })

      this.getArrList()
      this.arrList = this.menuList.slice(val * this.pagesItem - this.pagesItem, val * this.pagesItem)
    },
    getArrList () {
      this.arrList = this.menuList.slice(this.currentPage * this.pagesItem - this.pagesItem, this.currentPage * this.pagesItem)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    if (this.$route.params.id) {
      this.currentPage = Math.round(this.$route.params.id)
    }
    for (var i = 0; i < 109; i++) {
      var a = i + 'aa'
      this.menuList.push(a)
    }
    this.getArrList()
    const md5 = crypto.createHash('md5')
    md5.update(this.pwd)
    const md5pwd = md5.digest('hex')
    console.log('md5' + md5pwd)

    this.timer = setInterval(() => {
      var eee = Encrypt('123678')
      console.log(eee)
      var b = Decrypt(eee)
      console.log(b)
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style lang="stylus" scoped></style>
