import { Component, OnInit } from '@angular/core';
import { IDetails } from '../details';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableColumns: string[] = ['lastName', 'firstName', 'genderC', 'age', 'idNumber']
  param = ''
  constructor(private _service: HomeService) { }
  dataSource: IDetails[] = [];
  clear() {
    this.loudingData();
  }
  search() {
    this._service.search(this.param).subscribe(x => {
      this.dataSource = x
    })
  }
  ngOnInit(): void {
    if (!this._service.studentList)
      this.loudingData();
  }
  loudingData() {
    this._service.getStudent().subscribe(
      x => {
        this.dataSource = x;
        this.dataSource.forEach(s => {
          if (s.gender == 0)
            s.genderC = "man"
          else
            s.genderC = "wife"
          return this.dataSource
        })
        this._service.studentList = this.dataSource;
      }
    )
  }
}
