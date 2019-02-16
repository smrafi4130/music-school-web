import { NotificationService } from './notification.service';
import { FileUploadService } from './fileUpload.service';
import { StorageService } from './storage.service';
import { AdminService } from './admin.service';
import { CourseService } from './course.service';
import { InstructorService } from './instructor.service';
import { StudentService } from './student.service';
import { StudentCourseService } from './studentcourse.service';
import { AccessGroupService } from './access-group.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
/*....................................................*/
export { UserService } from './user.service';
export { AuthService } from './auth.service';
// export function jwtTokenGetter() {
//   return ...;
// }
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: jwtTokenGetter
    //   }
    // })

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: environment.whitelist
      }
    })
  ],
  declarations: [],
  providers: [
    AuthService,
    UserService,
    AccessGroupService,

    // Music School Management
    StudentCourseService,
    AdminService,
    StudentService,
    InstructorService,
    CourseService,
    StorageService,
    PostService,
    FileUploadService,
    NotificationService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
  ],
  exports: [JwtModule]
})
export class ServiceModule {}
