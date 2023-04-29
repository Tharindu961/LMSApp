import { Injectable } from '@angular/core';
import { Books } from '../model/books.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly rootURL='https://localhost:port/api/'
  formData:Books;
  constructor(private http:HttpClient) { }

  insertBooks(){
    return this.http.post(this.rootURL, this.formData);
  }
}
