import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVirtualPhoneNumberComponent } from './user-virtual-phone-number.component';

describe('UserVirtualPhoneNumberComponent', () => {
  let component: UserVirtualPhoneNumberComponent;
  let fixture: ComponentFixture<UserVirtualPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserVirtualPhoneNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVirtualPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
