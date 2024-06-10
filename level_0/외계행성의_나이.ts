// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function alienAge(age: number) {
    const alphabetStr = 'abcdefghij';
    const alphabetMap = new Map();
    
    [...alphabetStr].forEach((v, i) => {
        alphabetMap.set(String(i), v);
    });
    
    return [...String(age)].map((v) => (alphabetMap.get(v))).join('');

    // lodash 에서 zipObject() 메소드를 사용하여 Object를 만들 수 있음.
    // const idxArr = Array.from(Array(alphabetStr.length), (_, index) => index + 1)
    // _.zipObject(idxArr, [...alphabetStr]);
}