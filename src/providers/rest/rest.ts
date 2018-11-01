//import { HttpClient, Headers } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Voluntario } from '../voluntario/voluntario';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class RestProvider {
 
  api_voluntario = 'http://localhost:51695/api/voluntario';
 //api_voluntario = 'http://172.16.51.9:5123/api/voluntario';

  constructor(public http: HttpClient) {
  }

  getVoluntario():Observable<Voluntario[]>{
    return this.http.get<Voluntario[]>(this.api_voluntario);
  }
  /*getVoluntario() {
    return new Promise(resolve => {
      this.http.get(this.api_voluntario).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);

      });
    });
  }
  */


  removeVoluntario(Id) {
    let headers = new HttpHeaders();
    return new Promise((resolve, reject) => {
      let url = this.api_voluntario+'/'+Id;
      this.http.delete(url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);

      });
    });
  }


  /* insereVoluntario(voluntario: Voluntario) {
    return new Promise((resolve, reject) => {
      let url = this.api_voluntario;
 
      this.http.post(url, voluntario)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
*/

/* 

insereVoluntario(data) {
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  //const requestOptions = new HttpRequest({ headers: headers });

  this.http.post(this.api_voluntario, data, { headers: headers })
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
}



insereVoluntario(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.api_voluntario, JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

public insereVoluntario(voluntario: Voluntario): Observable <Voluntario> {
  return this.http
    .post(this.api_voluntario , voluntario)
    .map(response => {
      return response;
    })
    .catch(()=>{
        console.error(err);
    });
}*/
 insereVoluntario(data) {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append("Content-Type", "application/json");
    return new Promise((resolve, reject) => {
      this.http.post(this.api_voluntario, data, { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }




}





