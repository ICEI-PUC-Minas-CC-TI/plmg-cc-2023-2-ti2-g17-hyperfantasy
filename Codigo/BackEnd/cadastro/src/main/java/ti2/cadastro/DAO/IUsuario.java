package ti2.cadastro.DAO;

import org.springframework.data.repository.CrudRepository;

import ti2.cadastro.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario,Integer> {

}
