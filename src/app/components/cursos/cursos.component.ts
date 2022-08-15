import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/cursoService/curso.service';
import { createCursoComponent } from './dialogs/create-curso.component';
import { deleteCursoComponent } from './dialogs/delete-curso.component';
import { updateCursoComponent } from './dialogs/update-curso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos! : Curso[]

  constructor(private cursoService : CursoService,public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.cursoService.getAll().subscribe({
      next : (cursos)=>{
        this.cursos = cursos
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }


  handleEdit(curso : Object){
    const dialogRef = this.dialog.open(updateCursoComponent,{data: curso});
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          this.cursoService.update(result, result.codigo as number).subscribe((_)=>{
            this.openSnackBar("Curso atualizado com sucesso.")
            this.getData()
          })
        }
      }
    });
  }

  handleCreate(){
    const dialogRef = this.dialog.open(createCursoComponent);
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          let curso = new Curso(result.descricao, result.ementa)
          this.cursoService.create(curso).subscribe((_)=>{
            this.openSnackBar("Curso criado com sucesso.")
            this.getData()
          })
        }
      }
    });
  }
  
  handleDelete(codigo : number){
    const dialogRef = this.dialog.open(deleteCursoComponent);
    
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          console.log(`Dialog result: ${result}`);
          this.cursoService.delete(codigo).subscribe((_)=>{
            this.openSnackBar("Curso excluido com sucesso.")
            this.getData()
          })
        }
      }
    });

  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Fechar',
    {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
