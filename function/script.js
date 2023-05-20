// var num = 2;
function area(lado) {
  return lado * lado;
};
// console.log(area(num));

addEventListener('click', function() {
  console.log('hi');
});

function elder(age) {
  var age = 20
  if (typeof age !== 'number' ) {
    return console.log('give me your age');
  } else if(age >= 60) {
    return console.log('you are an elder');
  } else {
    return console.log('You are young');
  }
};
// console.log(elder(60))
