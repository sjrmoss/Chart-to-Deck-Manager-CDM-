// CDM website wiring (static, GitHub Pages-safe)
// Update these when your Store listing is live.
const STORE_URL = "https://apps.microsoft.com/store/detail/CHANGEME";

// Purchase flows (no modal). These open your email so you can invoice / send license key.
// If you later add a PayPal/checkout link, replace MAILTO_* with that URL.
const MAILTO_INDIVIDUAL = "mailto:sj.moss@comcast.net?subject=CDM%20Individual%20License%20(%2420)&body=Hi%20Steven%2C%0D%0A%0D%0AI%27d%20like%20to%20purchase%20a%20CDM%20Individual%20license.%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0AQuantity%3A%201%0D%0A%0D%0AThanks!";
const MAILTO_ENTERPRISE = "mailto:sj.moss@comcast.net?subject=CDM%20Enterprise%20License%20(%24200%20for%2010%2B)&body=Hi%20Steven%2C%0D%0A%0D%0AI%27d%20like%20to%20purchase%20a%20CDM%20Enterprise%20license.%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0ASeat%20count%3A%0D%0A%0D%0AThanks!";

function wire(){
  const storeBtn = document.querySelector("[data-store-btn]");
  if (storeBtn){
    storeBtn.addEventListener("click", (e)=>{ e.preventDefault(); window.open(STORE_URL, "_blank", "noopener"); });
  }

  const ind = document.querySelector("[data-buy-individual]");
  if (ind){
    ind.addEventListener("click", (e)=>{ e.preventDefault(); window.location.href = MAILTO_INDIVIDUAL; });
  }

  const ent = document.querySelector("[data-buy-enterprise]");
  if (ent){
    ent.addEventListener("click", (e)=>{ e.preventDefault(); window.location.href = MAILTO_ENTERPRISE; });
  }
}

document.addEventListener("DOMContentLoaded", wire);
