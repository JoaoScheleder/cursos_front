import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AlunoCurso } from "src/app/models/alunosCurso";
import { AlunoService } from "src/app/services/alunoService/aluno.service";


@Component({
  selector: 'update-matricula',
  templateUrl: 'update-matricula.component.html',
})


export class updateMatriculaComponent {
  alunoCurso! : AlunoCurso
  nome_control! : FormControl
  codigo_aluno_control: FormControl;

  constructor(
    public dialogRef: MatDialogRef<updateMatriculaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: AlunoCurso,
    private alunoService : AlunoService) { 

    this.alunoCurso = data
    this.codigo_aluno_control = new FormControl(this.alunoCurso.codigo, {
        validators: Validators.required
     });
    this.nome_control = new FormControl(this.alunoCurso.nome, {
      validators: Validators.required
   });
   
  }

  handleChange(){
    let id = this.codigo_aluno_control.value
    this.alunoService.getById(id).subscribe((data)=>{
        this.nome_control.setValue(data[0].nome)
    }
    )
}

  closeDialogAndUpdate() {
    this.alunoCurso.codigo = this.codigo_aluno_control.value
    this.alunoCurso.nome = this.nome_control.value
    this.dialogRef.close(this.alunoCurso);
  }
}