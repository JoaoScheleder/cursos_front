import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'create-aluno',
  templateUrl: 'create-aluno.component.html',
})
export class createAlunoComponent {

    nome_control! : FormControl

    constructor(public dialogRef: MatDialogRef<createAlunoComponent>) { 
      this.nome_control = new FormControl('', {
        validators: Validators.required
     });
    }

    closeDialog() {
      this.dialogRef.close(this.nome_control.value);
    }
}