// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function movePosition(keyinputs: string[], board: number[]) {
  const [x_len, y_len] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)];
  let pos: Position = [0, 0];

  const move = {
    left: ([posX, posY]) => ([Math.max(posX - 1, -x_len), posY]),
    right: ([posX, posY]) => ([Math.min(posX + 1, x_len), posY]),
    up: ([posX, posY]) => ([posX, Math.min(posY + 1, y_len)]),
    down: ([posX, posY]) => ([posX, Math.max(posY - 1, -y_len)])
  } satisfies Record<string, (_: Position) => Position>;

  return keyinputs.reduce((acc, keyinput) => move[keyinput](acc), pos);
}