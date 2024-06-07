import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{ path: '', loadChildren: () => import('./components/app.module').then((m) => m.AppModule) }],
  }
];
