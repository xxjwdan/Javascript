// 빌트인 전역 함수

//IsFinite
//전달 받은 인수가 정상적인 유한수인지 검사하는 함수
// 유한수이면 true, 무한수이면 false(NaN도 false)

console.log(isFinite(10));
console.log(isFinite('10'));
console.log(isFinite(null));


console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite("abc"));

console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

// isNaN
// 전달 받은 인수가 NaN인지 검사하여 결과를 불리언으로 반환 
// 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사 진행

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("abc"));

console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

console.log(isNaN(""));
console.log(isNaN(true));
console.log(isNaN(undefined));

console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

//parseFloat
console.log(parseFloat("10.01"));

// 공백으로 구분 된 문자열은 첫 번째만 반환

console.log(parseFloat("10 20 30"));

// 숫자가 아닌 문자열은 제외하고 반환 
console.log(parseFloat("10cm"));


// 앞 뒤 공백은 무시한다..
console.log(parseFloat("       1004        "));

// parseInt도 결과 비슷. 소수점을 절삭한다. 


console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

//encodeURI
// URI를 문자열로 전달 받아 어떤 시스템에서도 읽을 수 있게 변환

const uri = "http://greedy.com?name=홍길동&job=student";
const enc = encodeURI(uri);
console.log(enc);


console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

//decodeURI
//인코딩 된 URI를 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);




