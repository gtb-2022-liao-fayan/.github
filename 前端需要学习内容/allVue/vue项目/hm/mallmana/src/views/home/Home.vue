<template>
  <div class="home">

    <el-container class="homeContainer">
      <el-header>
        <div>
          <img src="~assets/img/home/mi1.jpg" alt="">
          <span>商场后台管理系统</span>
        </div>
        <el-button type="info" @click="exit">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
                  class="el-menu-vertical-demo"
                  background-color="#333744"
                  text-color="#fff"
                  active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-submenu index="2-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>角色列表</span>
                </template>
              </el-submenu>
              <el-submenu index="2-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限列表</span>
                </template>
              </el-submenu>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
            </el-submenu>

            <el-submenu index=4>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
            </el-submenu>

            <el-submenu index=5>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {getAsideMenu} from "network/home";

  export default {
    name: "Home",
    created() {
      this.getAsideMenu()
    },
    methods: {
      exit(){
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      getAsideMenu(){
        getAsideMenu().then( res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .el-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #373d41;
    color: #fff;
    font-size: 20px;
  }
  .el-header > div {
    display: flex;
    align-items: center;
  }
  .el-header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .el-aside{
    background-color: #333744;
  }
  .el-main{
    background-color: #EAEDF1;
  }
  .home{
    height: 100vh;
  }
  .homeContainer{
    height: 100%;
  }
</style>