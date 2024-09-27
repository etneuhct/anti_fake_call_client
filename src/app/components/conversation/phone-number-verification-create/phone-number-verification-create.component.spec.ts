import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberVerificationCreateComponent } from './phone-number-verification-create.component';

describe('PhoneNumberVerificationCreateComponent', () => {
  let component: PhoneNumberVerificationCreateComponent;
  let fixture: ComponentFixture<PhoneNumberVerificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhoneNumberVerificationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberVerificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
