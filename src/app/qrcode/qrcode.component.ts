import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, ScanResult } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  @ViewChild('cameraPreview', { static: false }) cameraPreview?: ElementRef<HTMLDivElement>;
  scanActive: boolean = false;
  
  qrCodeResult: string | null = null;

  constructor(private router: Router) {}

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        return false;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Erro ao verificar permissão:', error);
      return false;
    }
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActive = true;

      const result: ScanResult = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
        alert(result.content);
      } else {
        alert('NENHUM DADO ENCONTRADO!');
      }
    } else {
      alert('NÃO PERMITIDO!');
    }
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
  navigateToQrcodeResult() {
    if (this.qrCodeResult) {
      this.router.navigate(['/qrcode-result', { result: this.qrCodeResult }]);
    }
  }
}
