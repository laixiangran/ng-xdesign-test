import { NgModule } from '@angular/core';
import { NbDatePipe } from './i18n.pipe';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { I18nService } from './i18n.service';

@NgModule({
    imports: [
        TranslateModule.forChild()
    ],
    declarations: [
        NbDatePipe
    ],
    exports: [
        NbDatePipe,
        TranslatePipe
    ],
    providers: [ I18nService ]
})
export class I18nModule {
}
