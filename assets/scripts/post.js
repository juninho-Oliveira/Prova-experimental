async function potsProdutos(nome, descricao, valor) {
  
  const nomeProduto = nome;
  const descricaoProduto = descricao;
  const valorProduto = valor;

    
  try {
    const dadosEnviados = {
      NomeProduto: nome,
      DescricaoProduto: descricao,
      ValorProduto: valor,
    };

    if (nomeProduto === "") {
      alert("Nome do produto obrigatório!");
    } else if (descricaoProduto === "") {
      alert("Descrição do produto obrigatório!");
    } else if (valorProduto === "") {
      alert("Valor do produto obrigatório!");
    } else {

      if (true) {
        await fetch(`https://jsonserver-jrmn.onrender.com/Produtos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosEnviados),
        });
      }

      atualizar();
    }
  } catch (error) {
    console.log(error);
  }
}

function adicionar(event) {
  event.preventDefault();
//alert("aqui")
  const nomeProduto = document.getElementById("nomeProduto").value;
  const descricaoProduto = document.getElementById("descricaoProduto").value;
  const valorProduto = document.getElementById("valorProduto").value;

  potsProdutos(nomeProduto, descricaoProduto, valorProduto);
  
}

function atualizar() {
  window.location.reload();
}
