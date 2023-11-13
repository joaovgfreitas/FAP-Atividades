interface Observer {
    update(): void;
  }
  
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
 }
  
  class Editor implements Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  class TextEditor extends Editor {
    private lines: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.lines.splice(lineNumber, 0, text);
      this.notifyObservers();
    }
  
    removeLine(lineNumber: number): void {
      if (lineNumber >= 0 && lineNumber < this.lines.length) {
        this.lines.splice(lineNumber, 1);
        this.notifyObservers();
      }
    }
  
    getLines(): string[] {
      return this.lines;
    }
  }
  
  class TextDisplay implements Observer {
    private editor: TextEditor;
  
    constructor(editor: TextEditor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
  
    update(): void {
      this.display();
    }
  
    display(): void {
      console.log('Conteúdo do Editor:');
      console.log(this.editor.getLines().join('\n'));
    }
  }
  
  const textEditor = new TextEditor();
  const textDisplay = new TextDisplay(textEditor);
  
  console.log('Digite as linhas de texto. Digite "EOF" para encerrar.');
  
  let lineNumber = 0;
  let userInput = '';
  
  while (userInput !== 'EOF') {
    userInput = prompt(`Digite a linha ${lineNumber + 1} ou "EOF" para encerrar:`) || '';
    if (userInput !== 'EOF') {
      textEditor.insertLine(lineNumber, userInput);
      lineNumber++;
    }
  }
  
  textEditor.notifyObservers(); 
  textEditor.removeObserver(textDisplay); 
  
  textEditor.notifyObservers(); 
  console.log('Conteúdo salvo no arquivo:');
  console.log(textEditor.getLines().join('\n'));