import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhoneNumberComponent } from './user-phone-number.component';

describe('UserPhoneNumberComponent', () => {
  let component: UserPhoneNumberComponent;
  let fixture: ComponentFixture<UserPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserPhoneNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
