
// 함수 호이스팅 // 자바스크립트의 하나의 특징

//함수 선언문은 밑에 써놔도 위에서 부터 쓸 수 있다.

//선언만 하면 이름으로 식별자가 만들어지고
// 표현식의 경우 변수가 식별자가 된다.


console.log(hello("홍길동"));
// 표현식은 안된다. console.log(hi("홍길동"));

// 밑에께 선언문
function hello(name){
    return`${name}님 안녕하세요`
}



// 표현식

/**
 * let은 호이스팅 안되게 막아놓음
 * 
 * let hi = function (name){
    return`${name}님 안녕하세요`
}
 */

/**
 * 함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 실행된다.
 * 따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
 * 함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는
 * 자바스크립트 고유의 특징을 함수 호이스팅이라고 한다.
 * 
 */




// 같은 이름으로 된 함수가 있다면 밑에 있는걸로 덮어씌운다. 변수 덮어 씌우듯

test();

function test(){
    console.log("이거랑");
}

function test(){
    console.log("이거 중 어떤게 실행되나")
}






console.log("-----------------------------------");


// 함수 표현식의 문제점

//var 를 사용할 때 함수 표현식의 문제점

// 1 호이스팅 문제점.  2 var는 이름 중복되는걸 표현한다.


console.log(funTest); //밑에서 선언됐기 때문에 undefined가 뜬다.

var funTest = ()=>{
    console.log("1");
}

funTest();
var funTest=()=>{
    console.log("2")
}
funTest();


/**
 * let은 호이스팅 안되도록 막아놓음 
 * 
 * let funTest = () => {
    console.log("2");
}
funTest();
 * 
 * 
 */

