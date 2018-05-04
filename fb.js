jQuery( document ).ready(function( $ ) {
 
 var url = 'http://www.2cvgarage.nl';
 var apiUrl = 'https://graph.facebook.com/?ids='+url;
 
 $.ajax({url: apiUrl, success: function(result){
 
        $.each( result, function( key, val ) {
 
        	console.log(key + ' - ' + val['share']['share_count']);
 
        	var shareCount = val['share']['share_count'];
        	
        	$(".facebook_counter").html(shareCount);
 
   });
 
 }});

});
