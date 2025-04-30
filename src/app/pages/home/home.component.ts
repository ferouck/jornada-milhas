import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimentos.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento, Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promocoes!: Promocao[];
  depoimentos!: Depoimento[];

  constructor( private servicoPromocao: PromocaoService,
    private serviceDepoimento: DepoimentoService
  ) {

  }
  ngOnInit(): void {
    this.servicoPromocao.listar()
    .subscribe(
      (res) => {
        this.promocoes = res;
      }
    )
    this.serviceDepoimento.listar()
      .subscribe(
        (res) => {
          this.depoimentos = res;
        }
      )
  }

}
