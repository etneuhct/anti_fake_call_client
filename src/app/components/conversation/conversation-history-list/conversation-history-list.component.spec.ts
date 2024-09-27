import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationHistoryListComponent } from './conversation-history-list.component';

describe('ConversationHistoryListComponent', () => {
  let component: ConversationHistoryListComponent;
  let fixture: ComponentFixture<ConversationHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConversationHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
