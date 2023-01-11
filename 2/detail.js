// 버튼 0누르면 
// 모든 버튼에 붙은 orange 클래스 명 제거
// 0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스 제거
// div0에 show 클래스 추가

// $('.tab-button').eq(0).on('click', function() {
//   $('.tab-button').removeClass('orange')
//   $('.tab-content').removeClass('show')
//   $('.tab-button').eq(0).addClass('orange')
//   $('.tab-content').eq(0).addClass('show')
// })

// $('.tab-button').eq(1).on('click', function() {
//   $('.tab-button').removeClass('orange')
//   $('.tab-content').removeClass('show')
//   $('.tab-button').eq(1).addClass('orange')
//   $('.tab-content').eq(1).addClass('show')
// })

// $('.tab-button').eq(2).on('click', function() {
//   $('.tab-button').removeClass('orange')
//   $('.tab-content').removeClass('show')
//   $('.tab-button').eq(2).addClass('orange')
//   $('.tab-content').eq(2).addClass('show')
// })

// for(let i=0; i<10; i++){
//   console.log('하이')
// }

let li=$('li').length

// for(let i=0; i<li; i++){
//   $('.tab-button').eq(i).on('click', function() {
//     tab(i)
//   });
// }

// $('.list').click(function(e) {
//   if ($(e.target)==$('.tab-button').eq(0)){
//     tab(0)
//   }
//   if ($(e.target)==$('.tab-button').eq(1)){
//     tab(1)
//   }
//   if ($(e.target)==$('.tab-button').eq(2)){
//     tab(2)
//   }
// })

$('.list').click(function(e) {
  tab(e.target.dataset.id)
})

function tab(i) {
  $('.tab-button').removeClass('orange')
  $('.tab-button').eq(i).addClass('orange')
  $('.tab-content').removeClass('show')
  $('.tab-content').eq(i).addClass('show')
}

let car=['소나타', 50000, 'white'];
let car2={name:'소나타', price:[50000,6000,4000]}
// car[0]='아반떼'; //수정
// car[3]='메롱';  //추가
// car2.price=60000;
console.log(car2.price);

$('.name').html(car2.name)
$('.price').html(car2.price[2])