(function(){
	'use.strict';

	var app = {

		init:function(){

			$('input').on('change', this.recupValeur);
			this.hexaValeur();
			
		},
		
		recupValeur:function(){

			var r = $('#red').val();
			var g = $('#green').val();
			var b = $('#blue').val();
			var a = $('#alpha').val()/100;

			$('body').css('background-color', 'rgba('+r+','+g+','+b+','+a+')');
			$('#valeur').html(+r+ "," +g+ "," +b+"," +a);

		},

		hexaValeur:function(hexaR,hexaB,hexaG){
			var rVal = parseInt(hexaR, 10);
			var gVal = parseInt(hexaG, 10);
			var bVal = parseInt(hexaB, 10);

			var red = rVal.toString(16);
			var green = gVal.toString(16);
			var blue = bVal.toString(16);

			var hexa = ('#' + red + green + blue).toUpperCase();
			$('#hexa').html(hexa);
			console.log(hexa);

			
		},
	};

	$(document).ready(function(){
		app.init();  
	});
})();


