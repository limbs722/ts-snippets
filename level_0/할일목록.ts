// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function toDoList(todo_list: string[], finished: boolean[]) {
    return todo_list.filter((v, i) => !finished[i]);
}