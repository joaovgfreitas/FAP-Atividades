interface OperationStrategy {
    execute(num1: number, num2: number): number;
  }
  
  class AdditionStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  class SubtractionStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  class MultiplicationStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  class Calculator {
    private strategy: OperationStrategy;
  
    setStrategy(strategy: OperationStrategy): void {
      this.strategy = strategy;
    }
  
    executeStrategy(num1: number, num2: number): number {
      if (!this.strategy) {
        throw new Error('Estratégia não definida.');
      }
  
      return this.strategy.execute(num1, num2);
    }
  }
  
  const calculator = new Calculator();
  
  const num1 = parseInt(prompt('Digite o primeiro número:'));
  const num2 = parseInt(prompt('Digite o segundo número:'));
  const operation = prompt('Digite a operação (+ para soma, - para subtração, * para multiplicação):');
  
  switch (operation) {
    case '+':
      calculator.setStrategy(new AdditionStrategy());
      break;
    case '-':
      calculator.setStrategy(new SubtractionStrategy());
      break;
    case '*':
      calculator.setStrategy(new MultiplicationStrategy());
      break;
    default:
      throw new Error('Operação inválida.');
  }
  
  const result = calculator.executeStrategy(num1, num2);
  console.log(`O resultado da operação é: ${result}`);