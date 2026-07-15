package rp.blog 
import org.springframework.stereotype.Service

@Service
class UserService(private val repo: UserRepository) {
    fun findAll() = repo.findAll()
    fun create(user: User) = repo.save(user)
    
    fun update(id: Long, user: User):User? {
        return if(repo.existsById(id)) {
            val existingUser = repo.findById(id)
            val userToBeUpdated = existingUser.get().copy( 
                name = user.name
            )
            repo.save(userToBeUpdated)
        }
        else {
            null
        }
    }
}