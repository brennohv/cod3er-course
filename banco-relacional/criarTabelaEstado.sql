-- Criando a tabela estado!
-- AUTO_INCREMENT  isso significa se voce nao passar o valor, ele vai gerar o valor inteiro e vai incrementando a cada nova inserção, que é uma chave sintetica 
-- abro os parenteses para definir as colunas e regras
-- UNSIGNED sem sinal 
-- NOT NULL nao aceita null 
-- ENUM ( so aceita os valores pre-definidos dentro do parentese )
-- UNIQUE KEY nao aceita repetição 


create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);
