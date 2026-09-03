document.getElementById("year").textContent=new Date().getFullYear();
document.querySelector(".menu").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=e.currentTarget, d=new FormData(f);
  const subject=encodeURIComponent("طلب تصميم من موقع Muad Alwahidi");
  const body=encodeURIComponent(`الاسم: ${d.get("name")}\nالبريد: ${d.get("email")}\n\n${d.get("message")}`);
  window.location.href=`mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
});
