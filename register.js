$(function(){
  var $name  =$('#name'),
      $phone =$('#phone'),
      $pwd   =$('#pwd'),
      $code  =$('#code'),
      $btn   =$('#btn'),
      $registerbtn=$('#registerbtn'),
      i = 5,
      timer;

  $registerbtn.click(function(){
    
    if(!validate('#name') || !validate('#phone') || !validate('#pwd') || !validate('#code')) return;
    
  });

  $name.focusout(function(){

    if(!validate('#name'));

  })

  $phone.focusout(function(){

    if(!validate('#phone'));

  })
  $pwd.focusout(function(){

    if(!validate('#pwd'));

  })
  $btn.click(function(){

    if($phone.val()===''){
      $('#phone-validation-message').html('请您输入手机号');
    } 
    else if(validate("#phone")){

      timer = setInterval(function(){
        i--;
        if(i === 0){
          clearInterval(timer);
          $btn.val('发送验证码');
          $btn.attr('disabled',true);
                                    
        } else{
          $btn.val('发送中(' + i + 's)');
                        
        }
  
      },1000);
      setTimeout(function(){

      $('#code-validation-message').html("请求超时，请稍后再试")
      },6000)
    }
  })

  function validate(filed){

    var data = $(filed),
        msg  = $(filed + '-validation-message');

    if(filed === '#name'){

      if(!(/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(data.val()))){

        msg.html("用户名仅支持中英文、数字和下划线,且不能为纯数字");
        return false;

      }

    }

    if(filed == '#phone'){
      if(!(/^1[3456789]\d{9}$/.test(data.val()))){
        msg.html("手机号码格式不正确");
        return false;
      }
    }
    if(filed === "#pwd"){

      if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(data.val()))){
        msg.html("密码设置不符合要求");
        return false;

      }

    }
    msg.html('');
    return true;
  }
})
