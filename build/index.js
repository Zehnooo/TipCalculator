// toggle theme

document.getElementById("dark-mode").addEventListener("click", function (){

	const isLight = document.body.classList.toggle('dark-mode');

	if (isLight) {
		localStorage.setItem("theme","light");
	} else {
		localStorage.removeItem("theme");
	}
});

// locks subtotal to only allow keypresses from numbers 0-9

function onlyLetters(event) {
  let key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8 || key == 32);
}

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
	let tipPercent = .10;
	let subNum = parseFloat(num);
	let tipTotal = parseFloat((subNum * tipPercent));
	let totalAmou = parseFloat((subNum + tipTotal));

		document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal.toFixed(2));

		document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou.toFixed(2));

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
			let tipPercent = .15;

			let subNum = parseFloat(num);
			let tipTotal = parseFloat((subNum * tipPercent));
			let totalAmou = parseFloat((subNum + tipTotal));
		
				document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + (tipTotal).toFixed(2));
		
				document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou.toFixed(2));

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
		
		let tipPercent = .20;
		let subNum = parseFloat(num);
		let tipTotal = parseFloat((subNum * tipPercent));
		let totalAmou = parseFloat((subNum + tipTotal));
	
			document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal.toFixed(2));
	
			document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou.toFixed(2));
	
			document.getElementById('tip-amount').style.display = "flex";

			document.getElementById('total').style.display = "flex";
});

document.getElementById('custom-per').addEventListener("click", function(){
	let num = subtotal.value;
	
		if(num === '' || num < 0){
			alert("Your subtotal cannot be empty or negative. Please try again.")
			return;
		}
		let subNum = parseFloat(num);
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
	let subNum = parseFloat(num);
	let customInput = parseFloat(document.getElementById('customTipAmou').value);

	if (isNaN(customInput) || customInput <= 0) {
		alert("Tip percentage must be a positive number.");
		return;
	}

	if ([10, 15, 20].includes(customInput)){
	alert("Easter Egg found :) Why did you even choose custom tip?");
	
	document.getElementById('tip-amount').style.display = "none";
	document.getElementById('total').style.display = "none";
	document.getElementById('customTipAmou').value = '';
	document.getElementById('custom-per-input').style.display = "none";
	document.getElementById('subtotal').value = '';

	return;


	}

	let tipPercent = customInput / 100;

	let tipTotal = parseFloat(subNum * tipPercent);
	let totalAmou = parseFloat(subNum + tipTotal);

	document.getElementById("tip-amount").textContent = ("TOTAL TIP AMOUNT = " + "$" + tipTotal.toFixed(2));
	
			document.getElementById("total").textContent = (" TOTAL BILL AMOUNT = " + "$" + totalAmou.toFixed(2));
	
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

