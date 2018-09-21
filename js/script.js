$(document).ready(function(){
	$("#form-settings").submit(function(e){
		e.preventDefault();
		let game=parseInt(e.target[0].value) + 1;
		$.ajax({
			url:"./games/" + game + ".html",
			type:"POST",
			dataType:"html",
			success:function(data){
				$("#container-game").html(data);
			}
		});
		
	});
});