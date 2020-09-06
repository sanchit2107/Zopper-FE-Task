function addEmail() {
		$('#inputValue').attr('disabled',false);
		$('#inputValue').attr('type', 'email');
		$('#inputValue').attr('placeholder', 'Enter email here');	
		$('#inputValue').removeAttr('maxlength', '10');
		$('#inputValue').removeAttr('minlength', '10');
		$('#inputValue').removeAttr('onkeypress', 'return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57');
}

function addPhone() {
		$('#inputValue').attr('disabled',false);
		$('#inputValue').attr('type', 'text');
		$('#inputValue').attr('onkeypress', 'return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57');
		$('#inputValue').attr('maxlength', '10');
		$('#inputValue').attr('minlength', '10');
		$('#inputValue').attr('placeholder', 'Enter Phone no. here');
}

// Submitting Form Data
$('form#myForm').submit(function(e){
	e.preventDefault();
	$('input[name="submit-button"]').val('Submitting...');
	$('input[name="submit-button"]').css('pointer-events', 'none');
	var formdata = $(this).serialize();
	console.log(formdata);
	$.ajax({
		'type' : 'post',
		'data' : formdata,
		'url' : 'dummy.php',
		success : function(response){
			var json = JSON.parse(response);
			if(!json.error){
				window.alert(json.message);
			}
			else{
				window.alert(json.message);
			}	
			$('input[name="submit-button"]').val('Submit Form');
			$('input[name="submit-button"]').css('pointer-events', 'auto');
		}
	});
});


