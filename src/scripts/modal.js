function showModal(image, title) {
  const modal = document.getElementById("modal-container");
  const modalImage = document.getElementById("modal-image");
  modal.classList.remove("hidden");
  modal.classList.add(["flex"]);
  modal.classList.add(
    "opacity-100",
    "transition-opacity",
    "duration-500",
    "ease-in-out",
  );

  modalImage.src = image;
  modalImage.alt = title;
}

function closeModal() {
  const modal = document.getElementById("modal-container");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
