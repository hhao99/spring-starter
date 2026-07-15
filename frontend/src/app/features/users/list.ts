import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { UserItem } from './item'
@Component({
  selector: 'user-list',
  imports: [UserItem],
  template: `
    <div>
      <h3>user list</h3>
      <div>
        <ul>
          @for( user of this.userService.users(); track user.id) {
            <li>
              <user-item [user]="user" />
            </li>
          }
        </ul>
        </div>
    </div>
  `
})
export class UserList {
  readonly userService = inject(UserService)

}
