package ti2.personagem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ti2.personagem.DAO.IPersonagem;
import ti2.personagem.model.Personagem;

@RestController
@RequestMapping("/personagens")
@CrossOrigin("*")
public class PersonagemController  {
	@Autowired
	private IPersonagem dao;
	
	@GetMapping
	public List <Personagem> listaPersonagens() {
		return (List<Personagem>)dao.findAll();
	}
	
	@GetMapping("/{username}")
	public ResponseEntity<Personagem> getPersonagemById(@PathVariable Integer id) {
	    java.util.Optional<Personagem> personagem = dao.findById(id);
	    if (personagem.isPresent()) {
	        return ResponseEntity.ok(personagem.get());
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	@PostMapping
	public ResponseEntity<Personagem> criarUsuario(@RequestBody Personagem personagem){
		Personagem personagemNovo=dao.save(personagem);
		return ResponseEntity.status(HttpStatus.CREATED).body(personagemNovo);
		
	}
}
