import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit() {
    this.primengConfig.ripple = true;

    // Adicione o listener de mudança de status de rede
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });

    // Adicione o código para obter o status atual da rede
    this.logCurrentNetworkStatus();
  }

  async logCurrentNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
  }
  
  title = 'my-app';
}
