fetch("/api/env")
  .then(res => res.json())
  .then(data => {
    document.getElementById("banner").innerText = data.message;
  })
  .catch(err => {
    console.error("Erro ao buscar variável:", err);
  });
