import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { IAuth } from 'src/app/models/IAuth';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/models/IUser';
import { SharedService } from 'src/app/services/shared.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage;
  public imageAsDataUrl: string;
  public multipleWebcamsAvailable = false;
  public showWebcam = true;
  public allowCameraSwitch = true;
  public errors: WebcamInitError[] = [];
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  public url: string;
  public id: number;


  constructor(private sharingService: SharedService, private authService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.handleImage(this.webcamImage);
  }

  login(image64: string) {
    this.imageAsDataUrl = this.sharingService.getimageAsB64();
    image64 = this.imageAsDataUrl;
    this.authService.login(image64).subscribe((user: IUser) => {
        this.router.navigate(['loan']);

    });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.imageAsDataUrl = webcamImage.imageAsDataUrl;

  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
