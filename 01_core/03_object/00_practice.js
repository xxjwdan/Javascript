//function(){}

//()=>{}



// 3가지 방법으로 이름지정

function a(){     // 함수 선언
console.log('hello');
console.log('function');
} 

a(); // 함수호출. 함수뒤에 소괄호를 넣어주면 실행. 



const b = fuction(){};
const C = ()=>{};

//익명함수 function(){} 
// 딱 한번만 쓸때 가능. 두번 이상 사용 힘들다. 진짜 한번만 쓰면 이름 안붙여도 되긴한다.


// 함수는 기본적으로 리턴 값이 있다. 반환값. 리턴은 함수를 종료 시킨다.


/**
 * 리턴 값 여러개 => 배열 이용
 * function a(){
 * return [1,5];
 * }
 * 
 * 
 */

/**
 * 
 * function add(x,y){
 * return x+y;
 * }
 */


/**
 * const f = (x,y,z)=>{
 * return x*y*z;
 * }
 * 
 * f(2,3,4)
 * 24
 * 
 * 
 * 중괄호와 리턴 붙어있으면 생략가능
 * const f = (x,y,z) => x*y*z;
 *  위 같은 함수보면 중괄호랑 리턴이 생략 됐구나
 *  
 * (a,b)=>a+b;
 * (a,b)=>(a+b); 헷갈리면 중괄호 해주면 된다.
 * 
 */

