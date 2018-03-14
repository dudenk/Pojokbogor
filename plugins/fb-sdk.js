let vm = this
window.fbAsyncInit = () => {
  FB.init({
    appId: '1975447592717295',
    cookie: true,
    xfbml: true,
    version: 'v2.12'
  })
  FB.getLoginStatus(function (response) {
    vm.statusChangeCallback(response)
  })
}

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/id_ID/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
