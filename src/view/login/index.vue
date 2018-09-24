<template>
  <div class="login" :style="loginStyle">
    <div class="login-main">
       <div class="login-main-inner">
       <!-- <div class="login-main-top"> -->
          <!-- <img src="static/images/logo.jpg"> -->
        <!-- </div> -->
        <div class="top-pc"></div>
        <div style="text-align: center;padding: 10px;">密码登陆</div>
        <el-form status-icon :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
          >
            <el-input auto-complete="off" v-model="dynamicValidateForm.email" class="login-input"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' }
            ]"
          >
            <el-input auto-complete="off" type="password" v-model="dynamicValidateForm.password" class="login-input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-check" circle></el-button>
          </el-form-item>
        </el-form>
        <div style="text-align:center;">
            <el-button icon="el-icon-check" circle></el-button>
            <el-button icon="el-icon-check" circle></el-button>
            <el-button circle><i class="fa el-icon-fa-firefox"></i></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: '',
        password: ''
      },
      loginStyle: {
        width: '100%',
        height: '100%'
      }
    }
  },
  mounted () {
    debugger
    this.loginStyle.height = (window.innerHeight - 142) + 'px'
    this.$api.reader.getTest(null, r => {
      console.log(r)
    })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    }
  }
}
</script>

<style>
  .top-pc{
    border:1px solid #000;
    border-radius: 50%;
    margin-top: -79px;
    margin-left: 172px;
    width: 100px;
    height: 100px;
    /* background-color: red; */
  }
  body{
    margin: 0px;
  }
  .login{
    /* background:url('/static/images/timg (1).jpg')no-repeat; */
    width:100%;
    height:100%;
    background-size:100% 100%;
    position:absolute;
    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png',sizingMethod='scale');
  }
    .login-main{
      padding: 10px;
        border: 1px solid;
        height: 320px;
        width: 450px;
        margin-top: 10%;
        margin-left: 34%;
        background-color: rgba(255,255,255,0.2);
    }

  .login-main-inner{
    border:1px solid red;
    width: 100%;
    height: 100%;
    background-color: white;
  }

    .login-input{
        width: 85%;
    }
    .login-main-top{
        border:1px solid red;
        height: 120px;
    }
</style>
