
// 자바스크립트 함수는 프로퍼티 값으로 사용할 수 있다..

let dog ={
    name : "뽀삐",
  //  eat : function(food){
    //    console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    //}

// 화살표 함수는 this를 못쓴다.
    eat : (name,food) =>{
        console.log(`${name}는 ${food}를 맛있게 먹어요`);
    }

};

dog.eat("뽀삐","고구마");


//화살표 함수 ES6



