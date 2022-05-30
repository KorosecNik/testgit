import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { GgSubscriberComponent } from './gg-subscriber.component';
import { OutletModule } from '@spartacus/storefront';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GgSubscriberComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SubscriptionsComponent: {
          component: GgSubscriberComponent,
        },
      },
    } as CmsConfig),
    OutletModule,
    ReactiveFormsModule,
    I18nModule,
  ],
  entryComponents: [GgSubscriberComponent],
})
export class GgSubscriberModule { }



