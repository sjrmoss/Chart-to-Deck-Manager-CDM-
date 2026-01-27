// CDM website link config
// Replace msStoreUrl when your Microsoft Store listing is live.
const CDM = {
  // Placeholder that still works (opens Microsoft Store web). Replace later with your real listing URL.
  msStoreUrl: "https://www.microsoft.com/store/apps/",

  // PayPal "Buy Now" style links using your PayPal recipient email.
  // These work today and can be replaced later with PayPal buttons, a checkout page, or your Store listing.
  paypalIndividualUrl:
    "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sj.moss%40comcast.net&item_name=Chart%20to%20Deck%20Manager%20(CDM)%20-%20Individual%20License&amount=20&currency_code=USD",
  paypalEnterpriseUrl:
    "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sj.moss%40comcast.net&item_name=Chart%20to%20Deck%20Manager%20(CDM)%20-%20Enterprise%20License%20(10%2B%20users)&amount=200&currency_code=USD",
};

function wireLinks() {
  document.querySelectorAll("[data-ms-store]").forEach((a) => {
    a.setAttribute("href", CDM.msStoreUrl);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-paypal-individual]").forEach((a) => {
    a.setAttribute("href", CDM.paypalIndividualUrl);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-paypal-enterprise]").forEach((a) => {
    a.setAttribute("href", CDM.paypalEnterpriseUrl);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  wireLinks();
});
