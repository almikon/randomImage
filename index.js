let blob;
let response;

async function getPhoto() {
  let img = document.querySelector('.randomImage');
  
  response = await fetch('https://source.unsplash.com/random');
  blob = await response.blob();
  let imglink = (response['url'].substring(0, response['url'].indexOf('?')));
  img.src = imglink+"?h=" + window.innerHeight;
  
  let imgWrapper = document.querySelector('.imgWrapper');
  let buttonGetPhoto = document.querySelector('.button');
  imgWrapper.append(buttonGetPhoto);
  buttonGetPhoto.textContent = "Get another Image";
  buttonGetPhoto.classList.remove('center');
  buttonGetPhoto.classList.add('button__getImage'); 
  
  let button = document.createElement("button");
  button.classList.add('button', 'button__saveImage');
  button.innerHTML = "Save";
  button.addEventListener ("click", ()=>saveBlobAsFile(blob));
  imgWrapper.append(button);

  let shareButton = document.createElement("button");
  shareButton.classList.add('button', 'shareButton');
  shareButton.innerHTML = "Share";
  shareButton.addEventListener ("click", ()=>showModalContent());
  imgWrapper.append(shareButton);
  
}

function showModalContent(){
  let shareButtons = document.querySelector('.share__buttons');

  modal.style.display = "block";

  let sharelinkFb = document.createElement("a");
  sharelinkFb.href = "https://www.facebook.com/sharer/sharer.php?u=" + response.url;
  sharelinkFb.target = "_blank";
  sharelinkFb.appendChild(document.getElementById('fbIcon'));
  shareButtons.append(sharelinkFb);

  let sharelinkwa = document.createElement("a");
  sharelinkwa.href = "https://www.facebook.com/sharer/sharer.php?u=" + response.url;
  sharelinkwa.target = "_blank";
  sharelinkwa.appendChild(document.getElementById('waIcon'));
  shareButtons.append(sharelinkwa);

  let sharelinkTg = document.createElement("a");
  sharelinkTg.href = "https://www.facebook.com/sharer/sharer.php?u=" + response.url;
  sharelinkTg.target = "_blank";
  sharelinkTg.appendChild(document.getElementById('tgIcon'));
  shareButtons.append(sharelinkTg);

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

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}