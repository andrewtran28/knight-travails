const knightMoves = (() => {
    const BOARD_SIZE = 8;

    const knightMovement = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

    const checkValidMove = (move) => {
        const [row, col] = move;
        if ((row >= 0 && row < BOARD_SIZE) && (col >= 0 && col < BOARD_SIZE)) {
            return true;
        } else {
            return false;
        }
    }
    
    const knightPath = (start, end) => {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length) {
            const path = queue.shift();
            const current = path[path.length - 1];
            if (current[0] === end[0] && current[1] === end[1]) {
                return path;
            }

            for (let [row, col] of knightMovement) {
                let nextMove = [current[0] + row, current[1] + col];

                if (checkValidMove(nextMove) && !visited.has(nextMove.toString())) {
                    queue.push([...path, nextMove]);
                    visited.add(nextMove.toString());
                }
            }
        }
    }
  
    const showPath = (start, end) => {
        const move = knightPath(start, end);

        console.log(`Knight starts at [${start}] and ends at [${end}].`);
        console.log(`Knight makes it in ${move.length - 1} moves! Here's their path:`);
        move.forEach(square => console.log(square));

        return move;
    }

    return { showPath }
})();

knightMoves.showPath([0,2], [7,6]);