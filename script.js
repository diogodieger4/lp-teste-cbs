// Botão de CTA que rola até a seção "sobre"
document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
});

// Simulação de envio do formulário
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  e.target.reset();
});
