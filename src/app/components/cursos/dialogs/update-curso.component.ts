import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Curso } from "src/app/models/curso";


@Component({
  selector: 'update-curso',
  templateUrl: 'update-curso.component.html',
})


export class updateCursoComponent {
  curso! : Curso
  descricao_control! : FormControl
  ementa_control! : FormControl

  constructor(public dialogRef: MatDialogRef<updateCursoComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso,) { 
    this.curso = data
    this.ementa_control = new FormControl(this.curso.ementa, {
        validators: Validators.required
     });
    this.descricao_control = new FormControl(this.curso.descricao, {
      validators: Validators.required
   });
  }

  closeDialogAndUpdate() {
    this.curso.descricao = this.descricao_control.value
    this.curso.ementa = this.ementa_control.value
    this.dialogRef.close(this.curso);
  }
}