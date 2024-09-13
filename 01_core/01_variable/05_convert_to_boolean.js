// 불리언 타입으로 형변환

console.log("-------------불리언 타입으로 변환 -------------------");

/*
자바 스크립트 엔진은 불리언 타입이 아닌 값을 (truthy Falsy)로 구분한다.
truthy : 참으로 평가 되는 값, falsy : 거짓으로 평가되는 값
truthy - true, falsy -> false 로 암묵적 타입 변환된다.
*/
if(true){
    console.log("if(true)");
}

if(false){
    console.log("if(false)")
}

    if(''){
        console.log("if('')");
    }

if('javascript') console.log("if(javascript)");

if(null) console.log("if(null)");

if(undefined) console.log("if()undefined)");

if(0) console.log("if(0)");

if(NaN) console.log("if(NaN)");

// false, undefined, null, 0, NaN, ''은 falsy 값이며
// 그 외의 값은 truthy

// '', null, undefined, 0, NaN 은 false

