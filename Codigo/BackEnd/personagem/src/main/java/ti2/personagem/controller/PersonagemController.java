package ti2.personagem.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ti2.personagem.DAO.IPersonagem;
import ti2.personagem.model.Personagem;

@RestController
@RequestMapping("/personagem")
@CrossOrigin("*")
public class PersonagemController  {
	@Autowired
	private IPersonagem dao;
	
	@GetMapping
	public List <Personagem> listaPersonagens() {
		return (List<Personagem>)dao.findAll();
	}
	
	 @GetMapping("/{jogador}")
	    public List<Personagem> listaPersonagens(@PathVariable String jogador) {
	        List<Personagem> personagens = new ArrayList<>();
	        
	        // Encontrar todos os personagens para o jogador específico
	        Collection<? extends Personagem> personagensDoJogador = dao.findByJogador(jogador);
	        
	        // Adicionar os personagens à lista
	        personagens.addAll(personagensDoJogador);
	        
	        // Retornar a lista de personagens
	        return personagens;
	    }
	 @GetMapping("/busca/{id}")
	    public Optional<Personagem> BuscaId(@PathVariable Integer id) {
	        Optional<Personagem> personagem = dao.findById(id);
	      
	        return personagem;
	    }
	@PostMapping
	public ResponseEntity<Personagem> criarPersonagem(@RequestBody Personagem personagem){
		Personagem personagemNovo=dao.save(personagem);
		return ResponseEntity.status(HttpStatus.CREATED).body(personagemNovo);
		
	}
	@DeleteMapping("/excluir/{id}")
	public ResponseEntity<Void> deletarPersonagem(@PathVariable Integer id) {
	    
	    Optional<Personagem> personagemOptional = dao.findById(id);

	    if (personagemOptional.isPresent()) {
	        dao.delete(personagemOptional.get());
	        return ResponseEntity.noContent().build();
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	@PutMapping("/{id}")
	public ResponseEntity<Personagem> atualizarPersonagem(@PathVariable Integer id, @RequestBody Personagem personagemAtualizado) {
	    Optional<Personagem> personagemOptional = dao.findById(id);

	    if (personagemOptional.isPresent()) {
	        personagemAtualizado.setId(id);
	        Personagem personagemAtualizadoEntity=dao.save(personagemAtualizado);
	        return ResponseEntity.ok(personagemAtualizadoEntity);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
}
