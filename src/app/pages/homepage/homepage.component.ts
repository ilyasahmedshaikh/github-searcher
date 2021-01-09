import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  programForm: FormGroup;
  isSearchEnabled: boolean = false;
  searchType: string = 'users';

  constructor(
    private fb: FormBuilder
  ) {
    this.programForm = this.fb.group({
      search: [''],
    });
  }

  ngOnInit(): void {
  }

  search(event) {
    let search = event.target.value;

    if(search) {
      this.isSearchEnabled = true;
    } else {
      this.isSearchEnabled = false;
    }
  }

  onChangeSearchType(event) {
    let value = event.target.value;
    this.searchType = value;
  }

}
