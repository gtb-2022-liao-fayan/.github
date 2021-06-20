<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入内容"
                    v-model="queryInfo.query" clearable @clear="getUsersList">
            <el-button slot="append" icon="el-icon-search" @click="getUsersList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>

      <el-table :data="userList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <!--指定了作用域插槽prop就不起作用了-->
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeById(scope.row.id)"></el-button>

            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>

      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.pagenum"
              :page-sizes="[1, 2, 5, 7]"
              :page-size="queryInfo.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
      </el-pagination>
    </el-card>
    <el-dialog
            title="添加用户"
            :visible.sync="addDialogVisible"
            width="50%"
            @close="addDialogClosed">
      <el-form :model="addForm"
               :rules="addFormRules"
               ref="addFormRef"
               label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
            title="修改用户信息"
            :visible.sync="editDialogVisible"
            width="50%" @close="editDialogClosed">
      <el-form :model="editForm"
               :rules="editFormRules"
               ref="editFormRef"
               label-width="100px">
        <el-form-item label="用户名">
          <el-input disabled v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editUser">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import {getUsersList, editUsersState, addUserList, editUserList, editUserInfo, removeUserList} from "network/users"

  export default {
    name: "Users",
    data() {
      var checkEmail = (rule, value, callback) => {
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        if (regEmail.test(value)) {
          return callback()
        }
        callback(new Error('请输入合法的邮箱'))
      };
      var checkMobile = (rule, value, callback) => {
        const regEmail = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]18[0-9]|14[57])[0-9]{8}$/
        if (regEmail.test(value)) {
          return callback()
        }
        callback(new Error('请输入正确的手机号'))
      };

      return {
        queryInfo: {
          query: '',
          pagenum: 1,
          pagesize: 2
        },
        userList: [],
        total: 0,
        addDialogVisible: false,
        addForm: {
          username: '',
          password: '',
          email: '',
          mobile: ''
        },
        addFormRules: {
          username: [
            {required: true, message: '请输入用户名称', trigger: 'blur'},
            {min: 3, max: 10, message: '用户名的长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 6, max: 15, message: '密码的长度在 6 到 15 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入用户邮箱', trigger: 'blur'},
            {validator: checkEmail, trigger: 'blur'}
          ],
          mobile: [
            {required: true, message: '请输入用户手机', trigger: 'blur'},
            {validator: checkMobile, trigger: 'blur'}
          ],
        },
        editDialogVisible: false,
        editForm: {},
        editFormRules: {
          email: [
            {required: true, message: '请输入用户邮箱', trigger: 'blur'},
            {validator: checkEmail, trigger: 'blur'}
          ],
          mobile: [
            {required: true, message: '请输入用户手机', trigger: 'blur'},
            {validator: checkMobile, trigger: 'blur'}
          ],
        }
      }
    },
    created() {
      this.getUsersList();
    },
    methods: {
      handleSizeChange(newSize) {
        this.queryInfo.pagesize = newSize
        this.getUsersList()
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pagesize = newPage
        this.getUsersList()
      },
      userStateChanged(userInfo) {
        // console.log(userInfo);
        this.editUsersState(userInfo);
      },
      addDialogClosed() {
        this.$refs.addFormRef.resetFields()
      },
      addUser() {
        this.$refs.addFormRef.validate(valid => {
          if (!valid) {
            return
          }
          this.addUserList();
        })
      },
      addUserList() {
        addUserList(this.addForm).then(res => {
          // console.log(this.addForm.username);
          // console.log(res);
          if (res.data.meta.status !== 201) {
            return this.$message.error('添加用户失败！')
          }
          this.$message.success('添加用户成功！')
          // 隐藏添加用户对话框
          this.addDialogVisible = false
          this.getUsersList()
        })
      },
      showEditDialog(uid) {
        this.editDialogVisible = !this.editDialogVisible
        this.editUserList(uid)
      },
      editDialogClosed() {
        this.$refs.editFormRef.resetFields()
      },
      editUser() {
        this.$refs.editFormRef.validate(valid => {
          if (!valid) {
            return
          }
          this.editUserInfo(this.editForm.id, this.editForm)
        })
      },
      async removeById(uid) {
        const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(error => error)

        if(confirmResult !== 'confirm') {
          return this.$message.info('已取消删除')
        }
        this.removeUserList(uid)
      },
      //网络请求
      getUsersList() {
        getUsersList(this.queryInfo.query, this.queryInfo.pagenum, this.queryInfo.pagesize).then(res => {
          // console.log(res);
          if (res.data.meta.status !== 200) {
            return this.$message.error("获取用户列表失败")
          }
          this.userList = res.data.data.users
          this.total = res.data.data.total
        })
      },
      editUsersState(userInfo) {
        editUsersState(userInfo.id, userInfo.mg_state).then(res => {
          // console.log(res)
          if (res.data.meta.status !== 200) {
            userInfo.mg_state = !userInfo.mg_state
            return this.$message.error('更新用户状态失败')
          }
          this.$message.success('更新用户状态成功')
        })
      },
      editUserList(uid) {
        editUserList(uid).then(res => {
          // console.log(res);
          if (res.data.meta.status !== 200) {
            return this.$message.error('查询用户失败')
          }
          this.editForm = res.data.data
        })
      },
      editUserInfo(uid, obj) {
        editUserInfo(uid, obj).then(res => {
          // console.log(res);
          if (res.data.meta.status !== 200) {
            return this.$message.error('更新用户信息失败')
          }
          this.editDialogVisible = false
          this.getUsersList()
          this.$message.success('更新用户信息成功')
        })
      },
      removeUserList(uid){
        removeUserList(uid).then(res => {
          // console.log(res);
          if(res.data.meta.status !== 200){
            return this.$message.error('删除此信息失败')
          }
          this.$message.success('删除成功!')
          this.getUsersList();
        })
      }
    }
  }
</script>

<style scoped>
  .el-breadcrumb {
    margin-bottom: 15px;
    font-size: 12px;
  }

  .el-card {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
  }

  .el-table {
    margin-top: 15px;
    font-size: 12px;
  }

  .el-pagination {
    float: right;
    margin: 15px 0;
  }
</style>