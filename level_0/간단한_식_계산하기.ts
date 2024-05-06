// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function simpleCalc(binomial: string) {
    const [a, op, b] = binomial.split(' ');
    
    switch (op) {
        case '+':
            return Number(a) + Number(b);
        case '-':
            return Number(a) - Number(b);
        default: // '*'
            return Number(a) * Number(b);
    }
}