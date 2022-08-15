import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './components/alunos/alunos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';
const routes: Routes = [
  {path : "", redirectTo: "alunos", pathMatch: "full"},
  {path:"alunos", component:AlunosComponent},
  {path:"cursos", component:CursosComponent},
  {path:"matriculas/curso/:id", component:MatriculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
