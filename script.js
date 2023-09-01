let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () => {
  localStorage.setItem('cookiesAccepted', 'true');
  hideCookieBanner();
});

const checkCookie = () => {
  if (hasUserAcceptedCookies()) {
    hideCookieBanner();
  } else {
    showCookieBanner();
  }
};

const hideCookieBanner = () => {
  popUp.style.opacity = "0";
  setTimeout(() => {
    popUp.style.display = "none";
  }, 500);
};

const showCookieBanner = () => {
  popUp.style.display = "block";
  setTimeout(() => {
    popUp.style.opacity = "1";
  }, 100);
};

window.onload = () => {
    checkCookie();
};

// Prüfen, ob der Benutzer bereits zugestimmt hat
function hasUserAcceptedCookies() {
    return localStorage.getItem('cookiesAccepted') === 'true';
}
