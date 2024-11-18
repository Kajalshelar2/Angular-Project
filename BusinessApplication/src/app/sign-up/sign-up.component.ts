import { Component } from '@angular/core';
import { BusinessService } from '../Services/business.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private busSer:BusinessService,private router:Router){}

  register(registerForm:any){
    this.busSer.addBusiness(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        this.router.navigate(["/dashboard"]);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
