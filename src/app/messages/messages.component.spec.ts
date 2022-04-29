import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "../heroes/heroes.component";
import { MessageService } from "../message.service";
import { MessagesComponent } from "./messages.component";

describe('Messages Component Integration Test', () => {

  let sut: ComponentFixture<MessagesComponent>;
  let mockMessageService: MessageService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add', 'clear']);

    TestBed.configureTestingModule({
      declarations: [
        MessagesComponent
      ],
      providers: [
        { provide: MessageService, useValue: mockMessageService }
      ]
    })

    sut = TestBed.createComponent(MessagesComponent);
  })

  it('should create one div for each message', () => {
    mockMessageService.messages = [ 'message 1', 'message 2' ]

    sut.detectChanges(); // When doing integration testing in Angular, you must manually call detectChanges for change detection
    // to occur

    // If you remember dom manipulation, nativeElement is similar to the document object
    let messageElements = sut.nativeElement.querySelectorAll('div > div');

    expect(messageElements[1].textContent).toContain('message 1');
    expect(messageElements[2].textContent).toContain('message 2');
  })

});
