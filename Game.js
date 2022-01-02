class Game {
    constructor(sideLength) {
        console.log("New game constructed with sideLength " + sideLength);
        this.sideLength = sideLength;
        this.swapsMade = 0;
        this.solved = false;
        this.board = [];
        this.initBoard();
    }

    initBoard() {
        for (let i = 1; i < this.sideLength * this.sideLength; i++) {
            this.board.push(new Tile(i));
        }
        this.board.push(new Tile());

        const b = this.board.length - 2, a = b - 1;
        console.log(a + ", " + b);


        const temp = this.board[b].value;
        this.board[b].value = this.board[a].value;
        this.board[a].value = temp;
    }

    swap(index) {
        let freeIndex = this.findFreeAdjacent(index);

        if (freeIndex >= 0) {
            this.board[freeIndex].value = this.board[index].value;
            this.board[index].value = -1;
            this.swapsMade++;
            this.checkSolved();
        }
    }

    // Returns index of free tile adjacent to index.
    // Returns undefined if none found
    findFreeAdjacent(index) {
        const upIndex = parseInt(index) - parseInt(this.sideLength);
        const rightIndex = parseInt(index) + 1;
        const downIndex = parseInt(index) + parseInt(this.sideLength);
        const leftIndex = parseInt(index) - 1;

        if (upIndex >= 0 && this.board[upIndex].value < 0) {
            return upIndex;
        } else if (rightIndex < this.board.length && (Math.floor(index/this.sideLength) == Math.floor(rightIndex/this.sideLength)) && this.board[rightIndex].value < 0) {
            return rightIndex;
        } else if (downIndex < this.board.length && this.board[downIndex].value < 0) {
            return downIndex;
        } else if (leftIndex >= 0 && Math.floor(index/this.sideLength) == Math.floor(leftIndex/this.sideLength) && this.board[leftIndex].value < 0) {
            return leftIndex;
        }

        return undefined;
    }

    // Checks to see if board is solved
    checkSolved() {
        for (let i = 1; i < this.board.length; i++) {
            if (this.board[i].value != i) {
                return;
            }
        }

        // TODO win
        this.solved = true;
    }
}