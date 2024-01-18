import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho-compra',
  templateUrl: './carrinho-compra.component.html',
  styleUrl: './carrinho-compra.component.css'
})
export class CarrinhoCompraComponent {
  constructor(private router: Router, public dialog: MatDialog) {}
  
  longText = `Conjunto Sofá 3 e 2 Lugares Bahamas Flash é ideal para completar a sua sala de estar.
  Fabricado com o que há de melhor de materiais, madeiramento de reflorestamento de eucalipto e com tecido
  sued.
  Seu revestimento traz conforto com acabamento de espuma D-23. Características: Espuma D-23 Madeira de
  reflorestamento
  Tecido Sued Dimensões: Altura: 95 cm Largura: 200 e 150 cm Profundidade: 86 cm Garantia do fornecedor de 3
  meses.`;

}
