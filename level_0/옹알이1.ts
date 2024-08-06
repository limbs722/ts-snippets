// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function babbling1(babbling: string[]) {
    const babblingList = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    babbling.forEach((bab) => {
        const filter = babblingList.filter((v) => bab.includes(v));
        if (filter.length > 0) {
            let str = bab;
            filter.forEach((v) => {
                str = str.replace(v, '');
            });
            
            if (str.length === 0) {
                answer++;
            }
        }
    })
    
    return answer;
}