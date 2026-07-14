import { Component, signal, inject } from '@angular/core';
import { form,FormField, FormRoot } from '@angular/forms/signals'
import { NewUser, UserService } from './user.service'
@Component({
  selector: 'user-new',
  imports: [FormRoot, FormField],
  template: `
    <div>
      <form [formRoot]="userForm">
        <label> Name:
        <input type='text' [formField]="userForm.name"/>
</label>
      </form>
      
    </div>
  `
})
export class UserNew {
  private readonly userService = inject(UserService)
  newUserModel = signal<NewUser>({
    name: ""
  })
  userForm = form(this.newUserModel, {
    submission: {
      action: async (field)=> {
        this.userService.addUser(field().value())
      }
    }
  })
}
