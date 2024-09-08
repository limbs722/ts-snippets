// https://school.programmers.co.kr/learn/courses/30/lessons/12912
import _ from 'lodash';

function sumRangeAtoB(a: number, b: number): number {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    return _.sum(_.range(min, max + 1));
}