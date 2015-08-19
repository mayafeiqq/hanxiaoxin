/* Configure twitter feeds */

getTwitters('tweet', { 
/* change "aniqueahmad" to your twitter screen name */
id: 'aniqueahmad', 
/* no of tweets to show in page */
count: 1, 
enableLinks: true, 
ignoreReplies: true, 
clearContents: true,
template: '<span class="prefix"> <a href="http://twitter.com/%user_screen_name%">%user_name%</a> : </span> <span class="status">"%text%"</span> <span class="time"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></span>'
});