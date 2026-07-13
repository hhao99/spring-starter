package rp.blog

import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository

@Repository
interface UserRepository: CrudRepository<User, Long> {
    fun findByName(name: String): User?
}