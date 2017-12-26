import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AboutComponent } from './components/about/about.component';
import { TeacherListDataService} from './services/teacher-data.service';


const appRoutes: Routes = [
  {path: '', component: TeacherComponent},
  {path: 'about', component:AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
