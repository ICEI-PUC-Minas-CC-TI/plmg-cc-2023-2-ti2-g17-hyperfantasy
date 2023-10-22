package ti2.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import ti2.cadastro.DAO.IUsuario;
import ti2.cadastro.model.Usuario;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController  {
	@Autowired
	private IUsuario dao;
	
	@GetMapping
	public List <Usuario> listaUsuarios() {
		return (List<Usuario>)dao.findAll();
	}
	@GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Integer id) {
        java.util.Optional<Usuario> usuario = dao.findById(id);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@PostMapping
	public Usuario criarUsuario(@RequestBody Usuario usuario){
		Usuario usuarioNovo=dao.save(usuario);
		return usuarioNovo;
	}
	
	@PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuarioAtualizado) {
        if (dao.existsById(id)) {
            usuarioAtualizado.setId(id);
         
            Usuario usuarioAtualizadoEntity = dao.save(usuarioAtualizado);
            return ResponseEntity.ok(usuarioAtualizadoEntity);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletarUsuario(@PathVariable Integer id) {
		if (dao.existsById(id)) {
		    dao.deleteById(id);
		    
		    dao.deleteById(id);
		   
		    return ResponseEntity.noContent().build();
	    }        
		else return ResponseEntity.notFound().build();
	}

}
