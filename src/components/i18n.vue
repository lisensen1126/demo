<template>
  <div class="i18n"
       @click='flag'>
    中英切换
    <div>{{$t('message.hello')}}</div>
    <el-date-picker v-model="value1"
                    type="date"
                    placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'i18n',
  data () {
    return {
      value1: ''
    }
  },
  methods: {
    flag () {
      console.log(this.flag, this.$i18n.local)
      this.$i18n.locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
