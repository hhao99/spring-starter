import { Component } from '@angular/core';
import { UserNew } from './new'
import { UserList } from './list'
@Component({
  selector: 'app-user',
  imports: [UserNew, UserList],
  template: `
    <div>
      <h3>user app</h3>
      <user-new />
      <user-list />
      
    </div>
  `
})
export class UserApp {}
