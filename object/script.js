// object
var me = {
  name: 'Juliana',
  age: '39',
  profession: 'Developer',
  status: 'married'
}

// method
var square = {
  sides: 4,
  area: function (side) {
    return side * side;
  },
  perimeter: function (side) {
    return side * 4
  }
};

var square2 = {
  sides: 4,
  area: function (side) {
    return side * side;
  },
  perimeter: function() {
    return this.sides * 4
  }
};

var square3 = {
  sides: 4,
  area(side) {
    return side * side;
  },
  perimeter() {
    return this.sides * 4
  }
};

var me = 'Juliana'

var btn = document.querySelector('.btn');

var menu = {
  width: 18,
  height: 22,
  backgroundColor: 'black',
  perimeter() {
    return (this.width * this.height);
  }
};
