var searchURLParts = ["https://www.instagram.com/web/search/topsearch/?context=blended&query=","&rank_token="];

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

$('input[type=text]').keyup(debounce( function() { 
	var inputField = $(this);
	var type = inputField.val();
	var inputAsArray = type.split(" ");
	var lastWord = inputAsArray[inputAsArray.length-1];
	if (lastWord !== undefined && lastWord.charAt(0)==='@') {
		var location = inputAsArray.length-1;
		lastWord = lastWord.substring(1);
		var searchURL = searchURLParts[0] + lastWord + searchURLParts[1] + "0.500";
		$.ajax(searchURL)
			.done(function(res) {
				if(res.users[0] !== undefined) {
					inputAsArray[location] = "@"+res.users[0].user.username;
					inputField.val(inputAsArray.join(" "));
				}
			})
	}
}, 250));
