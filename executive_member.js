// script.js
let ascFlag = true;

// ページが読み込まれた際に実行される関数
document.addEventListener('DOMContentLoaded', function () {
  // ボタン要素を取得
  const changeBtnLeft = document.querySelector('.contents_change_btn_right');
  const changeBtnRight = document.querySelector('.contents_change_btn_left');
  const changeBtnImg = document.querySelector('.contents_change_img');
  const contentsExecutives = document.querySelectorAll('.contents_executive');
  const plofilemoreBtn = document.querySelectorAll('.executive_profile_more');
  // const addplofile = document.querySelectorAll('.add_executive_profile');
  const toggleBtn = document.querySelector('.toggle_btn');
  // 順番を入れ替える関数
  function SortReverse() {
    // Executive要素を再取得
    const contentsExecutives = document.querySelectorAll('.contents_executive');
    // Executive要素を逆順にする
    const reversedExecutives = Array.from(contentsExecutives).reverse();
    reversedExecutives.forEach(function(element){
      reversedExecutives[0].parentNode.insertBefore(element, reversedExecutives[reversedExecutives.length]);
    });
  };
  
  // ボタンがクリックされたときのイベントリスナー
  changeBtnLeft.addEventListener('click', function () {
    if(ascFlag){
      ascFlag = false;
      changeBtnImg.src = "./doc/images/right_btn.webp";
      SortReverse();
    }
  });
  
  changeBtnRight.addEventListener('click', function() {
    if(!ascFlag){
      ascFlag = true;
      changeBtnImg.src = "./doc/images/left_btn.webp";
      SortReverse();  
    }
  });
  
  toggleBtn.addEventListener('click', function(){
    toggleBtn.style.display = "none";
    contentsExecutives.forEach(element => {
      element.style.display = "block";
    });
  });
//プロフィールの追加
  plofilemoreBtn.forEach(function(element) {
    element.addEventListener('click', function() {
      this.style.display = "none"
      let addprofile = this.parentNode.querySelector('.add_executive_profile')
      addprofile.style.display = "block"
    })
  })
});
