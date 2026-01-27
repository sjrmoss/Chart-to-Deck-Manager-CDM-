// CDM site config — replace these when ready
const CDM = {
  msStoreUrl: "https://www.microsoft.com/store/apps/<YOUR-APP-ID-HERE>",  // <-- replace later
  paypalIndividualUrl: "#", // <-- optional: put your PayPal purchase link here
  paypalEnterpriseUrl:  "#", // <-- optional: put your PayPal purchase link here
};

function $(sel){ return document.querySelector(sel); }

function wireLinks(){
  document.querySelectorAll('[data-ms-store]').forEach(a => a.setAttribute('href', CDM.msStoreUrl));
  document.querySelectorAll('[data-paypal-individual]').forEach(a => a.setAttribute('href', CDM.paypalIndividualUrl));
  document.querySelectorAll('[data-paypal-enterprise]').forEach(a => a.setAttribute('href', CDM.paypalEnterpriseUrl));
}

function openPurchase(){
  const bd = $("#purchaseBackdrop");
  if(!bd) return;
  bd.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePurchase(){
  const bd = $("#purchaseBackdrop");
  if(!bd) return;
  bd.style.display = "none";
  document.body.style.overflow = "";
}

function setupModal(){
  const openers = document.querySelectorAll('[data-open-purchase]');
  openers.forEach(b => b.addEventListener('click', (e)=>{ e.preventDefault(); openPurchase(); }));
  const closer = $("#purchaseClose");
  if(closer) closer.addEventListener('click', closePurchase);
  const bd = $("#purchaseBackdrop");
  if(bd) bd.addEventListener('click', (e)=>{ if(e.target === bd) closePurchase(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === "Escape") closePurchase(); });
}

function setupLicenseCopy(){
  const btn = $("#copyKey");
  const field = $("#licenseKey");
  if(!btn || !field) return;
  btn.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText(field.value);
      btn.textContent = "Copied";
      setTimeout(()=>btn.textContent="Copy", 1200);
    }catch{
      field.select();
      document.execCommand('copy');
      btn.textContent = "Copied";
      setTimeout(()=>btn.textContent="Copy", 1200);
    }
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  wireLinks();
  setupModal();
  setupLicenseCopy();
});
