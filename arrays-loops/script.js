var videoGames = ['Xbox', 'Nintendo DS', 'PlayStation'];

var last = videoGames.pop();

videoGames.push('Wii')

for (var number = 0; number < 10; number++) {
  console.log(videoGames);
}
console.log('break')
var n = 0
while(n < 10) {
  console.log(videoGames);
  n++
}
console.log('BREACK')
for (let index = 0; index < videoGames.length; index++) {
  console.log(videoGames[index]);
}
console.log('BREACK')
for (let index = 0; index < videoGames.length; index++) {
  console.log(videoGames[index]);
  if (videoGames[index] === 'Nintendo DS') {
    break;
  }
}
var frutas = ['banana', 'apple', 'grapes', 'peach']

frutas.forEach( function(item) {
console.log(item);
})
