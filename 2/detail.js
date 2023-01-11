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

for(let i=0; i<li; i++){
  $('.tab-button').eq(i).on('click', function() {
    $('.tab-button').removeClass('orange')
    $('.tab-button').eq(i).addClass('orange')
    $('.tab-content').removeClass('show')
    $('.tab-content').eq(i).addClass('show')
  });
}

