import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhoneNumberCreateComponent } from './user-phone-number-create.component';

describe('UserPhoneNumberCreateComponent', () => {
  let component: UserPhoneNumberCreateComponent;
  let fixture: ComponentFixture<UserPhoneNumberCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserPhoneNumberCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPhoneNumberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
