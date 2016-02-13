**problem**:

Instagram.com does not currently have username autocompleting in its comments, nor does it have messaging. I'm sure this is on a product backlog somewhere, or maybe it's a spec'd out for an intern to complete, but in the meanwhile it is a pretty big limitation for the way I use instagram.

**solution**

jquery based hack to detect when you type a word starting with '@', make a request to /search with that word, return the username of the first result. Obviously this can and will have a bunch of bugs (make an issue if you care), but it also works pretty well since IG search is pretty well done.

#here is a gif on how this works below
![instructional gif](https://github.com/indraneel/instagram-comment-at-reply/raw/master/readme.gif)
