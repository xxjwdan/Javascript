// 일반 함수와 다른점    // 결론 new 붙여주면 된다.

function Student(name,age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name} 은 ${this.age}세 입니다.`
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다..
// new 연산자와 함께 호출하면 생성자 함수로 동작한다..
// 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다..

//new를 안써주면 일반 함수로 진행된다. 무조건 new 써주라는 얘기
const student = Student("강감찬", 35);

console.log(student);
console.log(age); 

//ES6 에서 new.target을 지원한다.

//생성자 함수가 new 없이 호출 되는 것을 방지하기 위해

function Dog(name,age){

if(!new.target){   // faluty 반대는 true 
    return new Dog(name,age);
}

    this.name = name;
    this.age = age;
}

// 대부분의 빌트인 생성자 함수 (object,string,number 등)은
// new 연산자와 함께 호출 되어있는지를 확인한 후 적절하게 반환한다..

const obj = object();
console.log(obj);

