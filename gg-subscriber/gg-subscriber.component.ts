import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NewsLetterService } from '../../services/news-letter.service';
//import { CmsComponentData } from '@spartacus/storefront';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-gg-subscriber',
  templateUrl: 'gg-subscriber.component.html',
  styleUrls: ['gg-subscriber.component.scss']
})

export class GgSubscriberComponent  {

  displayContainer = false;
  submitedEmail = "";
  title = 'email-validation-tutorial';
  redirectMessage = "";

  constructor(private newsletterService: NewsLetterService) {}

  get primEmail(){
    return this.userEmails.get('userEmail');
  }

  onSubmit() {
    this.submitedEmail = this.userEmails.value.userEmail;
    this.newsletterService.addNewsSubscriber(this.submitedEmail).subscribe(data => {
      //console.log(data);
      //this.redirectMessage = data.statusDescription;
    });
    this.displayContainer = true;
  }

  userEmails = new FormGroup({
    userEmail: new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });


}
