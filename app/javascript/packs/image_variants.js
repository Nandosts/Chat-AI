import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("image-variants-form");
  const variantsList = document.getElementById("variants");
  let loading = false;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (loading === false) {
      loading = true
      const imageFile = document.getElementById("image-file-input").files[0];
      const token = process.env.OPENAI_API_KEY; // substitua pela sua chave de API

      try {
        const img = await loadImage(imageFile);
        const blob = await resizeImage(img, 512, 512, 512);

        const formData = new FormData();
        formData.append("image", blob);

        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        variantsList.innerHTML = "";

        const response = await axios.post(
          "https://api.openai.com/v1/images/variations",
          formData,
          axiosConfig
        );

        if (response.data.data) {
          response.data.data.forEach((variant) => {
            const variantImage = document.createElement("img");
            variantImage.src = variant.url;
            variantsList.appendChild(variantImage);
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
});

function loadImage(imageFile) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(imageFile);
  });
}

function resizeImage(img, maxWidth, maxHeight, dimension) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const { width, height } = img;
    const aspectRatio = width / height;

    let newWidth = dimension;
    let newHeight = dimension;

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Failed to resize image"));
      }
    }, "image/png");
  });
}
