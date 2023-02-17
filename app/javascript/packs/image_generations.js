document.addEventListener("DOMContentLoaded", () => {
  let loading = false;
  const loader = document.getElementById("loading");

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (loading == false) {
      loading = true;
      loader.style.display = "flex";
      const formData = new FormData(event.target);
      fetch("/image_generation", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const resultDiv = document.querySelector("#result");
          resultDiv.innerHTML = `<img src="${data.data}" />`;
          loader.style.display = "none";
        })
        .catch((error) => {
          console.error("erro:", error);
          loader.style.display = "none";
        });
      
    }
  });
});
