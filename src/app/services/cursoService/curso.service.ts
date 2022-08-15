import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url : string = environment.api_url + '/cursos'

  constructor(private http: HttpClient) { }

  getAll() : Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url)
  }

  getById(id: number) : Observable<Curso>{
    return this.http.get<Curso>(`${this.url}/${id}`)
  }

  delete(id:number) : Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  update(curso : Curso, id: number) : Observable<any>{
    return this.http.put(`${this.url}/${id}`,{...curso})
  }

  create(curso : Curso) : Observable<any>{
    return this.http.post(this.url,{...curso})
  }

}
