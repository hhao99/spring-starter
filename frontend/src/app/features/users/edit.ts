import { Component, inject, computed, linkedSignal} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { form, FormField, FormRoot } from '@angular/forms/signals'
import { UserService} from './user.service';
import type { User } from './user.service'
@Component({
  selector: 'user-edit',
  imports: [ FormField, FormRoot],
  template: `
    <div>
      <h3>user detail for id: {{userModel().id}}</h3>
      <form [formRoot]="userForm">
      <div>
        <label>
          Name: <input type='text' [formField]="userForm.name" />
        </label>
      </div>
        <button type='submit'>save</button>
</form>
    </div>
  `
})
export class UserEdit {
  readonly route = inject(ActivatedRoute)
  readonly router = inject(Router)
  readonly userService = inject(UserService)

  readonly userId = computed( ()=> {
    return Number.parseInt(this.route.snapshot.paramMap.get('id')|| '0', 10)
  })
  userModel = linkedSignal<User>(()=> {
    const user = this.userService.users().find( (user:User)=> user.id === this.userId() )
    return user ?? { id: 0, name: ''}
  })
  userForm = form(this.userModel,{
    submission: {
      action: async (field)=> {
        this.userService.updateUser(field().value())
        this.router.navigate(['/users'])
      }
    }
  })

  
}
