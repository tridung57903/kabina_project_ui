import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KabinaRoutingModule } from './kabina-routing.module';
import { UserService } from './services/user.service';
import { AppConfiguration } from './services/app-config.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
// import { MarterialModule } from './../marterial';
// import { LibraryHeaderComponent } from './components/library-header/library-header.component';
// import { LibrarySummaryComponent } from './components/library-summary/library-summary.component';
// import { LibraryBookListComponent } from './components/library-booklist/library-booklist.component';
// import { LibraryDataTableComponent } from './components/library-data-table/library-data-table.component';
// import { BorrowBooksDialogComponent } from './components/library-action/borrow-books-dialog/borrow-books-dialog.component';
// import { DeleteBooksDialogComponent } from './components/library-action/delete-books-dialog/delete-books-dialog.component';
// import { LibraryRegisterComponent } from './components/library-register/register.component';
// import { LibraryLoginComponent } from './components/library-login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';

@NgModule({
    imports: [
        CommonModule,
        KabinaRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ],
    declarations: [
        UserListComponent,
        NavigationComponent,
        NavbarComponent,
        MainPageComponent,
        VerticalNavComponent
    ],
    entryComponents : [
          
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        VerticalNavComponent
    ],
    providers: [
        UserService,
        AppConfiguration,
        RestService
    ]
})
export class KabinaModule { }
