// https://school.programmers.co.kr/learn/courses/30/lessons/12944
import _ from 'lodash';

function getAverage(arr: number[]): number {
    return _.sum(arr) / arr.length;
}