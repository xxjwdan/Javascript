// 재귀함수

//자기 자신을 호출하는 함수
//어려우면 넘기라우!! 알고리즘 문제 풀때나 쓰인다.

// 함수가 자기자신을 호출하는 것을 재귀호출이라고 한다..
//재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용한다.

// 팩토리얼

function factorial(n){
    //n이 1 이하 일 때 재귀를 멈춘다..
if(n<=1) return 1;
//재귀 호출
return n * factorial(n-1);

}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// 자기자신을 호출하는 경우 무한루프에 의해 컴퓨터 꺼질 수 있다.
// 정말 쉽고 확실한 상황에서만 사용한다.