import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhoneNumberListComponent } from './user-phone-number-list.component';

describe('UserPhoneNumberListComponent', () => {
  let component: UserPhoneNumberListComponent;
  let fixture: ComponentFixture<UserPhoneNumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserPhoneNumberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPhoneNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
