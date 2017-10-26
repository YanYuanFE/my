$().ready(function() {
    $("#forget").validate({
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
    $("#login").validate({
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
    $("#reset").validate({
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