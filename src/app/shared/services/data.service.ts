import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data/resume-data.json';

  constructor(private http: HttpClient) { }

  getResumeData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}