function addEmail() {
		$('#inputValue').attr('disabled',false);
		$('#inputValue').attr('type', 'email');
		$('#inputValue').attr('placeholder', 'Enter email here');	
}

function addPhone() {
		$('#inputValue').attr('pattern', "[0-9]{10}");
		$('#inputValue').attr('disabled',false);
		$('#inputValue').attr('type', 'number');
		$('#inputValue').attr('placeholder', 'Enter Phone no. here');
}

// Check length of Mobile Number
function phonenumber() {

	if($('input[name=searchBy]:checked').val() == "phoneno") {
		var name = $('#inputValue').val();
		if (name.length < 10 || name.length > 10)
		{
		    alert('Mobile number should be of 10 digits '); 
		}
	}
} 


