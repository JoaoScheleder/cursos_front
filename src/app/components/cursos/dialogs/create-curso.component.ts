import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'create-curso',
  templateUrl: 'create-curso.component.html',
})
export class createCursoComponent {

    descricao_control! : FormControl
    ementa_control! : FormControl

    constructor(public dialogRef: MatDialogRef<createCursoComponent>) { 
      this.descricao_control = new FormControl('', {
        validators: Validators.required
     });
     this.ementa_control = new FormControl('', {
        validators: Validators.required
     });
    }

    closeDialog() {
      this.dialogRef.close({ementa : this.ementa_control.value , descricao : this.descricao_control.value});
    }
}