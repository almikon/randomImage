let blob;

async function getPhoto() {
    let img = document.getElementsByClassName("randomImage");
    //img.src = "https://source.unsplash.com/random?sig=" + Math.random();

    let response = await fetch('https://source.unsplash.com/random');
    blob = await response.blob();
    img.src = URL.createObjectURL(blob);
    document.getElementsByClassName("hidden").style.visibility = "visible";
    document.getElementsByClassName("ImageButton").textContent = "Get another random image";
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