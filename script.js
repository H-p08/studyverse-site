// StudyVerse JavaScript Script
console.log("📘 StudyVerse script loaded");

// Navigation Handling
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      sections.forEach(sec => {
        sec.style.display = sec.id === target ? "block" : "none";
      });

      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Default section
  document.querySelector(".menu-item").click();

  // Load PDFs (mocked or from JSON)
  loadPDFs();
});

function loadPDFs() {
  const pdfListContainer = document.getElementById("pdf-list");
  if (!pdfListContainer) return;

  const pdfs = [
    {
      title: "📘 Class 10 Science Notes",
      url: "https://drive.google.com/file/d/1-XXXXXXX/view?usp=sharing",
      premium: false
    },
    {
      title: "📗 JEE Main Physics Formula Sheet",
      url: "https://drive.google.com/file/d/1-YYYYYYY/view?usp=sharing",
      premium: true
    },
    {
      title: "📙 NEET Biology NCERT Booster",
      url: "https://drive.google.com/file/d/1-ZZZZZZZ/view?usp=sharing",
      premium: true
    },
    {
      title: "📕 Free Comic - Spider-Man",
      url: "https://drive.google.com/file/d/1-ABCD123/view?usp=sharing",
      premium: false
    }
  ];

  pdfListContainer.innerHTML = "";

  pdfs.forEach(pdf => {
    const card = document.createElement("div");
    card.className = "pdf-card";

    card.innerHTML = `
      <h3>${pdf.title}</h3>
      <p>Status: <strong>${pdf.premium ? "🔒 Premium" : "🆓 Free"}</strong></p>
      ${
        pdf.premium
          ? `<button class="unlock-btn" onclick="showUnlockDialog('${pdf.title}')">Unlock Now</button>`
          : `<a href="${pdf.url}" target="_blank"><button>Download</button></a>`
      }
    `;
    pdfListContainer.appendChild(card);
  });
}

// Unlock dialog (Mocked UPI flow)
function showUnlockDialog(title) {
  const upi = "8809370180@ptyes";
  const unlockDiv = document.getElementById("unlock-dialog");
  unlockDiv.innerHTML = `
    <h3>Unlock: ${title}</h3>
    <p>Pay ₹10–₹20 via UPI to: <strong>${upi}</strong></p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=${upi}&pn=StudyVerse&am=10&cu=INR" width="200" alt="QR Code" />
    <p>Upload screenshot to @AlphaGamaBeetaBot or email us to unlock.</p>
    <button onclick="closeUnlock()">Close</button>
  `;
  unlockDiv.style.display = "block";
}

function closeUnlock() {
  const unlockDiv = document.getElementById("unlock-dialog");
  unlockDiv.style.display = "none";
}

// Admin Toggle (only for internal use)
function toggleAdminMode() {
  const isAdmin = prompt("Enter admin password:");
  if (isAdmin === "admin123") {
    alert("✅ Admin Mode Activated!");
    document.getElementById("admin-section").style.display = "block";
  } else {
    alert("❌ Incorrect password.");
  }
}
