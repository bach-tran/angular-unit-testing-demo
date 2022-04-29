// A "spec" file is a file that contains tests
// Tests in the world of JavaScript are commonly referred to as "specs"

import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {

  // Represents a single test case
  it('should display weak for a strength of 5', () => {
    // AAA - Arrange, Act, Assert
    // Arrange
    let strengthPipe: StrengthPipe = new StrengthPipe();

    // Act
    let actual: string = strengthPipe.transform(5);

    // Assert
    expect(actual).toEqual('5 (weak)');
  });

  it('should display strong for a strength of 15', () => {
    // Arrange
    let strengthPipe: StrengthPipe = new StrengthPipe();

    // Act
    let actual: string = strengthPipe.transform(15);

    // Assert
    expect(actual).toEqual('15 (strong)');
  })

  it('should display unbelievable for a strength of 25', () => {
    // Arrange
    let strengthPipe: StrengthPipe = new StrengthPipe();

    // Act
    let actual: string = strengthPipe.transform(25);

    // Assert
    expect(actual).toEqual('25 (unbelievable)');
  });

})
