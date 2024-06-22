async function deleteProduto(id) {
  try {
    if (true) {
      await fetch(`https://jsonserver-jrmn.onrender.com/Produtos/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    }

    const produtoToDelete = document.getElementById(`produto-${id}`);
    if (produtoToDelete) {
      produtoToDelete.remove();
    }
  } catch (error) {
    console.error("Erro ao deletar produto ", error);
  }
}
