// 배열을 통해 카드의 정보를 저장

const detail1 = {"img" : "./images/Sally.png", "name" : "Sed ut perspiciatis","inform":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."}
const detail2 = {"img" : "./images/David.png", "name" : "Lorem ipsum dolor","inform":"Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."}
const detail3 = {"img" : "./images/Rolly.png", "name" : "Nemo enim ipsam","inform":"Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor."}


let arr = [detail1, detail2, detail3];
console.log(arr)
let div = ""


// 카드의 위치를 랜덤으로 재배열

function randomPlace (myRandom){
  var i = myRandom.length, j, temp;
  if (i===0) return false;
  while(--i){
    j=Math.floor(Math.random() * (i+1));
    temp = myRandom[i]
    myRandom[i] = myRandom[j];
    myRandom[j] = temp;
  }
  return myRandom;
}

let arr2 = randomPlace(arr);

console.log(arr2)

for(let i=0; i<arr2.length;i++){
  div += '<div class=card><img src='+arr2[i]["img"] + ' alt=' +arr2[i]["name"]+' class="photo"> <h2 class="name">'+arr2[i]["name"]+'</h2><p class="info">'+arr2[i]["inform"]+'</p><p class="learn_more">LEARN MORE</p></div>'
}


// 재배열된 카드 수정

document.querySelector(".personal_card").innerHTML = div;



