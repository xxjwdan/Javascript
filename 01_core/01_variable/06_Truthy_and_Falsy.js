
//자바 스크립트 엔진은 불리언 타입이 아닌 값을 Truthy Falsy 로 구분한다..
// 암묵적 타입 변환이 일어난다..

let test1;
console.log(!!test1);



//객체 리터럴
let test = {
a : null,
b : 0,
fun(){                        //fun -> function
    console.log("testtest");
}
};


console.log("========================================================");

if(test?.b){  // 물음표 써주면 null 이라도 에러 안나고 진행
    console.log(true);
}else{
    console.log("false");
}



console.log("========================================================");
test.b ? console.log(true) : console.log(false);




