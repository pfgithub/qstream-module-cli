module.exports = (stdin, stdout) => {
  const {QuestionStream, Question, Answer} = require("question-stream");
  const keypress = require('keypress'); keypress(stdin);

  class Chooser {
    constructor(){
      this._queue = [];
      this.isAskingQuestion = false;
    }
    showChoice(question){
      this._queue.push(question);
      this._checkAsk();
    }
    _checkAsk() {
      if(this.isAskingQuestion) return;
      this.isAskingQuestion = true;
      if(!this._queue[0]) return;
      let choices = this._queue[0];

      choices.forEach(question => {

      });
    }
  }
  let chooser = new Chooser;

  stdin.on('keypress', (ch, key) => {
  console.log('got "keypress"', key);
  if (key &&  key.ctrl &&  key.name == 'c') {
      process.stdin.pause();
    }
  });

  //keypress.enableMouse(stdout);

  //stdin.on('mousepress', function (info) {
  //  console.log('got "mousepress" event at %d x %d', info.x, info.y);
  //});

  //process.on('exit', function () {
    // disable mouse on exit, so that the state
    // is back to normal for the terminal
  //  keypress.disableMouse(process.stdout);
  //});

  stdin.setRawMode(true);
  stdin.resume();

  class StreamAsker {
    constructor(){
      this._stream = new QuestionStream;
      this._stream.on("question", question => {
        chooser.showChoice(question);
      });
    }

    addStream(stream){
      this._stream.addChild(stream);
    }

    close(){
      this.readline.close();
    }
  }
  return StreamAsker;
}
