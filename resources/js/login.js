$(document).ready(function(){

    $('.login-btn').on('click', function(event){
        var user_id=$('#id').val();
        if($("#id").val()==""){
            alert("아이디를 입력해주세요.");
            $("#id").focus();
            return false;
        }//if-#id

        if($("password").val()==""){
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
            return false;
        }//if-#password

        $.ajax({
            url:"/member/idcheck",
            type: 'post',
            data:{
                userid: user_id
            },
            dataType:'json',
            success: function(userid){
                if(userid !==1){
                    alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다");
                    $("#id").val("");
                    $("#password").val("");
                    return false;
                }
                error: function () {
                    console.log("실패");
                } //end-error

            }
        });//ajax

        $('.membership-login-form>form').submit();

    })//$.login-btn

});//$document