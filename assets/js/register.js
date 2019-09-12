$(document).ready(function() {

	//On click signup, hide login and show registration form
	$("#hideLogin").click(function() {
		$("#loginForm").slideUp("slow", function(){
			$("#registerForm").slideDown("slow");
		});
	});

	//On click signup, hide registration and show login form
	$("#hideRegister").click(function() {
		$("#registerForm").slideUp("slow", function(){
			$("#loginForm").slideDown("slow");
		});
	});

loginForm
});