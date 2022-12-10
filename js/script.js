const deck ={"img//Smoke.webp":5,
              "img//Lobber.png":7,
			  "img//Coin.webp":10
			};
var player=0,count = 0,bal1 = 0,bal2 = 0,bal3 = 0;
var bal = 100;
btn.addEventListener('click', () => {
	bal-=5;
	var a = Math.floor(Math.random() * 3);
	var b = Math.floor(Math.random() * 3);
	var c = Math.floor(Math.random() * 3);
	var d = Math.floor(Math.random() * 3);
	var e = Math.floor(Math.random() * 3);
	var f = Math.floor(Math.random() * 3);
	var g = Math.floor(Math.random() * 3);
	var h = Math.floor(Math.random() * 3);
	var i = Math.floor(Math.random() * 3);
	document.getElementById('c1').setAttribute("src", Object.keys(deck)[a]);
    document.getElementById('c2').setAttribute("src", Object.keys(deck)[b]);
	document.getElementById('c3').setAttribute("src", Object.keys(deck)[c]);
    document.getElementById('c4').setAttribute("src", Object.keys(deck)[d]);
	document.getElementById('c5').setAttribute("src", Object.keys(deck)[e]);
    document.getElementById('c6').setAttribute("src", Object.keys(deck)[f]);
	document.getElementById('c7').setAttribute("src", Object.keys(deck)[g]);
	document.getElementById('c8').setAttribute("src", Object.keys(deck)[h]);
    document.getElementById('c9').setAttribute("src", Object.keys(deck)[i]);
	bal1 += Object.values(deck)[a]+Object.values(deck)[b]+Object.values(deck)[c];
	bal2 += Object.values(deck)[d]+Object.values(deck)[e]+Object.values(deck)[f];
	bal3 += Object.values(deck)[g]+Object.values(deck)[h]+Object.values(deck)[i];
	if((bal1==30)||(bal2==30)||(bal3==30)){bal+=50}
	bal1=0;bal2=0;bal3=0;
	if(bal==0){alert("Не пощастило,спробуйте ще")}
	if(bal==0){document.getElementById("btn").disabled = true;}
	balance.textContent = "Balance:" + bal;
});
btn2.addEventListener('click', () => {
	document.getElementById("btn").disabled = false;
    bal = 100;
	balance.textContent = "Balance:" + bal;
});