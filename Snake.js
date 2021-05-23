function Snake() {
    this.body = [
        { "row": 3, "col": 5 },
        { "row": 3, "col": 4 },
        { "row": 3, "col": 3 },
        { "row": 3, "col": 2 },

    ];
    this.direction = "R";

}
Snake.prototype.update = function() {
    switch (this.direction) {
        case "R":
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col + 1 });
            break;
        case "D":
            this.body.unshift({ "row": this.body[0].row + 1, "col": this.body[0].col });
            break;
        case "L":
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col - 1 });
            break;
        case "U":
            this.body.unshift({ "row": this.body[0].row - 1, "col": this.body[0].col });
            break;

    }

    if (this.body[0].col > game.col - 1 || this.body[0].row > game.col - 1 || this.body[0].col < 0 || this.body[0].row < 0) {
        alert("游戏结束！您当前的得分为" + game.score + "分")

        this.body.shift()
        clearInterval(game.timer)
    }

    for (var i = 1; i < this.body.length; i++) {
        if (this.body[0].col == this.body[i].col && this.body[0].row == this.body[i].row) {
            this.body.shift()
            clearInterval(game.timer)
            alert("游戏结束！您当前的得分为" + game.score + "分")

        }
    }
    if (this.body[0].row == game.food.row && this.body[0].col == game.food.col) {
        game.food = new Food(game)
        game.score++;
        game.f = 0;
    } else {
        this.body.pop()

    }
    //this.body.push({ 'row': this.body[this.body.length].row - 1, 'col': this.body[this.body.length].col - 1 })


    //this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col + 1 });
    // console.log(this.body)

};
Snake.prototype.changeDirection = function(d) {
    this.willDirection = d;
}
Snake.prototype.render = function() {
    game.setColor(this.body[0].row, this.body[0].col, ' -webkit-radial-gradient(center center, pink, red)')
    for (var i = 1; i < this.body.length; i++) {
        game.setColor(this.body[i].row, this.body[i].col, ' -webkit-radial-gradient(center center, orange, red)')
    }
}