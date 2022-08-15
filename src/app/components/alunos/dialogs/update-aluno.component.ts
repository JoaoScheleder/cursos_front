import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Aluno } from "src/app/models/aluno";


@Component({
  selector: 'update-aluno',
  templateUrl: 'update-aluno.component.html',
})


export class updateAlunoComponent {
  aluno! : Aluno
  nome_control! : FormControl

  constructor(public dialogRef: MatDialogRef<updateAlunoComponent>, @Inject(MAT_DIALOG_DATA) public data: Aluno,) { 
    this.aluno = data
    this.nome_control = new FormControl(this.aluno.nome, {
      validators: Validators.required
   });
  }

  closeDialogAndUpdate() {
    this.aluno.nome = this.nome_control.value
    this.dialogRef.close(this.aluno);
  }
}