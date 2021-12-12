import { Component } from '@angular/core';
import {
  DefaultLangChangeEvent,
  LangChangeEvent,
  TranslateService,
  TranslationChangeEvent
} from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  siteLanguage = 'English';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        console.log('onLangChange', event);
      });

    this.translate.onTranslationChange
      .subscribe((event: TranslationChangeEvent) => {
        console.log('onTranslationChange', event);
      });

    this.translate.onDefaultLangChange
      .subscribe((event: DefaultLangChangeEvent) => {
        console.log('onDefaultLangChange', event);
      });
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }

    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  }
}
