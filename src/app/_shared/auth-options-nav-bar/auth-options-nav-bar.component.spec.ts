import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOptionsNavBarComponent } from './auth-options-nav-bar.component';

describe('AuthOptionsNavBarComponent', () => {
  let component: AuthOptionsNavBarComponent;
  let fixture: ComponentFixture<AuthOptionsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthOptionsNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthOptionsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
