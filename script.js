let imageURL;
function takeUpload() {
  const fileInput = document.getElementById('filetaker');

  console.log(fileInput.files);
  const image = fileInput.files[0];

  const formData = new FormData;
  formData.append('image_file', image);
  formData.append('size', 'auto')

  const apikey = "T3mXQQpzxcKep48XEQEc2LJ4";

  fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'Post',
    headers: {
      'X-Api-Key': apikey,
    },
    body: formData
  })
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      console.log(blob);
      const url = URL.createObjectURL(blob);
      imageURL = url;
      const img = document.createElement('img');
      img.src = url;
      document.body.appendChild(img);
    })
    .catch();

  console.log("clicked");
}

function downloadFile() {
  let anchorELement = document.createElement('a');
  anchorELement.href = imageURL;
  anchorELement.download = 'bg-removal.png';
  document.body.appendChild(anchorELement);
  anchorELement.click();
  document.body.removeChild(a);
}