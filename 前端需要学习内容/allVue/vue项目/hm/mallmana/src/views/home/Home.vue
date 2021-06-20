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
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="toggleClick">|||</div>
          <el-menu
                  class="el-menu-vertical-demo"
                  background-color="#333744"
                  text-color="#fff"
                  active-text-color="#409EFF"
                  unique-opened
                  :collapse="isCollapse"
                  :collapse-transition="false"
                  :router="true" :default-active="activePath">
            <el-submenu :index="item.id + ''"
                        v-for="item in menuList"
                        :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item  :index=" '/' + subItem.path"
                          v-for="subItem in item.children"
                          :key="subItem.id"
                          @click="saveNavState('/' + subItem.path)">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>{{subItem.authName}}</span>
                    </template>
              </el-menu-item >
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {getAsideMenu} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        menuList: [],
        isCollapse: false,
        activePath: ''
      }
    },
    created() {
      this.getAsideMenu();
      this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
      exit(){
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      getAsideMenu(){
        getAsideMenu().then( res => {
          // console.log(res);
          if(res.data.meta.status !== 200){
            return this.$message.error(res.data.meta.msg)
          }
          this.menuList = res.data.data
        })
      },
      toggleClick(){
        this.isCollapse = !this.isCollapse
      },
      saveNavState(activePath){
        window.sessionStorage.setItem('activePath',activePath)
        this.activePath = activePath
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
  .el-aside > .el-menu{
    border-right: none;
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
  .toggle-button{
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>