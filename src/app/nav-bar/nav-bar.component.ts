import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  siteLanguage = 'English';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' }
  ];

  constructor(private translate: TranslateService) { }

  changeSiteLanguage(language: string): void {
    const selectedLanguage = this.languageList.find(f => f.code === language)?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
    }

    this.translate.use(language);
  }

}
