import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AlunoService } from "src/app/services/alunoService/aluno.service";


@Component({
  selector: 'delete-matricula',
  templateUrl: 'delete-matricula.component.html',
})
export class deleteMatriculaComponent {
    constructor(public dialogRef: MatDialogRef<deleteMatriculaComponent>) { }

    
    closeDialog(data : any) {
      this.dialogRef.close(data);
    }
}