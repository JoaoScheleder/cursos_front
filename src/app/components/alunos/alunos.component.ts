import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/alunoService/aluno.service';
import { createAlunoComponent } from './dialogs/create-aluno.component';
import { deleteAlunoComponent } from './dialogs/delete-aluno.component';
import { updateAlunoComponent } from './dialogs/update-aluno.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos! : Aluno[]
  
  constructor(private alunoService : AlunoService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.alunoService.getAll().subscribe({
      next : (alunos)=>{
        this.alunos = alunos
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  handleDelete(codigo : number){
    const dialogRef = this.dialog.open(deleteAlunoComponent);
    
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          console.log(`Dialog result: ${result}`);
          this.alunoService.delete(codigo).subscribe((_)=>{
            this.openSnackBar("Aluno excluido com sucesso.")
            this.getData()
          })
        }
      }
    });

  }

  handleEdit(aluno : Object){
    const dialogRef = this.dialog.open(updateAlunoComponent,{data: aluno});
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          this.alunoService.update(result, result.codigo as number).subscribe((_)=>{
            this.openSnackBar("Aluno atualizado com sucesso.")
            this.getData()
          })
        }
      }
    });
  }

  handleCreate(){
    const dialogRef = this.dialog.open(createAlunoComponent);
    dialogRef.afterClosed().subscribe({
      next : (result) => {
        if(result){
          let aluno = new Aluno(result)
          this.alunoService.create(aluno).subscribe((_)=>{
            this.openSnackBar("Aluno criado com sucesso.")
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
