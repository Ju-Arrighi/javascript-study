var isGraduated = true;
var isStudying = true;
var posGrad = false;
if(isGraduated) {
  console.log('have a diploma');
} else if(posGrad) {
  console.log('on going');
} else {
  console.log('no');
};

// negative operator
if(!isGraduated) {
  console.log('have a diploma');
} else if(posGrad) {
  console.log('on going');
} else {
  console.log('no');
};

// to verify if truthy or falsey
if(!!isGraduated) {
  console.log('have a diploma');
} else if(posGrad) {
  console.log('on going');
} else {
  console.log('no');
};

// comparison
if(10 !== 11) {
  console.log('have a diploma');
} else if(5 <= 5) {
  console.log('on going');
} else {
  console.log('no');
};

// logical operator
// in a comparation if the first value is false it returns
// the falsey value and don't verify the rest. If it's true it returns the last true value.
var x = (5 - 4) && (10 - 10);
var y = (5 - 4) || (2 - 3) && (5 - 5)
if(x) {
  console.log('true exemple');
} else if(5 <= 5) {
  console.log('on going');
} else {
  console.log('no');
};

var color = 'yellow'
switch (color) {
  case 'blue':
    console.log('Look at the sky');
    break;
  case 'yellow':
    console.log('look at the sun');
    break;
  default:
    console.log('pick a color');
};
