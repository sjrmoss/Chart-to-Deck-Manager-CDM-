
// CDM one-page site wiring.
// Replace STORE_URL once your Microsoft Store listing is live.
const STORE_URL = "https://apps.microsoft.com/store/detail/REPLACE_ME";

function openStore() {
  window.open(STORE_URL, "_blank", "noopener,noreferrer");
}

function purchaseEmail(tier) {
  const subject = encodeURIComponent(`CDM License Purchase — ${tier}`);
  const body = encodeURIComponent(
`Hi Steven & Stacy,

I would like to purchase a CDM license.

Tier: ${tier}

(If you already have a preferred PayPal link or checkout flow, replace this email button with that URL.)

Thanks!`
  );
  window.location.href = `mailto:sj.moss@comcast.net?subject=${subject}&body=${body}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-action='store']").forEach(btn => btn.addEventListener("click", (e)=>{e.preventDefault(); openStore();}));
  document.querySelectorAll("[data-action='buy-individual']").forEach(btn => btn.addEventListener("click", (e)=>{e.preventDefault(); purchaseEmail("Individual ($20)");}));
  document.querySelectorAll("[data-action='buy-enterprise']").forEach(btn => btn.addEventListener("click", (e)=>{e.preventDefault(); purchaseEmail("Enterprise ($200)");}));
});
