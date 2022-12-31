import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/web.service';
import List from './models/list';

@Injectable({
  providedIn: 'root'
})

export class ListServiceService {
  constructor(private webservice: WebService) {

  }

  getlists() {
    return this.webservice.get('lists')
  }

  createlists(firstname: string, lastname: string, email: string) {
    return this.webservice.post('lists', { email, firstname, lastname });
  }

  deletelists(id: string) {
    return this.webservice.delete(`lists/${id}`);
  }
}
