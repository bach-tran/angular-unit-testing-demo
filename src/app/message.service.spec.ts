import { MessageService } from "./message.service"

describe('MessageService', () => {

  let systemUnderTest: MessageService;

  // Will run before each test case
  beforeEach(() => {
    systemUnderTest = new MessageService();
  })

  it('should have a messages array with a length of 2 if add is called twice', () => {
    systemUnderTest.add('message 1');
    systemUnderTest.add('message 2');

    expect(systemUnderTest.messages.length).toEqual(2);
  })

  it('should have a messages array with a length of 0 once clear is called', () => {
    // Arrange
    systemUnderTest.add('message 1');
    systemUnderTest.add('message 2');

    // Act
    systemUnderTest.clear();

    // Assert
    expect(systemUnderTest.messages.length).toEqual(0);
  })
})
