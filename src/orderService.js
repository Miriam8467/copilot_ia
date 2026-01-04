/**
 * Calcula o total de um pedido aplicando um desconto percentual.
 *
 * Gerado com o prompt:
 * "Crie uma função em JavaScript que calcule o total de um pedido
 * aplicando um desconto percentual e valide valores inválidos."
 */
function calcularTotalPedido(valorTotal, percentualDesconto) {
  if (
    valorTotal < 0 ||
    percentualDesconto < 0 ||
    percentualDesconto > 100
  ) {
    throw new Error("Valores inválidos para cálculo do pedido");
  }

  const desconto = (valorTotal * percentualDesconto) / 100;
  return valorTotal - desconto;
}

module.exports = { calcularTotalPedido };
