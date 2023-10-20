
--Criaçao da tabela Magia pertencente ao esquema "trabalhoi"

CREATE TABLE trabalhoi.magia(
    Nome VARCHAR(50),
    Descriçao VARCHAR(100),
    Mana INTEGER,

    PersonagemID INTEGER, -- Chave estrangeira para fazer referência ao personagem
    FOREIGN KEY (UserID) REFERENCES trabalhoi.usuario(UserID)
);
