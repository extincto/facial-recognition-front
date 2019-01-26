import { Component, OnInit } from '@angular/core';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';

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
  public imageAsDataUrl: string;
  public User: Object;
  public loading: boolean;



  constructor(private sharingService: SharedService, private toastr: ToastrService) { }
  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  login() {
    this.User = this.sharingService.GetUser();
    this.loading = this.sharingService.GetLoading();
   try {
    if (this.User) {
      this.toastr.success('Identification réussie !');
    } else {
      this.toastr.error('Identification FAILED !');
    }
   } catch (error) {
   }
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  async handleImage(webcamImage: WebcamImage) {
    this.imageAsDataUrl = null;
    await this.sharingService.setimageAsB64(webcamImage.imageAsDataUrl);
    this.webcamImage = webcamImage;
    this.imageAsB64 = webcamImage.imageAsDataUrl;
    return this.imageAsB64;
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
