<template>
  <div class="login">
    <a-form class="login-form" >
       <a-form-item>
        <h2 class="title">登录</h2>
      </a-form-item>
      <a-form-item>
        <a-input placeholder="Username" >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password" >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        loginame: 'admin',
        password: '14551'
      },
    }
  },

  methods: {
    
  },
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('./images/login.jpg') no-repeat center;
  background-size: cover;
  .login-form {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 30px;
    .ant-form-item {
      margin-bottom: 15px;
      width: 100%;
      .title {
        margin-top: 18px;
        color: #fff;
        text-align: center;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 3px;
      }
      .login-form-button {
        width: 100%;
      }
    }
  }
}
</style>








