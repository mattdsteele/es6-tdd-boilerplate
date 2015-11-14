class App {
  constructor(message = 'Who is this') {
    this.message = message;
  }
  doIt(name = 'Bob') {
    console.log(`${this.message}: ${name}`);
  }
}

export default App;
