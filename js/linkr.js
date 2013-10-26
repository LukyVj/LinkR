/* Add links auto to a paragraph with Jquery.
   2013 @LukyVj | Big thanks to @dervondenbergen who helped me with the it[0].innerText.

 I will use it on my own website, maybe a better version,
 But I need a way to target and turn to links, any website url 
 on a random text. */

$(document).ready(function(){
//Target and split each words.   
var words = $("p").text().split(" ");
$("p").empty();
$.each(words, function(i, v) {
    //Wrap them (the words) in a <span></span>
    $("p").append($("<span>").text(v));
});
//Then Target eahc span that contains .com (Note that you can make it work with any domain
var expression = $('span:contains(.com)');
  //Useless, you can remove the line below
  //expression.css({color:'#3498db',borderBottom:'1px dotted #3498db',cursor:'pointer'}); 
  expression.addClass('fakeLink');
  //On click on the span that contains a .com domain, get the inner text.
  expression.on('click',function(){
     var it = $(this),
         url = it[0].innerText;    
    //And open a new window with this link as url
    window.open('http://'+ url +'');  
  });
});


//Ignore lines below, used for page style
$("span.modal a").on("click",function(){$(this).parent().remove()});$(window).scroll(function(e){e.preventDefault();if($(window).scrollTop()+window.innerHeight==$(document).height()){$("footer").addClass("hi")}else{$("footer").removeClass("hi")}})
