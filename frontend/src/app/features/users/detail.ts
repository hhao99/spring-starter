import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService
 } from './user.service';
import type { User } from './user.service'
@Component({
  selector: 'user-detail',
  imports: [RouterLink],
  template: `
    <div>
      <h3>user detail</h3>
      <div>
        <h3>id: {{user?.id}}</h3>
        <h1>name: {{user?.name}}</h1>
      </div>
        <a [routerLink]="['/user/',user?.id,'edit']">edit</a>
    </div>
  `
})
export class UserDetail{
  readonly user: User| undefined
  readonly route = inject(ActivatedRoute)
  readonly userService = inject(UserService)

  constructor() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get("id")!) 
    this.user = this.userService.users().find( (u) => u.id === id)
  }
}
