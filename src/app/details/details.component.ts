import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDetails } from '../details';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  student: IDetails
  constructor(private activatedRoute: ActivatedRoute, private _service: HomeService) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    });
  }

  ngOnInit(): void {
    this.student = this._service.studentList.find(x => x.id == this.id)
  }

}
