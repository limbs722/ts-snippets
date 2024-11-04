// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function alien(spell: string[], dic: string[]) {
    const spellLen = spell.length;
    
    return dic.filter((d) => spell.every((s) => d.includes(s))).length || 2;
}