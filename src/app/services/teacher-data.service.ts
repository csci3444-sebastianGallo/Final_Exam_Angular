import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // NOTE ilker importing Http
import 'rxjs/add/operator/map'; // NOTE ilker importing react JS extension operator map


@Injectable()
export class TeacherListDataService {
 teacher: Teacher[];

  constructor(public http:Http) { 
    console.log("TeacherListDataService constructor executing");
    this.teacher = [
      {name:'ilker', lastname:'kiris'},
      {name:'neelu', lastname:'sinha'}
    ];
  }

  getTeachers() {
    // NOTE ilker below returns an "observable" from rxjs (react JS extension)
    return this.http.get('http://localhost:9016/api/v1/teachers')
      .map( response => response.json()); // NOTE rxjs map operator allows us to hook up a transformer to observable returned by above GET
  }

  // NOTE ilker providing to show service returning an Array. Not needed for final project
  // getTeacher() {
  //   // NOTE ilker below returns an Prof2[]
  //   return this.teacher;
  // }

  // NOTE ilker below block is not needed for final project
  // getProf2sC() {
  //   // NOTE ilker below returns an "observable" from rxjs (react JS extension)
  //   return Observable.of(this.prof2s);
  // }
  // getProf2sA() {
  //   // NOTE ilker below returns an "observable" from rxjs (react JS extension)
  //   return Observable.from(this.prof2s);
  // }

}

//NOTE ilker using 'export' below allows any component using this service to be able to import the below interface


// NOTE ilker no need for below one, just to show service returning an Array. No need in final project
export interface Teacher {
  name:string,
  lastname:string
}