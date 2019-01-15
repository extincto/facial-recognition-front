import { Component, OnInit } from '@angular/core';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public videoOptions: MediaTrackConstraints = {};
  public webcamImage: WebcamImage;
  private trigger: Subject<void> = new Subject<void>();
  public imageAsB64: string;

  constructor (private sharingService: SharedService) {}
  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
      this.handleImage(this.webcamImage);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  public handleImage(webcamImage: WebcamImage) {
    this.sharingService.setimageAsB64(webcamImage.imageAsDataUrl);
    console.log('imageAsDataUrl', webcamImage.imageAsDataUrl);
    this.webcamImage = webcamImage;
    this.imageAsB64 = webcamImage.imageAsDataUrl;
    return this.imageAsB64;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
