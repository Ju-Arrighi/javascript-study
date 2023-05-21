// var => the variable scapes from the block!
function showCar() {
  console.log(car)
} // works!

if(true) {
  var car = 'fusca';
  console.log(car)
}

// let => the variable doesn't scape from the block!
function showCar() {
  console.log(car)
} // doesn't work!

if(true) {
  var car = 'fusca';
  console.log(car)
}

// const => keep the block scope and blocks value change
// You can change object's properties values but not object's property types!
// let => keep the block scope and allow value change but not redeclaring!
