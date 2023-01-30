let blob;
let response;
let imglink

async function getPhoto() {
  let img = document.querySelector('.randomImage');
  
  response = await fetch('https://source.unsplash.com/random');
  blob = await response.blob();
  imglink = (response['url'].substring(0, response['url'].indexOf('?')));
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
  shareButton.innerHTML = "Share via Telegram";
  shareButton.addEventListener("click",()=>{
    location.href="tg://msg_url?url=" + imglink;
  })
  imgWrapper.append(shareButton);
  
}

function saveBlobAsFile(blob, fileName) {
  var reader = new FileReader();

  reader.onloadend = () => {
    var base64 = reader.result;
    var link = document.createElement("a");

    document.body.appendChild(link);

    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
  };

  reader.readAsDataURL(blob);
}
