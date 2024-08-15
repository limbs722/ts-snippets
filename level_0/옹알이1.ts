// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function babbling1(babbling: string[]) {
    const babblingList = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    babbling.forEach((bab) => {
        const filterArr = babblingList.filter((v) => bab.includes(v));
        if (filterArr.length > 0) {
            let str = bab;
            str = filterArr.reduce((acc, value) => {
                return acc.replace(value, '');
            }, str);
            
            if (str.length === 0) {
                answer++;
            }
        }
    })
    
    return answer;
}