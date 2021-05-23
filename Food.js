function Food(gameSnake) {
    var self = this;

    do {
        this.row = parseInt(Math.random() * gameSnake.row);
        this.col = parseInt(Math.random() * gameSnake.col);
        console.log()
    } while ((function() {
            for (var i = 0; i < gameSnake.snake.body.length; i++) {
                if (gameSnake.snake.body[i].row == self.row && gameSnake.snake.body[i].col == self.col) {

                    return true;
                }

            }
            return false;
        })());

    console.log(this.row, this.col)

    //判断FOOD和snake是否重合
}
Food.prototype.render = function() {
    game.setHTML(this.row, this.col, "❤")
}