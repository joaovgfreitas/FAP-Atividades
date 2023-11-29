SELECT * FROM Transacoes;
SELECT TransacoesID, DataTransacao, Valores 
	AS ID_Transacao, Data, Valor;
SELECT * FROM Transacoes WHERE valor > 100;
SELECT * FROM Transacao ORDER BY Valor DESC;
SELECT AVG(Valor) AS MediaValor FROM Transacao;
SELECT MAX(Valor) AS ValorMaximo FROM Transacao;
SELECT MIN(Valor) AS ValorMinimo FROM Transacao;
SELECT COUNT(*) AS TotalTransacoes FROM Transacao;
SELECT Produto, AVG(valor) AS MediaValor FROM Transacao GROUP BY Produto;
SELECT Produto.Categoria, COUNT(Transacao.Produto) AS QuantidadeTotal,
	SUM(Transacao.Valor) AS ValorTotalVendas,
    AVG(Transacao.Valor) AS MediaValorPorTransacao
	FROM Transacao JOIN Produto ON Transacao.Produto = Produto.ProdutoID
	GROUP BY Produto.Categoria;