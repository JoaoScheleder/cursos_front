import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Aluno } from "src/app/models/aluno";
import { AlunoCurso } from "src/app/models/alunosCurso";
import { AlunoService } from "src/app/services/alunoService/aluno.service";


@Component({
  selector: 'create-matricula',
  templateUrl: 'create-matricula.component.html',
})


export class createMatriculaComponent {
  alunoCurso! : AlunoCurso
  nome_control! : FormControl
  codigo_aluno_control: FormControl;

  constructor(
    public dialogRef: MatDialogRef<createMatriculaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: AlunoCurso,
    private alunoService : AlunoService) { 

    this.codigo_aluno_control = new FormControl('', {validators: Validators.required});
    this.nome_control = new FormControl('', {});
   
  }

  handleChange(){
    let id = this.codigo_aluno_control.value
    this.alunoService.getById(id).subscribe((data)=>{
        this.nome_control.setValue(data[0].nome)
    }
    )
}

  closeDialog() {
    this.alunoCurso = new AlunoCurso(this.nome_control.value,this.codigo_aluno_control.value)
    this.dialogRef.close(this.alunoCurso);
  }
}