import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itools } from 'src/app/models/ITools';
import { Observable } from 'rxjs';


const toolList = 'api/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private http: HttpClient) { }

  tools(): Observable<Itools> {
    return this.http.get<Itools>(toolList);
  }
}
