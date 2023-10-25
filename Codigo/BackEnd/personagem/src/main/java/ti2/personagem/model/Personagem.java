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
	@Column(name = "vidamax")
	private int vidaMax;
	@Column(name = "vidaatual")
    private int vidaAtual;
	@Column(name = "sanidadeatual")
    private int sanidadeAtual;
	@Column(name = "sanidademax")
    private int sanidadeMax;
    @Column(name="jogador",length=100,nullable=true)
    private String jogador;
    private String ocupacao;
    private int nivel;
    private String sexo;
    @Column(name = "localresidencia")
    private String localResidencia;
    private String classe;
    private String habilidades;
    private int magia;
    private int mana;
    private String descricao;
    private int forca;
    private int agilidade;
    private int inteligencia;
    private int reflexos;
    private String inventario;
    private String aparencia;
    private String historia;
    
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
	public int getVidaMax() {
		return vidaMax;
	}
	public void setVidaMax(int vidaMax) {
		this.vidaMax = vidaMax;
	}
	public int getVidaAtual() {
		return vidaAtual;
	}
	public void setVidaAtual(int vidaAtual) {
		this.vidaAtual = vidaAtual;
	}
	public int getSanidadeAtual() {
		return sanidadeAtual;
	}
	public void setSanidadeAtual(int sanidadeAtual) {
		this.sanidadeAtual = sanidadeAtual;
	}
	public int getSanidadeMax() {
		return sanidadeMax;
	}
	public void setSanidadeMax(int sanidadeMax) {
		this.sanidadeMax = sanidadeMax;
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
	public String getLocalResidencia() {
		return localResidencia;
	}
	public void setLocalResidencia(String localResidencia) {
		this.localResidencia = localResidencia;
	}
	public String getClasse() {
		return classe;
	}
	public void setClasse(String classe) {
		this.classe = classe;
	}
	public String getHabilidades() {
		return habilidades;
	}
	public void setHabilidades(String habilidades) {
		this.habilidades = habilidades;
	}
	public int getMagia() {
		return magia;
	}
	public void setMagia(int magia) {
		this.magia = magia;
	}
	public int getMana() {
		return mana;
	}
	public void setMana(int mana) {
		this.mana = mana;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
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
	public String getInventario() {
		return inventario;
	}
	public void setInventario(String inventario) {
		this.inventario = inventario;
	}
	public String getAparencia() {
		return aparencia;
	}
	public void setAparencia(String aparencia) {
		this.aparencia = aparencia;
	}
	public String getHistoria() {
		return historia;
	}
	public void setHistoria(String historia) {
		this.historia = historia;
	}
	
}

