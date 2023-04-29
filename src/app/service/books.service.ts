import { Injectable } from '@angular/core';
import { Books } from '../model/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  formData:Books;
  constructor() { }
}
