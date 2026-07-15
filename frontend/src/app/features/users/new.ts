import { Component, signal, inject } from '@angular/core';
import { form,FormField, FormRoot } from '@angular/forms/signals'
import { NewUser, UserService } from './user.service'

// material
import { MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'user-new',
  imports: [FormRoot, FormField,MatButtonModule,MatIconModule, MatInputModule, MatFormFieldModule],
  template: `
    <div>
      <form [formRoot]="userForm">
        <mat-form-field>
          <mat-label> Name:</mat-label>
          <input
            class="w-50 border-b-1" 
            matInput type='text' [formField]="userForm.name"/>
            @if(this.newUserModel().name !== '') {
              <button matSuffix matIconButton (click)="this.newUserModel.set({name: ''})">
                <mat-icon>close</mat-icon>
              </button>
            }
            <button matButton type='submit'>save</button>
          </mat-form-field>

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
