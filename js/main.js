var colors = ['darksalmon', 'cornflowerblue', 'red', 'yellow', 'wheat',
  'hotpink', 'green', 'orange', 'purple', 'darkolivegreen', 'aqua'];

var View = function () {
  this.setupGrid();
  setInterval(this.createRandomColor, 250);
};

View.prototype.setupGrid = function () {
  var ul = document.querySelector('ul');
  var li;
  for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
    for (var colIdx = 0; colIdx < 4; colIdx++) {
      li = document.createElement("li");
      li.setAttribute('pos', [rowIdx, colIdx]);
      ul.appendChild(li);
    }
  }
};

View.prototype.createRandomColor = function () {
  var rowIdx = Math.floor(Math.random() * 4);
  var colIdx = Math.floor(Math.random() * 4);

  var randomSquare = document.querySelector('li[pos=\"' + rowIdx
                      + ',' + colIdx + '\"]');
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  randomSquare.style.background = randomColor;
};

new View();
