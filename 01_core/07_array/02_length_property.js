// length 는 요소의 객수를 나타내는 0 이상의 정수를 값으로 갖는다..

console.log([].length);


console.log("--------------------------------------------------------")

const arr = [1,2,3,4,5];
console.log(arr.length);

console.log("--------------------------------------------------------")

// length 프로퍼티 값은 배열ㅇ에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr.push(6); // 인자로 전달한 요소 추가
console.log(arr.length);

console.log("--------------------------------------------------------")

arr.pop(); //마지막 요소 제거
console.log(arr.length);



console.log("--------------------------------------------------------")

//동적 변경. 현재의 length 보다 작은 값을 주면 배열의 길이가 줄어든다.
arr.length = 3;
console.log(arr);



console.log("--------------------------------------------------------")

// 현재의 length 보다 큰 값을 할당하면
arr.length = 10;
console.log(arr);



console.log("--------------------------------------------------------")

const arr2 = [null,2, ,4];
console.log(arr2);

