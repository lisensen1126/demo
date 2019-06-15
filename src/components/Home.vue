<template>
  <div class="hello">

    <el-container>
      <el-header>
        <div class="aaaaa"
             @click="handleClick()">333333333333333333333333333</div>Header
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <div class="ddd"
               @click="ddd()">ddddddddd</div>
          <div class="add">{{this.$store.state.home.count}}</div>
          <router-view />
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Aside from './aside'
export default {
  name: 'HelloWorld',
  components: { Aside },
  data () {
    return {
      menuList: []
    }
  },
  methods: {
    handleClick () {
      console.log('222222222222')
      this.$router.push('/home')
    },
    test1 () {
      console.log('test1')
    },
    ddd () {
      var that = this
      // store.commit('increment')
      // this.$store.commit('increment', 33)
      console.log(this.$store.getters.aaaaa(2222))
      this.$store.dispatch('increment', { id: '999',
        callback () { that.$options.methods.test1() } })
      console.log('this.$store.state.home.count   ' + that.$store.state.home.count)
    }

  }
  // mounted () {
  //   axios.get('api/aside.json').then((res) => { this.menuList = res.data.result.menuList })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~style/element-variables.styl';

.el-header, .el-footer {
  background-color: $bgColor;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
