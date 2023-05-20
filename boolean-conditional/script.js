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
