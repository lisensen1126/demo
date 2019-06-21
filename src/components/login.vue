<template>
  <div class="loginReg">
    <div class="warp">

    </div>
    <div class="login">login页面
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               label-position="left"
               class="demo-ruleForm">
        <el-form-item :label="$t('userName')"
                      prop="name">
          <el-input v-model="ruleForm.name"
                    :placeholder="$t('placeholder.loginPlaceholder')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('pwd')"
                      prop="pwd">
          <el-input v-model="ruleForm.pwd"
                    :placeholder="$t('placeholder.pwdPlaceholder')"></el-input>
        </el-form-item>
        <el-form-item :label="注册中"
                      v-if="isReging"
                      prop="pwd">
          <el-input v-model="ruleForm.pwd"
                    :placeholder="填写邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="isReging=">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    var checkPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else if (Number(value)) {
        callback(new Error('密码不能为纯数字'))
      } else if (value.length > 10) {
        callback(new Error('密码长度不能超过10位'))
      } else if (value.length < 6) {
        callback(new Error('密码太短'))
      } else {
        callback()
      }
    }
    return {
      radio: 'login',
      isReging: false,
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: this.$t('placeholder.loginPlaceholder'), trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: this.$t('placeholder.pwdPlaceholder'), trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
        ] }
    }
  },
  components: {
  },
  computed: {
    isLoginOrReg () { // 点击登录显示登录页面，如果radio为reg则显示注册页面
      if (this.radio === 'reg') {
        return false
      }
      return true
    }
  },
  methods: {
    login () {
      console.log(this.$i18n.locale)
      console.log(this.$t('placeholder.loginPlaceholder'))
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted () {
  },
  watch: {

  }
}
</script>

<style scoped lang="stylus"></style>
