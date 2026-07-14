import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service'
@Component({
  selector: 'user-list',
  imports: [],
  template: `
    <div>
      <h3>user list</h3>
      <div>
        <ul>
          @for( user of this.userService.users(); track user.id) {
            <li>{{user.id}} = {{user.name}}</li>
          }
        </ul>
        </div>
    </div>
  `
})
export class UserList {
  readonly userService = inject(UserService)

}
