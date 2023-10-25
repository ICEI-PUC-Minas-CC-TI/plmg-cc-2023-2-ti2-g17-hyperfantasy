package ti2.personagem.DAO;
import org.springframework.data.repository.CrudRepository;

import ti2.personagem.model.Personagem;

import java.util.List;
import java.util.Optional;

public interface IPersonagem extends CrudRepository<Personagem,Integer>{
	Optional<Personagem> findById(Integer id);
	List<Personagem> findAll();


}




