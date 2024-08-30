// https://school.programmers.co.kr/learn/courses/30/lessons/120886
// import _ from 'lodash';

function makeBwithA(before: string, after: string) {
    const sortedBefore = before.split('').sort().join('');
    const sortedAfter = after.split('').sort().join('');
    
    return Number(sortedBefore === sortedAfter);
}


// lodash의 isEqual 사용
// function makeBwithALodash(before: string, after: string) {
//     return _.isEqual([...before].sort(), [...after].sort());
// }   