import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
})
export class MenuListComponent {
  exibirMenu: boolean = true;
  valor: number = 0;

  constructor(public router: Router, public dialog: MatDialog) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica a rota atual e decide se deve exibir o menu
        this.exibirMenu = !event.url.includes('/carrinhocompra');
      }
    });
  }

  incrementa(){
    
    this.valor++;
  }
  decrementa(){
    this.valor--;
  }
  selectedCategory: string = '';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  onButtonClick(){
    alert("Compra efetuada com sucesso!")
  }
  
  navigateTocarrinhocompra(): void {
    this.router.navigate(['/carrinhocompra']);
  }
  
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  navigateToQrcode(): void {
    this.router.navigate(['/qrcode']);
  }
}
