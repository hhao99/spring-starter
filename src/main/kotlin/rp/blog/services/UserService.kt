package rp.blog 
import org.springframework.stereotype.Service

@Service
class UserService(private val repo: UserRepository) {
    fun findAll() = repo.findAll()
    fun create(user: User) = repo.save(user)
}