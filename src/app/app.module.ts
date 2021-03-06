import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {userInfoReducers, userLoginReducers} from './redux/user.state';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './redux/user.effects';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RestoreFormComponent } from './components/restore-form/restore-form.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

import { UsersService } from './services/users.service';
import { CurrentUserService } from './services/current-user.service';
import { UserForAdminService } from './services/user-for-admin.service';
import { UserListModule } from './user-list/user-list.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { LoaderComponent } from './loader/loader.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    LoginPageComponent,
    RestoreFormComponent,
    UserPageComponent,
    UserInfoComponent,
    AdminPageComponent,
    EditFormComponent,
    AddFormComponent,
    DeleteUserComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UserListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    StoreModule.forFeature('UserInfo', userInfoReducers),
    StoreModule.forFeature('UserLogin', userLoginReducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [
    UsersService,
    CurrentUserService, 
    UserForAdminService,
  ],
  bootstrap: [AppComponent],
  exports: [LoaderComponent]
})
export class AppModule {}
