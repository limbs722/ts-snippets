// https://school.programmers.co.kr/learn/courses/30/lessons/181916

type DiesType = {
	[key: string | number]: number;
}

function diesGame3(a: number, b: number, c: number, d: number) {
    const obj = [a, b, c, d].reduce((acc: DiesType, value) => ({
        ...acc,
        [value]: (Number(acc[`${value}`]) ?? 0) + 1     // 첫번째 값이 존재하지 않는다면 두번째 값인 '0'이 반환되어야 하므로 ?? 연산자가 더 정확할 것 같습니다.
    }), {});
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    
    switch (keys.length) {
        case 2:
            if (values.includes(2)) {
                return (Number(keys[0]) + Number(keys[1])) * 
                        (Math.abs(Number(keys[0]) - Number(keys[1])));
            } else {
                const triple = Number(keys.filter((i) => obj[`${i}`] === 3)[0]);
                const once = Number(keys.filter((i) => obj[`${i}`] === 1)[0]);
                return Math.pow((10 * triple) + once, 2);
            }
        case 3:
            const filterArr = keys.filter((i) => obj[`${i}`] === 1);
            return Number(filterArr[0]) * Number(filterArr[1]);
        case 4:
            return Math.min(...keys.map(v => parseInt(v)));
        default: // case 1
            return 1111 * a;
    }
}