import { Component, OnInit } from '@angular/core';

interface HTMLInputEvent extends Event{
  target:HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  
   file:File;
   photoSelected: String | ArrayBuffer;
  
  constructor() { }

  ngOnInit(): void {
  }

  onPhotoSelected(event:HTMLInputEvent):void{
    if (event.target.files  && event.target.files[0]){
        this.file = event.target.files[0]; 
        //images
        const reader = new FileReader();
        reader.onload = e =>  this.photoSelected= reader.result;
        reader.readAsDataURL(this.file);
    }
  }
  uploadPhoto(nombre:HTMLInputElement){
     console.log(nombre.value)
  }
    

}
