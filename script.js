$(document).ready(function() {	
});

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

function phonenumber(inputtxt) {

  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno)) {
      		return true;
  }
  else {
        alert("message");
        return false;
    }
}


// function checkValid(inputtxt)
// {
//   var phoneno = /^\d{10}$/;
//   if((inputtxt.value.match(phoneno))
//   {
//   		return true;
//   }
//   else
//     {
//         alert("message");
//         return false;
//     }
// }
