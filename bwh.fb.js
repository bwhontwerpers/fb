jQuery(function ($) {
$(document).ready(function(){if($(".facebook_counter")){var e=$(".facebook_counter").attr("data-fb");fblike_url="https://graph.facebook.com/v2.5/"+e+"?fields=about%2Clikes&access_token=1039597392765579%7CNw9h9B7_9Psd7rqz5mEUPOUcz2Y",$.ajax({type:"GET",url:fblike_url,dataType:"jsonp",success:function(e){$(".facebook_counter").html(e.likes)}})}});})(jQuery);
