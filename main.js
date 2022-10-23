const btn = document.getElementById("btn");

btn.addEventListener("click", async (e) => {
  const pickerOpts = {
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  const fileData = await fileHandle.getFile();

  let form_data = new FormData();
  form_data.append("image", fileData);

  // for the preview
  let preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(fileData);
  preview.onload = function () {
    URL.revokeObjectURL(preview.src); // free memory
  };

  fetch("upload.php", {
    method: "POST",
    body: form_data,
  })
    .then((res) => res.text())
    .then((res) => {
      res == 200
        ? console.log("Image uploaded")
        : console.log(`Image can't be uploaded.Error:${res}`);
    })
    .catch(() => {
      console.log("error while making request and sending image");
    });
});
