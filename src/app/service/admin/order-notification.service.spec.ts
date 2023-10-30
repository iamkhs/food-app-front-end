import { TestBed } from '@angular/core/testing';

import { OrderNotificationService } from './order-notification.service';

describe('OrderNotificationService', () => {
  let service: OrderNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
