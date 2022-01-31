let blob;

async function getPhoto() {
  let img = document.querySelector('.randomImage');

  let response = await fetch('https://source.unsplash.com/random');
  blob = await response.blob();
  img.src = URL.createObjectURL(blob);
  //document.querySelector('.hidden').style.visibility = 'visible';
  //document.getElementsByClassName("hidden").style.visibility = "visible";
  document.querySelector('.button').textContent = "Get another random image";
  document.querySelector('.static').style.cssText = "position: float; top:0; right:0;";
  document.getElementByClass('imgWrapper').appendChild(document.getElementByClass('button'))
}

function saveBlobAsFile(blob, fileName) {
  var reader = new FileReader();

  reader.onloadend = () => {
    var base64 = reader.result;
    var link = document.createElement("a");

    document.body.appendChild(link); // for Firefox

    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
  };

  reader.readAsDataURL(blob);
}

//<button class="button hidden" type="button" onclick="saveBlobAsFile(blob)">Save this fancy image</button>