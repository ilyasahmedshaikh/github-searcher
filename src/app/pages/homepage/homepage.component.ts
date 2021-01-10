import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../../core/http/search/search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  programForm: FormGroup;
  isSearchEnabled: boolean = false;
  searchType: string = 'users';
  data: any = '';

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) {
    this.programForm = this.fb.group({
      search: [''],
    });
  }

  ngOnInit(): void {
  }

  search() {
    let search = this.programForm.value.search;

    if(search.length >= 3) {
      this.getData();
    } 
    else {
      this.data = [];
      this.isSearchEnabled = false;
    }

    if(search) {
      this.isSearchEnabled = true;
    } 
    else {
      this.isSearchEnabled = false;
      this.data = [];
    }
  }

  onChangeSearchType(event) {
    let value = event.target.value;
    this.searchType = value;

    // making API call to fetch on searchType change
    this.data = [];
    this.getData();
  }

  getData() {
    let searchKeyword = this.programForm.value.search;
    this.searchService.getUsers(searchKeyword, this.searchType).subscribe(res => {
      this.data = res;
      // console.log(this.data);
    })
  }

}
