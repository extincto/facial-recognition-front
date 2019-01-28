import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { IAuth } from 'src/app/models/IAuth';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/models/IUser';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';


const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryBlue = '#379EC1';
const SecondaryBlue = '#379EC1';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public Email: string;
  public FirstName: string;
  public Id: number;
  public LastName: string;
  public Sexe: string;
  public Visited: string;
  public user: Object;

  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
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
  ToolId: any[];
  public loading = false;
  public isloggedin = false;

  @ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(private sharingService: SharedService, private authService: AuthentificationService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(image64: string) {
    this.loading = true;
    try {
      this.primaryColour = PrimaryBlue;
      this.secondaryColour = SecondaryBlue;
      this.isloggedin = false;
      this.imageAsDataUrl = this.sharingService.getimageAsB64();
      image64 = this.imageAsDataUrl;
      this.authService.login(image64).subscribe((user: IUser) => {
        if (user) {
          this.loading = false;
          this.isloggedin = true;
          this.sharingService.setLoggedInStatus(this.isloggedin);
          this.Id = user.Id;
          this.Email = user.Email;
          this.FirstName = user.FirstName;
          this.LastName = user.LastName;
          this.Sexe = user.Sexe;
          this.Visited = user.Visited;
          this.ToolId = user.ToolId;
          this.sharingService.setToolId(this.ToolId);
          if (this.ToolId.length === 0) {
            this.router.navigate(['loan']);
          } else {
            this.router.navigate(['return']);
          }
          this.sharingService.SetUser(user);
        }
      }, err => {
        this.isloggedin = false;
        this.loading = false;
        this.sharingService.SetLoading(this.loading);
        this.toastr.error('Identification non valide!');
      });
    } catch (e) {
    }
  }
  logoff() {
    this.isloggedin = false;
    this.sharingService.setLoggedInStatus(this.isloggedin);
  }


}
