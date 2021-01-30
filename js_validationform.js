function validatefirstName() { // FIRST NAME FORM VALIDATION
	var fName = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

	if (re1.test(fName)) { // if input is valid, "Valid" will appear in feedback column in green
		document.getElementById('firstNameprompt').style.color="green";
		document.getElementById('firstNameprompt').innerHTML = "<strong>&#10004; Valid</stong>";
		return true;
			}

	else { // if input is invalid, "Invalid" will appear in feedback column in red
		document.getElementById('firstNameprompt').style.color="red";
		document.getElementById('firstNameprompt').innerHTML = "<strong>Invalid first name entry.</stong> Enter 2-15 characters.";
		return false;
			}
} // END OF FIRST NAME FORM VALIDATION



function validatelastName() { // LAST NAME FORM VALIDATION
	var lName = document.getElementById("lastName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,25}$/;

	if (re1.test(lName)) { // if input is valid, "Valid" will appear in feedback column in green
		document.getElementById('lastNameprompt').style.color="green";
		document.getElementById('lastNameprompt').innerHTML = "<strong>&#10004; Valid</stong>";
		return true;
			}

	else { // if input is invalid, "Invalid" will appear in feedback column in red
		document.getElementById('lastNameprompt').style.color="red";
		document.getElementById('lastNameprompt').innerHTML = "<strong>Invalid last name entry.</stong> Enter 2-25 characters.";
		return false;
			}
} // END OF LAST NAME FORM VALIDATION



function validatePhone() { // PHONE FORM VALIDATION
	var phoneNum = document.getElementById("phone").value;
	var re1 = /^\d{3}-\d{3}-\d{4}$/;

	if (re1.test(phoneNum)) { // if input is valid, "Valid" will appear in feedback column in green
		document.getElementById('phonePrompt').style.color="green";
		document.getElementById('phonePrompt').innerHTML = "<strong> &#10004; Valid</stong>";
		return true;
			}

	else { // if input is invalid, "Invalid" will appear in feedback column in red
		document.getElementById('phonePrompt').style.color="red";
		document.getElementById('phonePrompt').innerHTML = "<strong> &#128222; Use xxx-xxx-xxxx</stong>";
		return false;
			}
} // END OF PHONE FORM VALIDATION


function previewOrder() { // GENERATES PREVIEW OF ORDER

	// The general info
	var fName = document.getElementById("firstName").value;
	var lName = document.getElementById("lastName").value;
	var fullName = fName + " " + lName;

	var phoneNum = document.getElementById("phone").value;
	var address1 = document.getElementById("faddress1").value;
	var address2 = document.getElementById("faddress2").value;
	
	var date = document.getElementById("deliverydate").value;

	// The good cake stuff
	var flavor = document.getElementById("cakeflavor").value;
	var size = document.getElementById("cakesize").value;
	var layers = document.getElementById("cakelayers").value;
	var cmsg = document.getElementById("cakemsg").value;
	var colormsg = document.getElementById("cakemsgcolor").value;

	document.getElementById('orderPrompt').innerHTML = "<hr> <h3> &#128172; Order Summary </h3>";
	document.getElementById('orderPrompt').innerHTML += "<p><strong>" + fullName + "</strong> has ordered a " + size + " " + flavor + " cake with " + layers + " layer(s). </p>";
	
	document.getElementById('orderPrompt').innerHTML +=  "<p> The cake will be delivered to " + address1 + ", " + address2 + " on <u>" + date + "</u>.</p>";
	document.getElementById('orderPrompt').innerHTML +=  "<p><strong> " + fullName + "</strong> can be contacted at " + phoneNum + ".</p>";

	document.getElementById('orderPrompt').style.color = colormsg;
	document.getElementById('orderPrompt').innerHTML +=  "<strong>The cake will have a special message in this color saying: <quote>" + cmsg + "</quote></strong>";
} // END PREVIEW OF ORDER