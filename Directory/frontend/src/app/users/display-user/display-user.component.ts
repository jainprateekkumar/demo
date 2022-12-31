import { Component, OnInit } from '@angular/core';

import { ListServiceService } from 'src/app/list-service.service';
import List from 'src/app/models/list';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})

export class DisplayUserComponent implements OnInit {
  lists: List[] = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'email'];
  constructor(private ListService: ListServiceService) { }

  ngOnInit() {
    this.ListService.getlists().subscribe((lists) => {
      this.lists = lists as List[];
    }
    );
  }
}

