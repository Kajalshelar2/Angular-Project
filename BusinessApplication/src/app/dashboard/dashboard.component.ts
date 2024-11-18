import { Component } from '@angular/core';
import { BusinessService } from '../Services/business.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private busSer:BusinessService,private router:Router){}

  busArray:any;

  update(id:any){
    this.router.navigate([`/update/${id}`]);
  }

  delete(id:any){
  
    if(confirm(`Do you want's to delete ${id} Record`)){
      this.busSer.deleteBusiness(id).subscribe(
        (resp)=>{
          console.log(resp);
          window.location.reload();
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }

  ngOnInit(){

    this.busSer.getBusiness().subscribe(
      (resp)=>{
        console.log(resp);
        this.busArray=resp;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
