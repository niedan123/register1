$(function(){var e,t=$("#name"),n=$("#phone"),a=$("#pwd"),o=($("#code"),$("#btn")),i=$("#registerbtn"),l=5;function u(e){var t=$(e),n=$(e+"-validation-message");if("#name"!==e||/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(t.val()))if("#phone"!=e||/^1[3456789]\d{9}$/.test(t.val())){if("#pwd"!==e||/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(t.val()))return n.html(""),1;n.html("密码设置不符合要求")}else n.html("手机号码格式不正确");else n.html("用户名仅支持中英文、数字和下划线,且不能为纯数字")}i.click(function(){u("#name")&&u("#phone")&&u("#pwd")&&u("#code")}),t.focusout(function(){u("#name")}),n.focusout(function(){u("#phone")}),a.focusout(function(){u("#pwd")}),o.click(function(){""===n.val()?$("#phone-validation-message").html("请您输入手机号"):u("#phone")&&(e=setInterval(function(){0===--l?(clearInterval(e),o.val("发送验证码"),o.attr("disabled",!0)):o.val("发送中("+l+"s)")},1e3),setTimeout(function(){$("#code-validation-message").html("请求超时，请稍后再试")},6e3))})});