import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:any;
  public password:any;
  public name:any;

  constructor(public fireService:FireserviceService) { }

  ngOnInit() {
  }

  signup(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          uid:res.user.uid
        }
        this.fireService.saveDetails(data).then(res=>{
          alert('Account Created!');
        })
      }
    },err=>{
      alert(err.message)
      console.log(err);
      
    })
  function subscribe(arg0: (res: any) => void) {
    throw new Error('Function not implemented.');
  }
  }
}