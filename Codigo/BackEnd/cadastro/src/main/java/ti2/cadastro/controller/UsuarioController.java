package ti2.cadastro.controller;

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
	
	@GetMapping("/{username}")
	public ResponseEntity<Usuario> getUsuarioByUsername(@PathVariable String username) {
	    java.util.Optional<Usuario> usuario = dao.findByUsername(username);
	    if (usuario.isPresent()) {
	        return ResponseEntity.ok(usuario.get());
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario usuario) {
	    
	    if (autenticar(usuario)) {
	        // Autenticação bem-sucedida
	        return ResponseEntity.ok(usuario);
	    } else {
	        // Autenticação falhou
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(usuario);
	    }
	}
	@PostMapping
	public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario){
		if(usuarioJaExiste(usuario.getUsername())){
			 return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
		}
		else {
			Usuario usuarioNovo=dao.save(usuario);
			return ResponseEntity.status(HttpStatus.CREATED).body(usuarioNovo);
		}
	}
	private boolean usuarioJaExiste(String username) {
		boolean existe=false;
	    List<Usuario> aux=listaUsuarios();
	    for(int i=0;i<aux.size();i++) {
	    	if(aux.get(i).getUsername().equals(username)) {
	    		existe=true;
	    		break;
	    	}
	    }
	    return existe; 
	}
	private boolean autenticar(Usuario usuario) {
		boolean sucesso=false;
	    List<Usuario> aux=listaUsuarios();
	    for(int i=0;i<aux.size();i++) {
	    	if(aux.get(i).getUsername().equals(usuario.getUsername())&&aux.get(i).getSenha().equals(usuario.getSenha())) {
	    		sucesso=true;
	    		break;
	    	}
	    }
	    return sucesso; 
	}
	@PutMapping("/{username}")
	public ResponseEntity<Usuario> atualizarUsuario(@PathVariable String username, @RequestBody Usuario usuarioAtualizado) {
	    List<Usuario> aux = listaUsuarios();
	    int id = -1;
	    for (int i = 0; i < aux.size(); i++) {
	        if (aux.get(i).getUsername().equals(username)) {
	            id = aux.get(i).getId();
	            break;
	        }
	    }
	    if (dao.existsById(id)) {
	        usuarioAtualizado.setId(id);
	        Usuario usuarioAtualizadoEntity = dao.save(usuarioAtualizado);
	        return ResponseEntity.ok(usuarioAtualizadoEntity);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	@DeleteMapping("/excluir/{username}")
	public ResponseEntity<Void> deletarUsuario(@PathVariable String username) {
	    
	    Optional<Usuario> usuarioOptional = dao.findByUsername(username);

	    if (usuarioOptional.isPresent()) {
	        dao.delete(usuarioOptional.get());
	        return ResponseEntity.noContent().build();
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

}
