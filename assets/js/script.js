function play() {
var audio = new Audio('https://muhamadramdani.com/bucin/audio/serius-sama-kamu.mp3');audio.play();}
function nonFt() {document.getElementById('foto').style.display = "none";} function showFt() {document.getElementById('foto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} function showDiv() {document.getElementById('Content').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "12px 12px 12px 0";document.getElementById('trm').style.display = "none";}
  function iloveu() {if(n==third_text.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function fotoKt() {document.getElementById('img_aku').style.margin = "0 110px 0 0";document.getElementById('img_kamu').style.opacity = "1";document.getElementById('img_kamu').style.margin = "0 0 0 60px";
  var e1 = document.getElementById('img_aku');e1.classList.add("degdeg");var e2 = document.getElementById('img_kamu');e2.classList.add("degdeg");}

  function typing_first() {
    if(c<first_text.length){
      document.getElementById("first_text").innerHTML += first_text.charAt(c);
      c++;
      setTimeout(typing_first,200);
    }
    if(c==first_text.length){
      typing_second();}
  }
  function typing_second() {
    if(i<second_text.length){
      document.getElementById("second_text").innerHTML += second_text.charAt(i);
      i++;
      setTimeout(typing_second,200);
    }
    if(i==second_text.length){
    last_typing();}
  }
  function last_typing() {
    if(n<third_text.length){
      document.getElementById("third_text").innerHTML += third_text.charAt(n);
      n++;
      setTimeout(last_typing,100);
    }
    if(n==third_text.length){
    trm();}
  }
  function siap() {
    if(d<fourth_text.length){
      document.getElementById("fourth_text").innerHTML += fourth_text.charAt(d);
      d++;
      setTimeout(siap,80);
    }
    if(d==fourth_text.length){
    document.getElementById('sp2').style.display = "none";document.getElementById('sp3').style.display = "block";
    duar();}
  }
  function duar() {
    if(y<fifth_text.length){
      document.getElementById("fifth_text").innerHTML += fifth_text.charAt(y);
      y++;
      setTimeout(duar,200);
    }
    if(y==fifth_text.length){
    fotoKt();}
    }