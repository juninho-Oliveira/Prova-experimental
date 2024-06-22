
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "https://jsonserver-jrmn.onrender.com/Produtos";

  async function getProdutos() {
    try {
      const response = await fetch(url);
      //console.log(response);

      const dados = await response.json();
      //console.log(dados);

      dados.sort((a, b) => a.ValorProduto - b.ValorProduto);

      dados.forEach((produtos) => {
        const listasProdutos = document.getElementById("listaProdutos");

        //console.log(produtos.id)

        const tr = document.createElement("tr");
        const div = document.createElement("div");

        const editar = document.createElement('button');
        const excluir = document.createElement('button');

        div.classList.add("botoes");
        editar.classList.add("bi", "bi-pencil-square");
        excluir.classList.add("bi", "bi-trash3");

        excluir.addEventListener('click', function () {
          deleteProduto(produtos.id);
        })


        //realizar a criação das celulas de cada elemento
        const nomeProduto = document.createElement("td");
        nomeProduto.textContent = produtos.NomeProduto;

        const descicaoProduto = document.createElement("td");
        descicaoProduto.textContent = produtos.DescricaoProduto;


        const valorProduto = document.createElement("td");
        valorProduto.textContent = produtos.ValorProduto;

        tr.appendChild(nomeProduto);
        tr.appendChild(descicaoProduto);
        tr.appendChild(valorProduto)

        tr.appendChild(div);
        div.appendChild(excluir);

        listasProdutos.appendChild(tr);

      });

    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getProdutos();
});



