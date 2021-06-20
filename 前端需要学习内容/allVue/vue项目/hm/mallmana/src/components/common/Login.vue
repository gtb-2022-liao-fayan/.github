<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar_box">
        <img src="~assets/img/login.jpg" alt="">
      </div>
      <el-form label-width="0"
               class="login_form"
               :model="login_form"
               ref="loginFormRef"
               :rules="loginRules">
        <el-form-item prop="name">
          <el-input prefix-icon="el-icon-user"
                    v-model="login_form.name">
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input prefix-icon="el-icon-lock"
                    v-model="login_form.pwd"
                    type="password">
          </el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆按钮</el-button>
          <el-button type="info" @click="resetLoginForm">重置按钮</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {getLoginData} from 'network/login.js'
  export default {
    name: "Login",
    data(){
      return{
        login_form: {
          name: 'admin',
          pwd: '123456'
        },
        loginRules: {
          name: [
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      resetLoginForm(){
        this.$refs.loginFormRef.resetFields();
      },
      login(){
        this.$refs.loginFormRef.validate( (valid) => {
          if(!valid) return;
          this.getLoginData();

        })
      },

      //网络请求
      getLoginData(){
        getLoginData(this.login_form.name,this.login_form.pwd).then( res => {
          // console.log(res)
          if(res.data.meta.status !== 200){
            return this.$message.error('登陆失败');
          }
          this.$message({
            message: '登陆成功',
            type: 'success'
          });
          window.sessionStorage.setItem('token',res.data.data.token)
          this.$router.push('/home')
        })
      }
    },

  }
</script>

<style scoped>
  .login{
    position: relative;
    height: 100%;
    background-color: #2b4b6b;
  }
  .login_box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
  }
  .avatar_box{
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
    background-color: #e2f0ff;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .avatar_box > img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content: flex-end;
  }
</style>