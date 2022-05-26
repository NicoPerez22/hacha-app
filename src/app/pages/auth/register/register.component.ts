import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/service/auth.service';
import { UserModel } from '../../../../shared/model/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel: UserModel;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  userForm = this.fb.group({
    username: new FormControl("", [
      Validators.required
    ]),
    email: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("", [
      Validators.required
    ])
  })

  ngOnInit(): void {
  }

  onSubmit(){
    const user = this.prepareJuicioForm()
    console.log(user)
    this.authService.registerUser(user).subscribe((res) => {
      console.log(res)
    })

  }

  prepareJuicioForm(){
    const formModel = this.userForm.value;

    const saveUserModel = {
      username: formModel.username,
      email: formModel.email,
      password: formModel.password
    };

    return saveUserModel;
  }

  get username(): any {
    return this.userForm.get('username');
  }

  get email(): any {
    return this.userForm.get('email');
  }

  get password(): any {
    return this.userForm.get('password');
  }
}
