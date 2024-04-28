// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function makeString(my_strings: string[], parts: number[][]) {

    // lodash zip 메소드를 사용한 예시

    //     import _ from 'lodash';

    //     const zipArr = _.zip(my_strings, parts);
    //     return zipArr.map((item) => {
    //         const [s, e] = item[1];
    //         return item[0].slice(s, e + 1);
    //     }).join('');

    return my_strings.map((item, idx) => {
        const [s, e] = parts[idx];
        return item.slice(s, e + 1);
    }).join('');
}
