// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function emyptyArrAddRemove(arr: number[], flag: boolean[]) {
    let answer: number[] = [];
    
    // lodash zip 사용한 코드
    // import _ from 'lodash';
    // const zipArr = _.zip(arr, parts);
    
    // zipArr.forEach(([num, flg]) => {
    //     if (flg) {
    //         for (let i = 0; i < (value * 2); i++) {
    //             answer.push(value);
    //         }
    //     } else {
    //         for (let i = 0; i < value; i++) {
    //             answer.pop();
    //         }
    //     }
    // });
    // return answer;
    
    arr.forEach((value, idx) => {
        if (flag[idx]) {
            for (let i = 0; i < (value * 2); i++) {
                answer.push(value);
            }
        } else {
            for (let i = 0; i < value; i++) {
                answer.pop();
            }
        }
    })
    return answer;
}