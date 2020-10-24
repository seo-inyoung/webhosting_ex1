
/*비밀번호 확인*/
$('.pass').focusout(function () {
    var pass1 = $('#input_pass').val();
    var pass2 = $("#reinput_pass").val();

    /*두번째 input에 입력하지 않은 상황 : 아무일도 안 일어남.*/
    if ( pass1 != '' && pass2 == '' ) {
        null;
    } 
    /*첫번째 input은 입력하지않고, 두번째 input만 입력한 상황 : 비밀번호를 입력해 달라고 알림 뜸. 그리고 input 초기화 */ 
    else if (pass1 == '' && pass2 != '') {
        alert("비밀번호를 입력해주세요.")
        $('#pass_form').each(function () {
            this.reset();
        });
    }
    /*비밀번호가 일치할 경우 : 일치 알림이 뜨고, 초기화.
      비밀번호가 일치하지 않는 경우 : 불일치 알림이 뜨고, 초기화 */
    else if (pass1 != "" && pass2 != "") {
        if (pass1 == pass2) {
            alert("비밀번호가 일치합니다.");
            $('#pass_form').each(function () {
                this.reset();
            });
        }
        else {
            alert("비밀번호가 일치하지 않습니다.");
            $('#pass_form').each(function () {
                this.reset();
            });
        }
    }
});

/*입력한 숫자 +1 결과 출력하기 */
$('#btn_submit').click(function () {
    var num = +$('#input_num').val() ; /*id=input_num의 값을 숫자로 변환.*/

    /* 만약 변수'num'이 NaN값을 가진다면(숫자를 입력하지 않았을 경우), 경고창이 뜬다. 아니면 변수'num'을 출력. */
    if (isNaN(num) == true) {
        alert("숫자를 입력해주세요.");
    }
    else { 
        num=num+1;
        $("#result").text(num);
    }

})
