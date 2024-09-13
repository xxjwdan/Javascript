//숫자 타입으로 변환

// +를 제외하고는 숫자로 인식해서 진행된다.

console.log("==== 숫자 타입으로 변환 ===");

//산술 연산
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');

console.log(10 % "java");



// 비교 연산자
//비교를 숫자타입으로 해줘야하기 때문에 형변환이 일어난다. =>숫자로

console.log(10 > '5');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log("================================================================");


console.log(+'');
console.log(+'1');
console.log(+'javascript');

console.log("================================================================");

console.log(+true);
console.log(+false);
console.log(+null);

console.log("================================================================");

console.log(+undefined);
console.log(+[]); 

