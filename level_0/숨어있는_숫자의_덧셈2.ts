// https://school.programmers.co.kr/learn/courses/30/lessons/120864
import _ from 'lodash';

function hideNumberSum2(my_string: string) {
    const replaced = my_string.replace(/[a-zA-Z]/gi, '.').split('.');
    const filtered = replaced.filter((s) => s !== ' ').map((s) => Number(s));
    return _.sum(filtered);
}
