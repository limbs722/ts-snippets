// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw: [string, string], db: [string, string][]) {
    const [id, pw] = id_pw;
    
    // Map 활용해보기
    const dbMap = new Map(db);
    return dbMap.has(id) ? (dbMap.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}