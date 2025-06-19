document.addEventListener("DOMContentLoaded", function () {
  // Menangani klik pada tombol resep
  const recipeButtons = document.querySelectorAll(".btn-resep");

  recipeButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // Mencegah link berpindah halaman
      event.preventDefault();

      // Menampilkan pesan pop-up
      alert("Fitur resep akan segera hadir! Nantikan update dari kami.");
    });
  });
  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid) {
    galleryGrid.addEventListener("click", function (event) {
      // Cek apakah yang diklik adalah link di dalam galeri
      const galleryLink = event.target.closest(".gallery-item");

      if (galleryLink) {
        event.preventDefault(); // Mencegah link terbuka di tab baru

        // Ambil URL gambar resolusi tinggi dari atribut href
        const imageUrl = galleryLink.getAttribute("href");

        // Tampilkan gambar menggunakan basicLightbox
        basicLightbox
          .create(
            `
                    <img src="${imageUrl}" alt="Tampilan diperbesar">
                `
          )
          .show();
      }
    });
  }
});
