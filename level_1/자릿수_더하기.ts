// https://school.programmers.co.kr/learn/courses/30/lessons/12931
import _ from 'lodash';

function sumOfDigits(n: number): number {   
    return _.sum(String(n).split(''));
}