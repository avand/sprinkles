function $get(url, success, error) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        error(xhr.responseText);
      }
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

function $getJSON(url, success, error) {
  $get(url,
    function(json) { success(JSON.parse(json)); },
    function(json) { error(JSON.parse(json)); }
  );
}
