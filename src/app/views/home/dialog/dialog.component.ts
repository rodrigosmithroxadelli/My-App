import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,) {

  }

  ok(): void {
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addCarrinho(): void {
    this.dialogRef.close();
  }
  

}
