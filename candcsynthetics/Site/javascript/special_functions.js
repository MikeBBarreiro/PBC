  var ns6=document.getElementById&&!document.all

  
  function runIntroSequenceCheck() {  
    
    var myCookie = getCookie();
    
    if (myCookie < maxIntroViews || maxIntroViews == -1) {
    	// only set a cookie if there is a "max allowable views" value set
    	if (maxIntroViews > 0) {
      	  setCookie(myCookie, isPersistantCookie);
      	  
    	} else if (maxIntroViews == 0) {
	       
	         // cannot communicate with flash movie if viewing page on local machine due to security concerns
	         if (!window.location.href.indexOf("http")) {

	           return "skip";
	       
	         }
    	}

    } else {
       
         // cannot communicate with flash movie if viewing page on local machine due to security concerns
         if (!window.location.href.indexOf("http")) {
           return "skip";
         }
      
    } 
    //alert ("noskip");
    return "noskip";
    //setIntroMovieParams();     
  }
  
 function bookmark(){
  if (document.all) {
    if (window.location.href.indexOf("http")) {
      alert("You cannot bookmark a page on your local computer.");
    } else {
      window.external.AddFavorite(document.location.href,document.title)
    }
  } else {
    alert("Please select CTRL-D to bookmark this page");
  }
}

function makeHomePage() {
	if (document.all){
	  document.body.style.behavior='url(#default#homepage)';
      document.body.setHomePage(document.location);
	}
}



function getCookie() {
  var cookieName = document.location + "";
  cookieName = cookieName.replace(/index.htm/gi, "");
  var cookieName2 = cookieName + "index.htm";

  var cookieBox = document.cookie.split("; ");
  for (var i=0; i< cookieBox.length; i++) {
      var cookiePacket = cookieBox[i].split("=");
      if (cookieName == cookiePacket[0] || cookieName2 == cookiePacket[0]) {
        return unescape(cookiePacket[1]);
      }
  }
  return 0;
}



function setCookie(myCookieState, isPersistant) {
  if (!myCookieState) {
    myCookieState = 0;
  }
  myCookieState++;
  myCookieInfo = document.location + "=" + myCookieState+ "; ";

  if (isPersistant == 1) {
    cookieExpiration = new Date();
    cookieExpiration.setFullYear(cookieExpiration.getFullYear() + 1);
    myCookieInfo = myCookieInfo + "expires="+cookieExpiration.toUTCString()+"; ";
  }
  document.cookie = myCookieInfo;
}

//window.onload = runIntroSequenceCheck; // only for intro page






