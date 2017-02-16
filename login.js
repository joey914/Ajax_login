$(document).ready(function() {
    $('#logbt').click(function() {
        alert("clicked. ajax실행합니다.");
        var userid = document.getElementById("login_id").value;
        var userpw = document.getElementById("login_pw").value;
        if(userid.length==0||userpw.length==0)
        {
           alert("정보를 올바르게 기입해주세요.");
        }
        else{
        alert(userid + userpw +"");
        var logindata = "id="+userid+"&password="+userpw;
        $.ajax({
            type: "POST",
            url: "http://soylatte.kr:4848/login",
                data: logindata,
                success: function(data)     {         //data - response from server
                if (data.success == true) {
                    alert("로그인 성공");
                    location.href="http://rrgg.kr";
                } else {
                    alert("로그인 실패");
                    console.log(data);
                }
            },
                error: function(xhr, status, error)     {
                alert("서버에 오류생겼다 bro; jqXHR : " + xhr + " status : " + status + " error : " + error);
            }
        });
      }
    })
});
