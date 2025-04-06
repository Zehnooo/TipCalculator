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

let num = document.getElementById("subtotal");

// 10 percent tip //
document.getElementById("ten-per").addEventListener ("click",function (){
	let num = subtotal.value;
console.log(num);
document.getElementById('custom-per-input').style.display = "none";
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

		document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal);

		document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou);

		document.getElementById('tip-amount').style.display = "flex";
		document.getElementById('total').style.display = "flex";
	});


	// fifteen percent tip
	document.getElementById("fifteen-per").addEventListener ("click",function (){
		let num = subtotal.value;
		console.log(num);
		document.getElementById('custom-per-input').style.display = "none";
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
		
				document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal);
		
				document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou);

				document.getElementById('tip-amount').style.display = "flex";
		document.getElementById('total').style.display = "flex";
		
	});

	// twenty percent tip //
document.getElementById("twenty-per").addEventListener ("click",function (){
	let num = subtotal.value;
	console.log(num);
	document.getElementById('custom-per-input').style.display = "none";
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
	
			document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal);
	
			document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou);
	
			document.getElementById('tip-amount').style.display = "flex";
		document.getElementById('total').style.display = "flex";
});

document.getElementById('custom-per').addEventListener("click", function(){
	let num = subtotal.value;
	
		if(num === '' || num < 0){
			alert("Your subtotal cannot be empty or negative. Please try again.")
			return;
		}
		let subNum = parseInt(num, 10);
		document.getElementById('custom-per-input').style.display = "flex";
		document.getElementById('tip-amount').style.display = "none";
		document.getElementById('total').style.display = "none";
		document.getElementById('customTipAmou').value = '';
});



document.getElementById('apply-custom').addEventListener("click", function(){
	let num = subtotal.value;


	if (num === '' || num < 0) {
		alert("Please enter a valid custom tip percentage.");
        return;
	}
	let subNum = parseInt(num, 10);
	let customInput = parseInt(document.getElementById('customTipAmou').value, 10);

	if (customInput === 10 || customInput === 15 || customInput === 20){
	alert("Easter Egg found :) Why did you even choose custom tip?");
	
	document.getElementById('tip-amount').style.display = "none";
	document.getElementById('total').style.display = "none";
	document.getElementById('customTipAmou').value = '';
	document.getElementById('custom-per-input').style.display = "none";
	document.getElementById('subtotal').value = '';

	return;


	}

	let tipPercent = customInput / 100;

	let tipTotal = subNum * tipPercent;
	let totalAmou = subNum + tipTotal;

	document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal);
	
			document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou);
	
			document.getElementById('tip-amount').style.display = "flex";
		document.getElementById('total').style.display = "flex";

});

document.getElementById('clear-tip').addEventListener("click",function(){

	document.getElementById('tip-amount').style.display = "none";
	document.getElementById('total').style.display = "none";
	document.getElementById('customTipAmou').value = '';
	document.getElementById('custom-per-input').style.display = "none";
});

document.getElementById('clear-calc').addEventListener("click",function(){
	document.getElementById('tip-amount').style.display = "none";
	document.getElementById('total').style.display = "none";
	document.getElementById('customTipAmou').value = '';
	document.getElementById('custom-per-input').style.display = "none";
	document.getElementById('subtotal').value = '';
});

