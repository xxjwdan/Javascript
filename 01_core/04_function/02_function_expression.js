//함수 표현식

//함수는 1급 객체. 리턴값 존재하는 객체

// 함수명을 생략할 수 있다.

let hello = function(name){
return `${name}님 안녕하세요`
}

console.log(hello("홍길동"));

let calc = function add(a,b){
    return a+b;
}

//표현식에 담겨 있으면 함수 이름으로 못 부른다.

console.log(calc(10,20));

// 에러난다. console.log(add(10,20));




