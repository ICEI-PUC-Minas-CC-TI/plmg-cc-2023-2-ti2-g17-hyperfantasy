
--Criaçao da tabela Personagem pertencente ao esquema "trabalhoi"

CREATE TABLE trabalhoi.personagem(
    PersonagemID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Jogador VARCHAR(100),
    LocalNascimento VARCHAR(100),
    LocalResidencia VARCHAR(100),
    Nivel INTEGER,
    Inventario VARCHAR(100),
    Aparencia VARCHAR(100),
    Sanidade INTEGER,
    Ocupacao VARCHAR(100),
    Historia VARCHAR(100),
    Forca INTEGER,
    Agilidade INTEGER,
    Inteligencia INTEGER,
    Reflexos INTEGER,
    Vida INTEGER,
    Sexo VARCHAR(100),

    UserID INTEGER, -- Chave estrangeira para fazer referência ao usuário
    FOREIGN KEY (UserID) REFERENCES trabalhoi.usuario(UserID)
);

