$(document).ready(function() {
    $('#logbt').click(function() {
        alert("clicked. ajax실행합니다.");
        var userid = document.getElementById("login_id").value;
        var userpw = document.getElementById("login_pw").value;
        var userrpw = document.getElementById("login_rpw").value;
        var usermean = document.getElementById("login_mean").value;
        var useridle = document.getElementById("login_ideal").value;
        var username = document.getElementById("login_username").value;
        var genderobj = document.getElementsByName("gender");
        var userlocale =$("#sido1 option:selected").text()+" "+$("#gugun1 option:selected").text();
        var usergender;
        var userage = document.getElementById("login_age").value;
        if ($("#sido1 option:selected").text()=="시/도 선택" || $("#gugun1 option:selected").text()=="구/군 선택")
        {
          alert("위치 정보를 정확히 기입해주세요.");
        }
        if (userpw != userrpw) {
            alert("재입력한 비밀번호가 일치하지 않습니다. 확인해주세요.");
        } else if (usermean.length == 0) {
            alert("한줄 소개(당신을 소개할 무언가)가 비었습니다. 입력해주세요.")
        } else if (!(genderobj[0].checked || genderobj[1].checked)) {
            alert("성별을 선택해주세요.");
        } else {
            if (genderobj[0].checked) {
                alert("남");
                usergender = "남";
            } else if (genderobj[1].checked) {
                alert("여");
                usergender = "여";
            }
            var regdata = "name=" + username + "&id=" + userid + "&password=" + userpw + "&mean=" + usermean + "&gender=" + usergender + "&ideal_type=" + useridle + "&age=" +userage+ "&city" +userlocale;
            $.ajax({        
                type: "POST",
                url: "http://soylatte.kr:4848/register",
                    data: regdata,
                    success: function(data)     {         //data - response from server
                    if (data.success == true) {
                        alert("회원가입 성공");
                        location.href = "login_new.html";
                    }
                },
                    error: function(xhr, status, error)     {
                    alert("서버에 오류생겼다 bro; jqXHR : " + xhr + " status : " + status + " error : " + error);
                }
            });
        }
    })
    var area0 = ["시/도 선택", "서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];  
    var area1 = ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];  
    var area2 = ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"];  
    var area3 = ["대덕구", "동구", "서구", "유성구", "중구"];  
    var area4 = ["광산구", "남구", "동구",     "북구", "서구"];  
    var area5 = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];  
    var area6 = ["남구", "동구", "북구", "중구", "울주군"];  
    var area7 = ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"];  
    var area8 = ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "여주군", "연천군"];  
    var area9 = ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"];  
    var area10 = ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"];  
    var area11 = ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"];  
    var area12 = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];  
    var area13 = ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];  
    var area14 = ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"];  
    var area15 = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];  
    var area16 = ["서귀포시", "제주시", "남제주군", "북제주군"];
     
    $("select[name^=sido]").each(function() {  
        $selsido = $(this);  
        $.each(eval(area0), function() {   
            $selsido.append("<option value='" + this + "'>" + this + "</option>");  
        });  
        $selsido.next().append("<option value=''>구/군 선택</option>"); 
    });   // 시/도 선택시 구/군 설정
     
    $("select[name^=sido]").change(function() {  
        var area = "area" + $("option", $(this)).index($("option:selected", $(this)));   
        var $gugun = $(this).next();
          
        $("option", $gugun).remove(); 
          
        if (area == "area0")    $gugun.append("<option value=''>구/군 선택</option>");  
        else {   
            $.each(eval(area), function() {    
                $gugun.append("<option value='" + this + "'>" + this + "</option>");   
            });  
        } 
    });
});