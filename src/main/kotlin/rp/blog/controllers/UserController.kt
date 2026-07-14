package rp.blog 
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.CrossOrigin


@RestController
@CrossOrigin(origins=["http://localhost:4200"])
@RequestMapping("/api/v1/users")
class UserController(private val service: UserService){
    @GetMapping
    fun index() = service.findAll()
    
    @PostMapping
    fun create(@RequestBody user: User) = service.create(user)
}