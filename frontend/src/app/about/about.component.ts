import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from '../contact.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'ng-bootstrap-darkmode';
import { ColorModeService } from '../color-mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  FormData: FormGroup;
  team = [
    {
      img: '../../assets/img/team/palo-landrae.jpg',
      name: 'Palo Landrae',
      role: 'Developer',
    },
    {
      img: '../../assets/img/team/dontu.png',
      name: 'Dontu Lilian',
      role: 'Developer',
    },
  ];
  private _success = new Subject<string>();
  private dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  staticAlertClosed = false;
  successMessage = '';
  theme = '';

  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    themeService: ThemeService,
    colorModeService: ColorModeService
  ) {
    themeService.theme$.subscribe(
      (theme) => (this.theme = colorModeService.selectedTheme(theme))
    );
  }

  onSubmit(FormData) {
    this.contact.PostMessage(FormData).subscribe((error) => {
      console.log({ error });
    });
    this.changeSuccessMessage();
    this.FormData.reset();
  }

  public changeSuccessMessage() {
    this._success.next(
      `${new Date().toLocaleDateString(
        'en-US',
        this.dateOptions
      )} - Message successfully sent.`
    );
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      txtName: new FormControl('', [Validators.required]),
      txtEmail: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      txtMessage: new FormControl('', [Validators.required]),
      captcha: new FormControl('', [Validators.required]),
    });
    setTimeout(() => this.staticAlert.close(), 20000);
    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
}
