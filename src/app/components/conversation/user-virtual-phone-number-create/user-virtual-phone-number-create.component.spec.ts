import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVirtualPhoneNumberCreateComponent } from './user-virtual-phone-number-create.component';

describe('UserVirtualPhoneNumberCreateComponent', () => {
  let component: UserVirtualPhoneNumberCreateComponent;
  let fixture: ComponentFixture<UserVirtualPhoneNumberCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserVirtualPhoneNumberCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVirtualPhoneNumberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
