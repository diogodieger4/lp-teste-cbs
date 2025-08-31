fetch("/api/env")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("banner").innerText = data.message;
  })
  .catch((err) => {
    console.error("Erro ao buscar variável:", err);
  });

fetch("https://api.cbsoficial.com.br/users")
  .then((res) => res.json()) // ✅ corrigido
  .then((users) => {
    const tbody = document.querySelector("#usersTable tbody");
    tbody.innerHTML = "";

    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name || "-"}</td>
        <td>${user.email || "-"}</td>
        <td>${user.phone || "-"}</td>
        <td>${new Date(user.created_at).toLocaleString("pt-BR")}</td>
      `;
      tbody.appendChild(tr); // ✅ agora adiciona na tabela
    });
  })
  .catch((err) => {
    console.error("Erro ao buscar usuários", err);
  });
