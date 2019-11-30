
		$(document).ready(() => {
			$('#readButton').click(() => {
				const requestURL = 'users/' + $('#nameBox').val();
				console.log('making ajax request to:', requestURL);
				$.ajax({
					// all URLs are relative to http://localhost:3000/
					url: requestURL,
					type: 'GET',
					dataType: 'json', // this URL returns data in JSON format
					success: (data) => {
						console.log('You received some data!', data);

						if (data.PharmacyName && data.PhoneNo && data.Map) {
							$('#status').html('Successfully fetched data at URL: ' + requestURL);
							$('#jobDiv').html('Pharmacy Name : ' + data.PharmacyName);
							$('#status').html('Phone Number : ' + data.PhoneNo);
							$('#map').attr('src', data.Map).attr('width', '300px');
						} else {
							$('#status').html('Not found ' + requestURL +
								' NB: first latter must be capital ');
							// clear the display
							$('#jobDiv').html('');
							$('#map').attr('src', '').attr('width', '0px');
						}
					},
				});
			});

			$('#allUsersButton').click(() => {
				$.ajax({
					url: 'users',
					type: 'GET',
					dataType: 'json',
					success: (data) => {
						console.log('You received some data!', data);
						$('#status').html('All users: ' + data);
					},
				});
			});

			// define a generic Ajax error handler:
			// http://api.jquery.com/ajaxerror/
			$(document).ajaxError(() => {
				$('#status').html('Error: unknown ajaxError!');
			});
		});
	

$(document).ready(function(){
    $('#show').click(function() {
      $('.menu').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show1').click(function() {
      $('.menu1').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show2').click(function() {
      $('.menu2').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show3').click(function() {
      $('.menu3').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show4').click(function() {
      $('.menu4').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show5').click(function() {
      $('.menu5').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show6').click(function() {
      $('.menu6').toggle("slide");
    });
});
$(document).ready(function(){
    $('#show7').click(function() {
      $('.menu7').toggle("slide");
    });
});



$(document).ready(function(){
  $('#see').click(function() {
    $('.men').toggle("slide");
  });
});


$(document).ready(function(){
    $('#see1').click(function() {
      $('.men1').toggle("slide");
    });
});

$(document).ready(function(){
    $('#see2').click(function() {
      $('.men2').toggle("slide");
    });
});
$(document).ready(function(){
    $('#see3').click(function() {
      $('.men3').toggle("slide");
    });
});
$(document).ready(function(){
    $('#see4').click(function() {
      $('.men4').toggle("slide");
    });
});
$(document).ready(function(){
  $('#see5').click(function() {
    $('.men5').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see6').click(function() {
    $('.men6').toggle("slide");
  });
});

$(document).ready(function(){
  $('#see7').click(function() {
    $('.men7').toggle("slide");
  });
});

$(document).ready(function(){
  $('#see8').click(function() {
    $('.men8').toggle("slide");
  });
});

$(document).ready(function(){
  $('#see9').click(function() {
    $('.men9').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see10').click(function() {
    $('.men10').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see11').click(function() {
    $('.men11').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see12').click(function() {
    $('.men12').toggle("slide");
  });
});



$(document).ready(function(){
  $('#see13').click(function() {
    $('.men13').toggle("slide");
  });
});



$(document).ready(function(){
  $('#see14').click(function() {
    $('.men14').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see15').click(function() {
    $('.men15').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see16').click(function() {
    $('.men16').toggle("slide");
  });
});



$(document).ready(function(){
  $('#see17').click(function() {
    $('.men17').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see18').click(function() {
    $('.men18').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see19').click(function() {
    $('.men19').toggle("slide");
  });
});


$(document).ready(function(){
  $('#see20').click(function() {
    $('.men20').toggle("slide");
  });
});