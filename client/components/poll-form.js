Template.pollForm.events({

  // handle the form submition
  'submit form': function(event) {

    // stop the form submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      question: event.target.question.value,
      choices: [
        { text: event.target.choice1.value, votes: 0},
        { text: event.target.choice2.value, votes: 0},
        { text: event.target.choice3.value, votes: 0}
      ]
    };

    // create the new poll
    Polls.insert(newPoll);
  }

});
