import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studentDetailsModel } from './studentdetailsModel';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailsService {
  url: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  refreshList(): Observable<studentDetailsModel> {
    return this.http.get<studentDetailsModel>(this.url+'/Students');
  }
   
   createingDataofStudent(data:any):Observable<studentDetailsModel>{
       return this.http.post<studentDetailsModel>(this.url+'/Students',data);
   }

   deleteStudentFromList(id:any):Observable<HttpEvent<studentDetailsModel>>{
    return this.http.delete<HttpEvent<any>>(`${this.url}/Students/${id}`);
   }
}
