import { PopoverModule } from 'ngx-popover';
import { LandingPageModule } from './../landing-page/landing-page.module';
import { AccessControlPipe } from './../pipes/accessControl.pipe';
import { StorageService } from './../services/storage.service';
import { SharedModule } from './../shared/shared.module';
import { InstructorModule } from '../modules/instructor/instructor-core/instructor.module';
import { StudentModule } from '../modules/student/student-core/student.module';
import { AuthService } from './../services/auth.service';
import { GroupGuard } from './../auth/core/guard/group.guard';
import { AccessControlGuard } from './../auth/core/guard/AccessControl.guard';
import { AlreadyLoggedInGuard } from './../auth/core/guard/AlreadyLoggedIn.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminModule } from '../modules/admin/admin-core/admin.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';
import { SlideshowModule } from 'ng-simple-slideshow';
import { Howl, Howler } from 'howler';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    InstructorModule,
    StudentModule,
    LandingPageModule,
    routing,
    SharedModule,
    PopoverModule,
    IgxCalendarModule,
    IgxDialogModule,
    SlideshowModule,
  ],
  providers: [
    GroupGuard,
    AccessControlGuard,
    AlreadyLoggedInGuard,
    AuthService,
    StorageService
  ],
  declarations: [AppComponent, AccessControlPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
