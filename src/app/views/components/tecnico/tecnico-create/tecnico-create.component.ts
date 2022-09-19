import { Tecnico } from './../../../../models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: 'Gustavo montana',
    cpf: '983.544.580-08',
    telefone: '(00) 90000-9000'

  }

  constructor(private router: Router,
    private service: TecnicoService) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['tecnicos'])
  }
  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos']);
      this.service.message('TÉCNICO CRIADO COM SUCESSO!');
    }, err =>{
      console.log(err);
      if(err.error.error.match('já cadastrado')){
        this.service.message(err.error.error);
      }
    });
  }

}
