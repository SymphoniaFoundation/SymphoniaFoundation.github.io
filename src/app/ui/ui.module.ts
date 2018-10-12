import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [LayoutComponent, HeaderComponent]
})
export class UiModule { }
