(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (let prop in names) {
      const firstLetter = names[prop].toLowerCase().charAt(0);
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[prop]);
      }
      else {
        helloSpeaker.speak(names[prop]);
      }
    }
})();