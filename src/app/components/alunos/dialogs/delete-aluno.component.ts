import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'delete-aluno',
  templateUrl: 'delete-aluno.component.html',
})
export class deleteAlunoComponent {
    constructor(public dialogRef: MatDialogRef<deleteAlunoComponent>) { }

    closeDialog(data : any) {
      this.dialogRef.close(data);
    }
}