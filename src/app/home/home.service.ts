import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetails } from '../details';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  studentList: IDetails[];
  homeUrl = 'https://localhost:44322/Home'
  isValid = false;
  constructor(private _http: HttpClient, private router: Router) {
  }

  canActivate(): boolean {
    if (this.isValid == false)
      this.router.navigate(['/home'])
    return this.isValid;
  }
  getStudent(): Observable<IDetails[]> {
    return this._http.get<IDetails[]>(this.homeUrl);
  }

  search(param: string): Observable<IDetails[]> {
    return this._http.get<IDetails[]>(this.homeUrl + '/' + param)
  }

}
