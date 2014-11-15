export class App {
  constructor(message = 'Who is this') {
    this.message = message;
  }
  doIt(name) {
    console.log(`${this.message}: ${name}`);
  }
};
