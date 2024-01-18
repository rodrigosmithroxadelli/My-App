import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuListComponent } from './views/home/Menu-list/menu-list.component';
import { CarrinhoCompraComponent } from './carrinho-compra/carrinho-compra.component';
import { Dialog } from '@angular/cdk/dialog';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuListComponent },
  { path: 'carrinhocompra', component: CarrinhoCompraComponent },
  { path: 'dialog', component: Dialog },
  { path: 'qrcode', component: QrcodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
