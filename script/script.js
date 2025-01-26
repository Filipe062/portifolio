// Mensagem de boas-vindas
document.addEventListener("DOMContentLoaded", () => {
    alert("Bem-vindo ao portfólio de Luiz Filipe! Explore e conheça mais sobre meus projetos.");
  });
  
  // Botão de voltar ao topo
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "⬆️ Topo";
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.padding = "10px 15px";
  backToTopButton.style.backgroundColor = "#333";
  backToTopButton.style.color = "#fff";
  backToTopButton.style.border = "none";
  backToTopButton.style.borderRadius = "5px";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.display = "none";
  document.body.appendChild(backToTopButton);
  
  // Mostrar botão ao rolar a página
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  // Rolar para o topo ao clicar no botão
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  