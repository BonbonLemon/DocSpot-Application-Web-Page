var colors = ['darksalmon', 'cornflowerblue', 'red', 'yellow', 'wheat',
  'hotpink', 'green', 'orange', 'purple', 'darkolivegreen', 'aqua'];


var setupGrid = function () {
  var ul = document.querySelector('ul');
  var li;
  for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
    for (var colIdx = 0; colIdx < 4; colIdx++) {
      li = document.createElement("li");
      li.setAttribute('pos', [rowIdx, colIdx]);
      li.setAttribute('isChangedRecently', false);
      ul.appendChild(li);
    }
  }
};

var createRandomColor = function () {
  var rowIdx = Math.floor(Math.random() * 4);
  var colIdx = Math.floor(Math.random() * 4);

  var randomSquare = document.querySelector('li[pos=\"' + rowIdx
                      + ',' + colIdx + '\"]');

  if (randomSquare.getAttribute('isChangedRecently') === 'false') {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomSquare.style.background = randomColor;
    randomSquare.setAttribute('isChangedRecently', true);
    setTimeout(function () {
      randomSquare.setAttribute('isChangedRecently', false);
    }, 2000)
  } else {
    createRandomColor();
  }
};

setupGrid();
setInterval(createRandomColor, 250);
