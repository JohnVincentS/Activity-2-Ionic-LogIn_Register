import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public lcontroller:LoadingController) { }

  ngOnInit() {
  }
  register(){
    
    console.log("You successfuly register!")
  }
}
