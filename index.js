// if else 조건문

// const num = prompt("숫자를 입력하세요")
// if(num < 0) {
//     alert("0이상의 수를 입력하세요")
// }
// else{
//     document.write("입력한 숫자: "+ num)
// }

// 조건 연산자
//  const score = 75;
//  (score >= 60) ? alert("통과") : alert("실패");

// const userNumber = prompt("숫자를 입력해보세요")

// if(userNumber != null) {
//     "숫자 입력 정상"
// }
// else{
//     alert("입력이 취소됨")
// }

var userNumber = prompt("숫자를 입력하세요.");
		var displayArea =	document.querySelector('#result');
		
		if(userNumber != null) {  // '취소' 버튼을 클릭하지 않았다면
		if (userNumber % 3 === 0) {
			displayArea.innerHTML = userNumber + "은 3의 배수입니다.";
		}				
		else {
			displayArea.innerHTML = userNumber + "은 3의 배수가 아닙니다.";	
		}						
	}
	else { // '취소' 버튼을 클릭했다면
	alert("입력이 취소됐습니다.");  
}