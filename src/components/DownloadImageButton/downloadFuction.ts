import domtoimage from "dom-to-image";

function downloadImage() {
  var node = document.getElementById("img") as HTMLElement;

  const scale = 3;

  const style = {
    transform: "scale(" + scale + ")",
    transformOrigin: "top left",
    width: node.offsetWidth + "px",
    height: node.offsetHeight + "px",
  };

  const param = {
    height: node.offsetHeight * scale,
    width: node.offsetWidth * scale,
    quality: 1,
    style,
  };

  domtoimage
    .toPng(node, param)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      downloadURI(dataUrl, "image.png");
    })
    .catch(function (error) {
      console.error("Deu ruim, se fudeu!", error);
    });
}

function downloadURI(uri: any, name: any) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();
}

export default downloadImage;
