javascript: (function() {
  function downloadCurrentPhoto() {
      document.querySelector(".fbPhotoSnowliftDropdownButton._p.uiButton").click(), setTimeout(function() {
          document.querySelector(".uiContextualLayerPositioner.uiLayer:not(.hidden_elem)").querySelector("._54nc").click(), document.querySelector(".fbPhotoSnowliftDropdownButton._p.uiButton").click()
      }, 500)
  }
  document.onkeyup = function(o) {
      if (68 == (o = o || window.event).which) return downloadCurrentPhoto(), !1
  };
})();

var i, images, index, len, link, xhr;

images = document.getElementsByTagName('img');
console.log("=======1",images);
xhr = new XMLHttpRequest();
for (i = 0, len = images.length; i < len; i++) {
  index = images[i];
  link = images[i].src;
  console.log("=======1",link);
  
  xhr.onload = function() {
    var reader;
    reader = new FileReader();
    console.log("=======1",link);
    
    reader.onloadend = function() {
      var a;
      a = document.createElement('a');
      a.href = reader.result;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      return document.body.removeChild(a);
    };
    return reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', link);
  xhr.responseType = 'blob';
  xhr.send();
  console.log("=====2");
  
}
