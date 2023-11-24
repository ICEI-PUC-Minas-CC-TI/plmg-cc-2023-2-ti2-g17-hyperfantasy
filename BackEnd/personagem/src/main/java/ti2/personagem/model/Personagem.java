package ti2.personagem.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Personagem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="nome",length=100,nullable=true)
	private String nome;
	
    @Column(name="jogador",length=100,nullable=true)
    private String jogador;
    
    private String ocupacao;
    private int nivel;
    private String sexo;
    
    @Column(name = "local_nascimento")
    private String localNascimento;
    
    @Column(name = "local_residencia")
    private String localResidencia;
    
    private String nomeC;
    private String habilidadeC;
    
    private String nomeM;
    private Integer manaM;

    private String descricaoM;
    private int forca;
    private int agilidade;
    private int inteligencia;
    private int reflexos;
    
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getJogador() {
		return jogador;
	}
	public void setJogador(String jogador) {
		this.jogador = jogador;
	}
	public String getOcupacao() {
		return ocupacao;
	}
	public void setOcupacao(String ocupacao) {
		this.ocupacao = ocupacao;
	}
	public int getNivel() {
		return nivel;
	}
	public void setNivel(int nivel) {
		this.nivel = nivel;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getLocalNascimento() {
		return localNascimento;
	}
	public void setLocalNascimento(String localNascimento) {
		this.localNascimento = localNascimento;
	}
	public String getLocalResidencia() {
		return localResidencia;
	}
	public void setLocalResidencia(String localResidencia) {
		this.localResidencia = localResidencia;
	}
	public String getNomeC() {
		return nomeC;
	}
	public void setNomeC(String nomeC) {
		this.nomeC = nomeC;
	}
	public String getHabilidadeC() {
		return habilidadeC;
	}
	public void setHabilidadeC(String habilidadeC) {
		this.habilidadeC = habilidadeC;
	}
	public String getNomeM() {
		return nomeM;
	}
	public void setNomeM(String nomeM) {
		this.nomeM = nomeM;
	}
	public Integer getManaM() {
		return manaM;
	}
	public void setManaM(Integer manaM) {
		this.manaM = manaM;
	}
	public String getDescricaoM() {
		return descricaoM;
	}
	public void setDescricaoM(String descricaoM) {
		this.descricaoM = descricaoM;
	}
	public int getForca() {
		return forca;
	}
	public void setForca(int forca) {
		this.forca = forca;
	}
	public int getAgilidade() {
		return agilidade;
	}
	public void setAgilidade(int agilidade) {
		this.agilidade = agilidade;
	}
	public int getInteligencia() {
		return inteligencia;
	}
	public void setInteligencia(int inteligencia) {
		this.inteligencia = inteligencia;
	}
	public int getReflexos() {
		return reflexos;
	}
	public void setReflexos(int reflexos) {
		this.reflexos = reflexos;
	}
}


