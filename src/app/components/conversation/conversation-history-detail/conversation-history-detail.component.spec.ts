import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationHistoryDetailComponent } from './conversation-history-detail.component';

describe('ConversationHistoryDetailComponent', () => {
  let component: ConversationHistoryDetailComponent;
  let fixture: ComponentFixture<ConversationHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConversationHistoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
