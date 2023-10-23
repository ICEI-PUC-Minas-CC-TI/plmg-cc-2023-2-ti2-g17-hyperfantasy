package ti2.cadastro.DAO;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import ti2.cadastro.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario,Integer> {
	Optional<Usuario> findByUsername(String username);
}
