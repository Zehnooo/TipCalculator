function onlyLetters(event) {
  let key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8 || key == 32);
}

document.getElementById("submit-btn").addEventListener("click", function () {
	const name = document.getElementById("fname").value;
	if (!name) alert("Please enter a name"); 

	const randIndex = Math.floor(Math.random() * name.length);
	const randChar = name[randIndex];

	console.log(randChar);
	
	document.getElementById("randChar").textContent = ("YOUR RANDOM CHARACTER IS: " + randChar);

	document.getElementById("page-title").textContent = "GET WRECKED";
});


// 10 percent tip //
document.getElementById("ten-per").addEventListener ("click",function (){
	let num = subtotal.value;
console.log(num);

if(num === '' || num < 0 || num === -0){
	alert("Your subtotal cannot be empty or negative. Please try again.")
	return;
}
	let subNum = parseInt(num, 10);
	console.log(typeof(subNum));
	let tipPercent = .10;
	let tipTotal = subNum * tipPercent;
	let totalAmou = subNum + tipTotal;
	console.log("TRANSACTION AMOUNT " + totalAmou);

		document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + tipTotal);

		document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + totalAmou);

		document.getElementById('tip-amount').style.display = "block";
		document.getElementById('total').style.display = "block";
	});


	// fifteen percent tip
	document.getElementById("fifteen-per").addEventListener ("click",function (){
		let num = subtotal.value;
		console.log(num);
		
		if(num === '' || num < 0){
			alert("Your subtotal cannot be empty or negative. Please try again.")
			return;
		}
			let subNum = parseInt(num, 10);
			console.log(typeof(subNum));
			let tipPercent = .15;
			let tipTotal = subNum * tipPercent;
			let totalAmou = subNum + tipTotal;
			console.log("TRANSACTION AMOUNT " + totalAmou);
		
				document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + tipTotal);
		
				document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + totalAmou);

				document.getElementById('tip-amount').style.display = "block";
		document.getElementById('total').style.display = "block";
		
	});

	// twenty percent tip //
document.getElementById("twenty-per").addEventListener ("click",function (){
	let num = subtotal.value;
	console.log(num);
	
	if(num === '' || num < 0){
		alert("Your subtotal cannot be empty or negative. Please try again.")
		return;
	}
		let subNum = parseInt(num, 10);
		console.log(typeof(subNum));
		let tipPercent = .20;
		let tipTotal = subNum * tipPercent;
		let totalAmou = subNum + tipTotal;
		console.log("TRANSACTION AMOUNT " + totalAmou);
	
			document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + tipTotal);
	
			document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + totalAmou);
	
			document.getElementById('tip-amount').style.display = "block";
		document.getElementById('total').style.display = "block";
});

document.getElementById('custom-per').addEventListener("click", function(){
	let num = subtotal.value;
	console.log(num);
	
		if(num === '' || num < 0){
			alert("Your subtotal cannot be empty or negative. Please try again.")
			return;
		}
		let subNum = parseInt(num, 10);
		document.getElementById('custom-per-input').style.display = "block";
		document.getElementById('tip-amount').style.display = "block";
		document.getElementById('total').style.display = "block";
		
})