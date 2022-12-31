import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListServiceService } from 'src/app/list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstName = "";
  lastName = "";
  email = "";
  constructor(private ListService: ListServiceService, private router: Router) {

  }

  ngOnInit() {
  }

  onSaveUser() {
    if (this.emailFormControl.status == "VALID" && this.firstName && this.lastName) {
      this.ListService.createlists(this.firstName, this.lastName, this.email).subscribe((list) => {
        this.router.navigate(['']);
      });
    }
    else {
      alert("Please add all required data");
    }
  }

  onCancelAdd() {
    this.router.navigate(['']);
  }
}
