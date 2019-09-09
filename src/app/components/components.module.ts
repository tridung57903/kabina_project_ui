import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UssidebarComponent } from './ussidebar/ussidebar.component';
import { UsnavbarComponent } from './usnavbar/usnavbar.component';
import { UsfooterComponent } from './usfooter/usfooter.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UssidebarComponent,
    UsnavbarComponent,
    UsfooterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UssidebarComponent,
    UsnavbarComponent,
    UsfooterComponent
  ]
})
export class ComponentsModule { }
