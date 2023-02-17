document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loading");

  document.querySelector(".form_generation").addEventListener("submit", function (event) {
    event.preventDefault();
    let loading = loader.style.display === "flex";

    if (!loading) {
      loader.style.display = "flex";
      const formData = new FormData(event.target);
      fetch("/image_generation", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Failed to generate image");
          }
        })
        .then((data) => {
          const resultDiv = document.querySelector(".result");
          resultDiv.innerHTML = `<img src="${data.data}" />`;
        })
        .catch((error) => {
          console.error("erro:", error);
        })
        .finally(() => {
          loader.style.display = "none";
        });
    }
  });
});
