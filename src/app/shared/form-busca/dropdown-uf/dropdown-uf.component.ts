import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefix: string = '';
  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions = [];

  constructor(private unidadeFerederativaService: UnidadeFederativaService) {

  }
  ngOnInit(): void {
    this.unidadeFerederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados
        console.log(this.unidadesFederativas)
      })
  }
}
