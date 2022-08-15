import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoCurso } from 'src/app/models/alunosCurso';
import { MatriculaService } from 'src/app/services/matriculaService/matricula.service';
import { createMatriculaComponent } from './dialogs/create-matricula.component';
import { deleteMatriculaComponent } from './dialogs/delete-matricula.component';
import { updateMatriculaComponent } from './dialogs/update-matricula.component';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss']
})
export class MatriculasComponent implements OnInit {

  matriculas! : AlunoCurso[]
  codigo! : number

  constructor(private matriculaService : MatriculaService, 
    private activatedRoute : ActivatedRoute, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) {
    activatedRoute.params.subscribe((data)=>{
      this.codigo = data['id']
    })
   }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.matriculaService.getAlunosCurso(this.codigo).subscribe({
      next : (result)=>{
        this.matriculas = result
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  handleEdit(curso : Object){
    const dialogRef = this.dialog.open(updateMatriculaComponent,{data: curso});
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          result.codigo_curso = this.codigo
          this.matriculaService.update(result, result.codigo_matricula).subscribe((_)=>{
            this.openSnackBar("Matrícula atualizado com sucesso.",'snack-success')
            this.getData()
          })
        }
      }
    });
  }

  handleDelete(codigo : number){
    const dialogRef = this.dialog.open(deleteMatriculaComponent);
    
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          console.log(`Dialog result: ${result}`);
          this.matriculaService.delete(codigo).subscribe((_)=>{
            this.openSnackBar("Matrícula excluida com sucesso.",'snack-success')
            this.getData()
          })
        }
      }
    });

  }

  handleCreate(){
    const dialogRef = this.dialog.open(createMatriculaComponent);
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          let alunoCurso = new AlunoCurso(result.nome,result.codigo)
          this.matriculaService.create(alunoCurso, this.codigo).subscribe({
            next : (result)=>{
              this.openSnackBar("Matrícula criada com sucesso.",'snack-success')
              this.getData()
            },
            error : (err)=>{
              this.openSnackBar("Ops, algo deu errado.",'snack-err')
            }

          }
          )
        }
      }
    });
  }

  openSnackBar(message: string, className : string) {
    this._snackBar.open(message, 'Fechar',
    {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass : className
    });
  }
}
