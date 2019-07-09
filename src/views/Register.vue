<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <h3>注册</h3>
      <a href="/login" class="header-div-right">登录</a>
    </header>
    <!-- 登录 -->
    <div class="frombox" id="captchaForm">
      <div class="up3 up">
        <table>
          <tr>
            <td>
              <input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="captcha" placeholder="请输入图形验证码" id="captcha" />
              <img id="imgObj" alt src="#" />
              <a href="#" id="renew">换一张</a>
            </td>
          </tr>
        </table>
      </div>
      <input id="submit" type="button" name="submit" value="注册" />
    </div>

    <div class="frombox" id="valCodeForm" hidden>
      <div class="up up3">
        <!-- 获取验证码 -->
        <div class="huoqu">
          <input type="text" name="yanzhengma" placeholder="请输入短信验证码" id="valCode" />
          <input
            type="button"
            id="sendValCode"
            name="button"
            value="获取短信验证码"
            onclick="sendCode(this)"
            placeholder="获取短信验证码"
          />
        </div>
        <input type="password" name="password" id="password" placeholder="设置密码（6-20位）" />
      </div>
      <input id="submit1" type="button" name="submit" value="注册" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.header {
   width: 100%;
    height: 3rem;
    border-bottom: 1px solid #f5f5f5;
  line-height: 3rem;
  padding: 0rem 0.2rem 0rem 0.2rem;
  position: relative;
  display: block;
  font-size: 0.32rem;
  h3{
    position: absolute;
    left: 45%;
    top: -54%;
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    font-size: 20px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  .header-div-right{
      display: inline-block;
    position: absolute;
    height: 0.64rem;
    line-height: 0.64rem;
    font-size: 16px;
    right: 0.2rem;
    top: 42%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    border-radius: 50%;
    text-decoration: none;
    color: black;

  }
}
.up{
    margin-top: 20px;
    table{
        td{
    width: 23rem;
    height: 3rem;
    margin-left: 63rem;
    border-bottom: 1px solid #ccc;         
       input{
              border: 0;
              margin-left: 2rem;
            }
        a{
          text-decoration: none;
          color: black;
          position: absolute;
          right: 1rem;
        }
        }
    }
}
#submit{
    width: 22.5rem;
  background: orange;
  border: 0;
  font-size: 1rem;
  height: 3rem;
  position: relative;
  top: 4rem;
}
</style>

