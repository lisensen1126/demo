<template>
  <el-menu router>
    <el-menu-item-group class="aaa">
      <el-menu-item slot="title"
                    :index="item.entity.rouer"
                    v-for="(item,index) in menuList"
                    :key="index"
                    v-if="!item.childs"><i :class="item.entity.iconClass"></i>{{item.entity.id}}{{item.entity.menuName}}</el-menu-item>
    </el-menu-item-group>

    <el-submenu :index="item.entity.id"
                class="bbb"
                v-for="(item,index) in menuList"
                :key="index"
                v-if="item.childs">
      <template slot="title"><i :class="item.entity.iconClass"></i>{{item.entity.id}}{{item.entity.menuName}}</template>
      <el-menu-item-group v-for="(item2,index2) in item.childs"
                          :key="index2">
        <el-menu-item :index="item2.entity.router"
                      @click="handleClick2(item2.entity.router)">{{item2.entity.menuName}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>

</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {
      menuList: [],
      childs1Flag: false
    }
  },
  mounted () {
    this.axios.get('api/aside.json').then((res) => { console.log(res); this.menuList = res.data.result.menuList })
  },
  computed: {
  },
  methods: {
    handleClick (e) {
      console.log(e.target)
    },
    handleClick2 (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
>>> .aaa .el-menu-item-group__title {
  padding: 0px !important;
}

>>> .bbb .el-menu-item-group__title {
  display: none;
}

.bbb, .aaa {
  text-align: left;
}
</style>
