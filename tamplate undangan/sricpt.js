// RSVP Form Submission
document
  .getElementById("rsvpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value;

    // Simpan data atau kirim ke server
    console.log("Nama:", name);
    console.log("Email:", email);
    console.log("Jumlah Tamu:", guests);
    console.log("Pesan:", message);

    alert("Terima kasih telah mengkonfirmasi kehadiran Anda!");
    document.getElementById("rsvpForm").reset();
  });

// Countdown Timer (Opsional)
const weddingDate = new Date("December 25, 2023 09:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
      <p>${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik</p>
  `;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Acara Telah Dimulai!";
  }
}, 1000);
