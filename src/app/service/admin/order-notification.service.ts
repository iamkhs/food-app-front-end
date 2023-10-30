import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderNotificationService {

  public hasNewOrdersSubject = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar) {}

  get hasNewOrders$() {
    return this.hasNewOrdersSubject.asObservable();
  }

  showNewOrdersSnackbar() {
    this.snackBar.open('New orders have arrived!', 'Dismiss', {
      duration: 5000, // Adjust the duration as needed
      panelClass: ['new-orders-snackbar'], // Use CSS to style the snackbar
    });
  }

  notifyNewOrdersArrived() {
    this.hasNewOrdersSubject.next(true);
    this.showNewOrdersSnackbar();
    console.log(this.hasNewOrders$);
    
  }
}
