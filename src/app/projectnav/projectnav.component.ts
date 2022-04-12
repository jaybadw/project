import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,MinLengthValidator,Validators } from '@angular/forms';


@Component({
  selector: 'app-projectnav',
  templateUrl: './projectnav.component.html',
  styleUrls: ['./projectnav.component.css']
})
export class ProjectnavComponent implements OnInit {
  showModal: boolean = false
  
  showForm(){
    if(this.showModal){
      this.showModal =  false;
    }else if(!this.showModal){
      this.showModal = true;
    }
    console.log(this.showModal)
  }
  closeModal(){
    if(this.showModal){
      this.showModal = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
