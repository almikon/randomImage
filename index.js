let blob;

async function getPhoto() {
  let img = document.querySelector('.randomImage');

  let response = await fetch('https://source.unsplash.com/random');
  blob = await response.blob();
  img.src = URL.createObjectURL(blob);
  let imgWrapper = document.querySelector('.imgWrapper');
  let buttonGetPhoto = document.querySelector('.button');
  imgWrapper.append(buttonGetPhoto);
  buttonGetPhoto.textContent = "Get another random image";
  buttonGetPhoto.classList.remove('center');
  buttonGetPhoto.classList.add('button__getImage'); 

  //document.querySelector('#button__getImage').style.position = "float";;
  //document.elm.style.position = "float";
  
  let button = document.createElement("button");
  button.classList.add('button', 'button__saveImage');
  button.innerHTML = "Save this fancy image";
  button.addEventListener ("click", () => saveBlobAsFile(blob));
  imgWrapper.append(button);

  let shareButton = document.createElement("button");
  shareButton.classList.add('button', 'shareButton');
  shareButton.innerHTML = "Share this fancy image";
  //shareButton.addEventListener ();
  imgWrapper.append(shareButton);

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

//<button class="button hidden" type="button" onclick=""></button>