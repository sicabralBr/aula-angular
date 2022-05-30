import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    {id: 1, nome: 'Marcos', email: 'marcos@getMaxListeners.com' },
    {id: 2, nome: 'Isabel', email: 'isabel@getMaxListeners.com'}
  ];

  // contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(){
    // this.listar();
  }

  // listar(){
  //   this.contatoService.listar().subscribe(dados => this.contatos = dados);
  // }

}
