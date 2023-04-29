import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    constructor(public books_service:BooksService) {}

    ngOnInit(): void {
      this.resetForm();
    }

    resetForm(form?:NgForm){
      if(form!=null)
      this.books_service.formData={
        Id:0,
        BookCode:'',
        BookName:'',
        BookCount:0
      }
    }

    OnSubmit(form:NgForm){
      console.log("Clicked");
      this.InsertBooks();
    }

    InsertBooks(){
      this.books_service.insertBooks().subscribe(
        (res:any)=>{
          console.log("sucess");
        },
        err=>{
          console.log("failed");
          console.log(err);
        }
      )
    }
}
