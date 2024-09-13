

// Animal 과 Dog 클래스 구현

// Animal 은 name 과 Speak 메소드를 가짐
// Speak는 나는 [name] 출력


//Dog 는 Animal 을 상속 받고
// breed 속성을 가짐. 개의 품종
// break 메소드를 가지고 메소드는 "나는 [breed]" 를 출력


class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`나는 ${this.name}입니다.`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log(`나는 ${this.breed}입니다.`)
    }
}

const dog1 = new Dog("루이스","휘핏");
dog1.speak();
dog1.bark();

