import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITools } from 'src/app/models/ITools';
import { Observable } from 'rxjs';


const toolList = 'api/tools';
const postToollist = 'api/posttools';
const retourToollist = 'api/retourtools';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private http: HttpClient) { }

  tools(): Observable<ITools> {
    return this.http.get<ITools>(toolList);
  }

  posttools(tool_list: any) {
    return this.http.post<ITools[]>(postToollist, tool_list);
  }
  retourtools(tool_list: any) {
    return this.http.post<ITools[]>(retourToollist, tool_list);
  }
}
