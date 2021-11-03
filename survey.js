const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of Node.js? ", (node) => {
  rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    rl.question("What's an activity you like doing? ", (activity) => {
      rl.question("What do you listen to while doing that? ", (music) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                console.log(`Thank you for your valuable feedback:\n${name} likes to ${activity} while listening to ${music}, likes to eat ${food} for ${meal}, really enjoys ${sport}, and if they had a superpower, it would be ${superpower}. ${name} thinks node is ${node}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

// Once all questions are answered, survey app should output a fully formed paragraph for their online profile
// It should then exit. The user would have to rerun the app to go through the process of generating another profile.
// ex. Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.


