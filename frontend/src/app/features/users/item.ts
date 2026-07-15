import { Component, input, inject } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router'
import type { User } from './user.service'
import { UserService } from './user.service';

@Component({
  selector: 'user-item',
  imports: [RouterLink],
  template: `
    <div>
      <a [routerLink]="['/user',user().id]">
        {{ user().id}} - {{user().name}}
      </a>
      
    </div>
  `
})
export class UserItem{
  readonly user = input.required<User>()
}
