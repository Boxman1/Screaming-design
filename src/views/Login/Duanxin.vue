<template>
  <div>
    <div class="up up3">
      <input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone3" />
      <!-- 获取验证码 -->
      <div class="huoqu">
        <input type="text" name="yanzhengma" placeholder="请输入验证码" id="yanzhengma3" />
        <input
          type="button"
          id="btn-huoqu3"
          name="button"
          value="获取验证码"
          onclick="sendCode(this)"
          placeholder="获取验证码"
        />
      </div>
    </div>
    <input type="button" id="loginBtn" name="submit" value="确认" />
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
    #yanzhengma3 {
      width: 10rem;
      margin-left: 1rem;
    }
    #btn-huoqu3 {
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
  position: relative;
  top: -0.9rem;
  height: 3rem;
}
.input-checkbox {
  position: absolute;
  margin-top: 1rem;
}
</style>
