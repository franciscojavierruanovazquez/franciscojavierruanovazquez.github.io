

$(document).ready(function() {
      $('button').click(function() {
			var total = 0;
			if(parseInt($('.horas').val())!=0 && !isNaN(parseInt($('.horas').val())))
				total = parseInt($('.horas').val()) * 3600;
			if(parseInt($('.minutos').val())!=0 && !isNaN(parseInt($('.minutos').val())))
				total = total + parseInt($('.minutos').val()) * 60;
			if(parseInt($('.segundos').val())!=0 && !isNaN(parseInt($('.segundos').val())))
				total = total + parseInt($('.segundos').val());
			
          // Run the countdown
          $('.timer').circularCountDown({
              delayToFadeIn: 500,
			  size: 500,
			  fontColor: 'black',
			  fontSize: 70,
			  colorCircle: '#78060e',
			  background: '#ff0000',
              reverseLoading: true,
              duration: {
                  seconds: parseInt(total)
              },
              beforeStart: function() {
                  $('.launcher').hide();
              },
              end: function(countdown) {
                countdown.destroy();
                
				var audioElement = document.createElement('audio');
				audioElement.setAttribute('src', 'sounds/alarm.wav');
				audioElement.play();
				
				$('.horas').val('');
				$('.minutos').val('');
				$('.segundos').val('');
                $('.launcher').show();
              }
          });
      });
  });