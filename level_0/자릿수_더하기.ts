// https://school.programmers.co.kr/learn/courses/30/lessons/120906
import _ from 'lodash';

function addToDigits(n: number) {
  // lodash 사용
  // return _.sum([...n.toString()]);
  
  return String(n).split("")
        .map(Number)
        .reduce((acc, value) => acc + value, 0);
}