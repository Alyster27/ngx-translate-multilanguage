import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'translationWithSelect';
  selectedLanguage: string = '';
  

  constructor(public translate: TranslateService) {
    translate.addLangs(['fr', 'en', 'de']);
    translate.setDefaultLang('fr');
    const browserLang: any = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|en|de/) ? browserLang : 'fr');
  }
}
