$(document).ready(function(){
	$.getJSON('https://api.sheety.co/8e876208-a2e9-48b2-89d6-96fb05bb313e', function(data) {
		var template = Handlebars.compile($('#item-template').html());
    $('#items').html(template(data));
    console.log(data);
	})
})