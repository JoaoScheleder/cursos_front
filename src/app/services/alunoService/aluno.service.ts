import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/models/aluno';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url : string = environment.api_url + '/alunos'

  constructor(private http: HttpClient) { }

  getAll() : Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url)
  }

  getById(id: number) : Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }

  delete(id:number) : Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  update(aluno : Aluno, id: number) : Observable<any>{
    return this.http.put(`${this.url}/${id}`,{...aluno})
  }

  create(aluno : Aluno) : Observable<any>{
    return this.http.post(this.url,{...aluno})
  }

}
