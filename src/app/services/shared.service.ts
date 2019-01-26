import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private imageAsB64: any = undefined;
  private user: any = undefined;
  private isloggedin: any = undefined;
  private ToolId: any = undefined;
  private loading: any = undefined;



  SetLoading(loading?: any) {
    this.loading = loading;
  }
  GetLoading() {
    return this.loading;
  }

  SetUser(user?: any) {
    this.user = user;
  }
  GetUser() {
    return this.user;
  }

  setimageAsB64(imageAsB64?: any) {
    this.imageAsB64 = imageAsB64;
  }

  getimageAsB64(): any {
    return this.imageAsB64;
  }

  setLoggedInStatus(isloggedin?: any) {
    this.isloggedin = isloggedin;
  }

  getLoggedInStatus() {
    return this.isloggedin;
  }

  setToolId(ToolId?: any) {
    this.ToolId = ToolId;
  }
  getToolId() {
    return this.ToolId;
  }
}
