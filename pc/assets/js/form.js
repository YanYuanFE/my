$().ready(function() {
  jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^1[3|4|5|7|8]{1}[0-9]{9}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
  }, "请正确填写您的手机号码");

  $("#regForm").validate({
        errorPlacement: function(error, element) {
          console.log(element)
          error.appendTo(element.parent());
        },
        rules: {
            mobile: {
                required: true,
                isMobile: true
            },
            sms_code: {
                required: true
            }
        },
        messages: {
            mobile: {
                required: "请输入手机号",
                isMobile:"请输入正确的手机号！"
            },
            sms_code: {
                required: "请输入短信验证码"
            }
        }
    });
    $("#login1").validate({
        errorPlacement: function(error, element) {
          console.log(element)
          error.appendTo(element.parent());
        },
        rules: {
            mobile: {
                required: true,
                isMobile: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            mobile: {
                required: "请输入手机号",
                isMobile:"请输入正确的手机号！"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 6 个字符！"
            }
        }
    });

    $("#login2").validate({
        errorPlacement: function(error, element) {
          console.log(element)
          error.appendTo(element.parent());
        },
        rules: {
            code: {
              required: true,
            },
            phone: {
              required: true,
              isMobile: true
            }
        },
        messages: {
            code: {
              required: "请输入验证码",
            },
            phone: {
              required: "请输入手机号",
              isMobile:"请输入正确的手机号！"
            }
        }
    });

    $("#registerForm").validate({
        errorPlacement: function(error, element) {
          console.log(element)
          error.appendTo(element.parent());
        },
        rules: {
          loginPhone: {
            required: true,
            isMobile: true
          },
          loginPsw: {
            required: true,
            minlength: 6
          },
          loginCode: {
            required: true,
          },
        },
        messages: {
          loginPhone: {
            required: "请输入手机号",
            isMobile:"请输入正确的手机号！"
          },
          loginPsw: {
            required: "请输入密码",
            minlength: "密码长度不能小于 6 个字符！"
          },
          loginCode: {
            required: "请输入验证码",
          },
        }
    });

  $("#resetForm").validate({
    errorElement: "span",
    rules: {
      password: {
        required: true,
        minlength: 6
      },
      confirm_password: {
        required: true,
        minlength: 6,
        equalTo: "#password"
      },
    },
    messages: {
      password: {
        required: "请输入密码",
        minlength: "密码长度不能小于 6 个字符"
      },
      confirm_password: {
        required: "请输入密码",
        minlength: "密码长度不能小于 6 个字符",
        equalTo: "两次密码输入不一致"
      },
    }
  });

    $("#reserve").validate({
        rules: {
            username: {
                required: true
            },
            mobile: {
                required: true,
                isMobile: true
            },
            sms_code: {
                required: true
            }
        },
        messages: {
            username: {
                required: "请输入真实姓名"
            },
            mobile: {
                required: "请输入手机号",
                isMobile:"请输入正确的手机号！"
            },
            sms_code: {
                required: "请输入短信验证码"
            }
        }
    });
});
