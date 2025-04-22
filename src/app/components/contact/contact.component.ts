import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherClock, featherFacebook, featherInstagram, featherMail, featherMap, featherPhone, featherTwitter } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-contact',
  imports: [NgIcon],
  providers: [provideIcons({ featherInstagram 
    ,featherFacebook,
    featherMap
    ,featherClock ,
    featherMail ,
    featherPhone,
    featherTwitter})],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
