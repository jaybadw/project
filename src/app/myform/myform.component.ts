import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
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
