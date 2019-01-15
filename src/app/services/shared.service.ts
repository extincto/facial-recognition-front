import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private imageAsB64: any = undefined;

  setimageAsB64(imageAsB64: any) {
    this.imageAsB64 = imageAsB64;
  }

  getimageAsB64(): any {
    return this.imageAsB64;
  }
}
