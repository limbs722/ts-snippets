// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function loginSuccess(id_pw: [string, string], db: [string, string][]) {
    const [id, pw] = id_pw;
    
    // Map 활용해보기
    const dbMap = new Map(db);
    // has와 get을 연달아 사용하면 get을 두 번 호출하는 것과 같다.
    // 이런 경우 get을 한 번만 사용하도록 한다.
    const getId = dbMap.get(id);

    if (!getId) {
        return 'fail';
    }
    return getId === pw ? 'login' : 'wrong pw';
}