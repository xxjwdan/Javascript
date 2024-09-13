//논리 연산자

// || , &&, !

// OR , AND 연산자 표현식의 결과가 때로는 블리언이 아닐 수 있다..

console.log('apple' || 'banana');
console.log(false || 'banana');

// 둘다 투루시면 앞에 껄 출력한다.
// 트루시인걸 출력한다.


console.log("====================================");

console.log('apple' && 'banana');
// 둘다 트루시면 오른쪽껄 뱉는다. AND 연산자
console.log(false && 'banana'); 



console.log("====================================");

let num = 1;

if(num % 2 == 0){
    console.log("짝수입니다.");
}else{
    console.log("홀수입니다.");
}


console.log("====================================");

num % 2 == 0 && console.log("짝수입니다.");
num % 2 == 0 || console.log("홀수입니다.");

//논리 연산자는 다른 영상 다시 보기!!


let obj =null;
// 객체라고 기대하는 변수가 null 또는 undefined일 때 

let val = obj && obj.value; // 기대한 값이 아닐 때 에러 되지 않도록 하는 장치일 뿐 // 에러 방지 용도.. // 물음표 쓰는 것처럼




