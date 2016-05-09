var View = function () {
  this.setupGrid();
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

new View();
