<template>
  <div>
    <div class="up up3">
      <input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone2" />
      <!-- 获取验证码 -->
      <div class="huoqu">
        <input type="password" name="yanzhengma" placeholder="请输入密码" id="yanzhengma2" />
        <input
          type="button"
          id="btn-huoqu2"
          name="button"
          value="忘记密码?"
          onclick="resetPwd()"
          placeholder="忘记密码?"
        />
      </div>
      <input type="button" id="loginBtn" name="submit" value="确认" />
      <!-- 一个月内免登录 -->
      <div class="input-checkbox">
        <i id="autoLogin" class="icon iconfont checked">&#xe61e;</i>
        <span>一个月内记住登录</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.up {
  position: relative;
  top: -0.9rem;
  width: 18rem;
  height: 0.5rem;
  input {
    height: 3rem;
  }
  .phone {
    width: 20rem;
    border: 0;
    border-bottom: 1px solid #cccccc;
    margin-left: 1rem;
  }
  .huoqu {
    float: left;
    input {
      border: 0;
    }
    #yanzhengma2 {
      width: 10rem;
      margin-left: 1rem;
    }
    #btn-huoqu2 {
      background: white;
      position: absolute;
      right: -5.8rem;
      width: 9rem;
    }
  }
}
#loginBtn {
  width: 23rem;
  background: orange;
  border: 0;
  font-size: 1rem;
}
.input-checkbox {
  position: absolute;
  margin-top: 1rem;
}
</style>
