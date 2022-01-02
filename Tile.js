class Tile {
    constructor(value) {
        this.value = value ? value : -1;
    }

    isFree() {
        return value < 0;
    }
}