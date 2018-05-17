jQuery( document ).ready(function( $ ) {
 
	var e = $(".facebook_counter").attr("data-fb");
	var fblike_url = "https://graph.facebook.com/v3.0/"+e+"?fields=new_like_count%2Cfan_count&access_token=1039597392765579%7CNw9h9B7_9Psd7rqz5mEUPOUcz2Y";
	$.ajax({type:"GET",url:fblike_url,dataType:"jsonp",success:function(e){$(".facebook_counter").html(e.fan_count);}});

});
