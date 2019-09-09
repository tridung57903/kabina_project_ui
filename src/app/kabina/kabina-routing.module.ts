import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const kabinaRoutes: Routes = [
    {
        path: 'kabina',
        component: NavigationComponent,
        children: [
            {
                path: '',
                component: MainPageComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'users'
                    },
                    {
                        path: 'users',
                        component: UserListComponent
                    },
                ]
            }
            
        ]
    }
   
];

@NgModule({
    imports: [
        RouterModule.forChild(kabinaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class KabinaRoutingModule { }
