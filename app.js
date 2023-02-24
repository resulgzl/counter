const plus = document.querySelector(".plus");

const minus = document.querySelector(".minus");

const sayi = document.querySelector(".sayi");
var sayac = 0

plus.addEventListener("click",artır);
minus.addEventListener("click",azalt);

function artır()  {
    sayac += 1;
    sayi.innerHTML = sayac;
}


function azalt()  {
    sayac -= 1;
    sayi.innerHTML = sayac;
}