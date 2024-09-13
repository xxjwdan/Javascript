
// 프로퍼티 접근


let dog = {
    name : "뽀삐",
    eat : function(food){
        console.log(`${this.name}은 ${food} 를 맛있게 먹어요`);
    },
    run : function(place){
        console.log(`${this.name}은 ${place}를 신나게 뛰어 다닙니다.`);
    }
}

console.log(dog.name);
dog.eat("고구마");


dog['eat']("계란");


console.log(dog['name']);


dog.run("들판");



let obj ={
    'dash-key' : 'dash-value',
    0:1
}

// 식별자 네이밍 규칙
// 허용되는 문자
// 영문자, 숫자(첫글자는 올 수 없음)
// 예약어는 사용할 수 없음
// 대소문자를 구분함
// 카멜케이스로 작성함

console.log(obj['dash-key']);


// 예외가 있다면 대괄호를 사용해줘야 한다.
console.log(obj[0]);
console.log(obj['0']);
// console.log(obj.0);






