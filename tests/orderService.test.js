/**
 * Testes unitários gerados com o prompt:
 * "Crie testes unitários usando Jest para a função calcularTotalPedido,
 * cobrindo cenários válidos e inválidos."
 */

const { calcularTotalPedido } = require("../src/orderService");

describe("calcularTotalPedido", () => {
  test("aplica corretamente o desconto percentual", () => {
    const resultado = calcularTotalPedido(200, 10);
    expect(resultado).toBe(180);
  });

  test("retorna o valor integral quando o desconto é zero", () => {
    const resultado = calcularTotalPedido(150, 0);
    expect(resultado).toBe(150);
  });

  test("lança erro quando o valor total é negativo", () => {
    expect(() => calcularTotalPedido(-100, 10)).toThrow();
  });

  test("lança erro quando o percentual de desconto é inválido", () => {
    expect(() => calcularTotalPedido(100, -5)).toThrow();
    expect(() => calcularTotalPedido(100, 150)).toThrow();
  });
});
