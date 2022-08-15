import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/models/aluno';
import { AlunoCurso } from 'src/app/models/alunosCurso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  url : string = environment.api_url + '/matriculas'

  constructor(private http: HttpClient) { }

  getAlunosCurso(id : number) : Observable<AlunoCurso[]>{
    return this.http.get<AlunoCurso[]>(`${this.url}/curso/${id}`)
  }

  delete(id:number) : Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  update(alunoCurso : AlunoCurso, id: number) : Observable<any>{
    console.log(`${this.url}/${id}`)
    return this.http.put(`${this.url}/${id}`,{...alunoCurso})
  }

  create(alunoCurso : AlunoCurso, codigo : number) : Observable<any>{
    return this.http.post(this.url,{codigo_aluno : alunoCurso.codigo, codigo_curso : codigo})
  }
}
