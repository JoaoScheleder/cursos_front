import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';

// TODO: COMPONENTIZAR AS DIALOGS DE CRIAR, DELETAR E ATUALIZAR, A FIM DE REDUZIR OS IMPORTS E O TEMPO DE MANUTENÇÃO...
import { createAlunoComponent } from './components/alunos/dialogs/create-aluno.component';
import { updateAlunoComponent } from './components/alunos/dialogs/update-aluno.component';
import { deleteAlunoComponent } from './components/alunos/dialogs/delete-aluno.component';

import { createCursoComponent } from './components/cursos/dialogs/create-curso.component';
import { updateCursoComponent } from './components/cursos/dialogs/update-curso.component';
import { deleteCursoComponent } from './components/cursos/dialogs/delete-curso.component';

import { createMatriculaComponent } from './components/matriculas/dialogs/create-matricula.component';
import { updateMatriculaComponent } from './components/matriculas/dialogs/update-matricula.component';
import { deleteMatriculaComponent } from './components/matriculas/dialogs/delete-matricula.component';
// END TODO

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableComponent,
    AlunosComponent,
    CursosComponent,
    MatriculasComponent,
    updateAlunoComponent,
    createAlunoComponent,
    deleteAlunoComponent,
    updateCursoComponent,
    deleteCursoComponent,
    createCursoComponent,
    deleteMatriculaComponent,
    updateMatriculaComponent,
    createMatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
