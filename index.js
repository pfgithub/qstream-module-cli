const {QuestionStream, Question, Answer} = require("question-stream");
const readline = require('readline');

class StreamAsker {
  constructor(input, output){ // process.stdin, process.stdout
    this.readline = readline.createInterface({input: input, output: output});
    this._stream = new QuestionStream;
    this._stream.on("question", () => {
      // foreach answer write long description, short name, number
      process.stdout.write("" + \n);
      // answer can be short name or number
      // TODO use arrow keys instead or something
      this.readline.question("Number or Name: ", answer => {

      });
    });
  }

  addStream(stream){
    this._stream.addChild(stream);
  }

  close(){
    this.readline.close();
  }
}
