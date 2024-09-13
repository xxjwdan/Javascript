//객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값(Value)으로 구성된다..

let student = {
    name : "유관순",
    age : 16
}

console.log(student);

// 숫자끼리는 오름차순
// 정수가 키값이면 자연스럽게 문자열로 바뀌면서 맨 위로 보낸다.

let obj = {
    normal : "normal value",
'@ s p a c e @' : "space value",
"":"",
0:1,
var : "var",
normal : "new normal"
};

let key2 ="test";
obj[key2] = "test value";
//키값을 동적으로 생성해준거


// 숫자가 문자열로 바뀌면 맨 먼저 출력된다.
// 키 값은 기본적으로 문자열로 들어간다.
// 중복된건 값은 마지막 걸로 덮어씌여 진다.
// 키값으로 예약어를 사용할 수 있지만, 권장하지 않는다.


console.log(obj);



