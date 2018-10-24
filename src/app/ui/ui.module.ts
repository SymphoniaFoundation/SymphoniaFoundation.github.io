import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UiRoutingModule } from './ui-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
