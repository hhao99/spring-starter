import { Service, computed, signal, inject } from "@angular/core";
import { HttpClient, httpResource} from '@angular/common/http'
export interface User {
    id: number | undefined
    name: string
}
export interface NewUser {
    name: string
}

@Service()
export class UserService {
    private http = inject(HttpClient)
    private base_url = "http://localhost:8080/api/v1/users"
    private version = signal<number>(0)
    private readonly usersResource = httpResource<User[]>( () => {
        this.version()
        return this.base_url
    })
    readonly users = computed(()=> this.usersResource.value() ??[])
    readonly isLoading = computed( ()=> this.usersResource.isLoading())
    readonly error = computed( ()=> this.usersResource.error())
    reloadUsers() {
        this.version.update( v=> v+1)
    }
    addUser(newuser: NewUser) {
        const user: User = { id: undefined, name: newuser.name}
        
        this.http.post<User>(this.base_url,user).subscribe({
            next: (savedUser: User) => {
                this.reloadUsers()
            },
            error: (err) => {
                console.log(err)
                this.usersResource.reload()
            },
            complete: ()=> {
                console.log("user saved")
            }
        })
    }


}

