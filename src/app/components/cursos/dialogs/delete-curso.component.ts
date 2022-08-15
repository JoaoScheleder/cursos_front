import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'delete-curso',
  templateUrl: 'delete-curso.component.html',
})
export class deleteCursoComponent {
    constructor(public dialogRef: MatDialogRef<deleteCursoComponent>) { }

    closeDialog(data : any) {
      this.dialogRef.close(data);
    }
}