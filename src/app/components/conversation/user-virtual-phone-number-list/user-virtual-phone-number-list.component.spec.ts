import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVirtualPhoneNumberListComponent } from './user-virtual-phone-number-list.component';

describe('UserVirtualPhoneNumberListComponent', () => {
  let component: UserVirtualPhoneNumberListComponent;
  let fixture: ComponentFixture<UserVirtualPhoneNumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserVirtualPhoneNumberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVirtualPhoneNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
