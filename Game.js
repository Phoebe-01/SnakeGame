function Game() {
    this.row = 20;
    this.col = 20;
    this.score = 0;
    this.init();
    this.snake = new Snake();

    this.food = new Food(this);
    this.start();
    this.bindEvent();

}
Game.prototype.init = function() {
    this.dom = document.createElement("table");
    var tr, td;
    for (var i = 0; i < this.row; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < this.col; j++) {
            td = document.createElement("td")

            tr.appendChild(td)
        }
        this.dom.appendChild(tr);
    }

    document.getElementById("app").appendChild(this.dom)
};
Game.prototype.clear = function() {
    for (var i = 0; i < this.row; i++) {
        for (var j = 0; j < this.col; j++) {

            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = 'transparent'
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = ' '

        }
    }
}
Game.prototype.setColor = function(row, col, color) {
    //让表格几行几列设置颜色
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color
};
Game.prototype.setHTML = function(row, col, html) {
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html
};
Game.prototype.bindEvent = function() {
    var self = this;
    //键盘事件
    document.onkeydown = function(event) {
        switch (event.keyCode) {
            //左
            case 37:
                if (self.snake.direction == "R") return;
                self.snake.direction = "L";
                break;
            case 38:
                if (self.snake.direction == "D") return;
                self.snake.direction = "U";
                break;
            case 39:
                if (self.snake.direction == "L") return;

                self.snake.direction = "R";
                break;
            case 40:
                if (self.snake.direction == "U") return;

                self.snake.direction = "D";
                break;


        }

        this.body.pro()
    }
};
Game.prototype.start = function() {

    this.f = 0;

    this.timer = setInterval(function() {
        game.f++;
        document.getElementById("f").innerHTML = "Time:" + game.f;
        document.getElementById("score").innerHTML = "Score: " + game.score;
        game.clear();

        var during = game.snake.body.length < 30 ? 30 - game.snake.body.length : 1;
        game.f % during == 0 && game.snake.update();


        game.snake.render();
        game.food.render();

    }, 20)

}