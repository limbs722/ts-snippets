// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function stringCount(my_string: string) {    
    const result = Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const alpha = my_string.charCodeAt(i);

        if (alpha >= 65 && alpha <= 90) {
            result[alpha-65]++;
        } else{
            result[alpha-71]++;
        }
    }
    return result;
}