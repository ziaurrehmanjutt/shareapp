import { Component } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private webIntent: WebIntent) {




    const options = {
      action: this.webIntent.ACTION_SEND,
      url: 'path/to/file',
      type: 'application/pdf'
    }

    this.webIntent.startActivity(options).then((data)=> {
        console.log(data);
    }, (data1)=> {
      console.log(data1);
    });

    this.webIntent.getUri().then(data => {
      console.log(data);
    })
  }

}
