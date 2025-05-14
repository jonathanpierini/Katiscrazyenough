
const tasks = {
  fun: [
    "Talk like a cartoon character for 2 minutes.",
    "Invent a polite insult and use it today.",
    "Dance with no music for 60 seconds.",
    "Pretend to be a waiter and take your partner's order.",
    "Make up a superhero name and act like them."
  ],
  eros: [
    "Describe your weirdest fantasy in 3 words.",
    "Whisper something forbidden to your partner.",
    "Touch a body part... blindfolded.",
    "Send a seductive text while sitting next to your partner.",
    "Look into their eyes and say the dirtiest thing that comes to mind — softly."
  ],
  foso: [
    "Remove your socks with your teeth.",
    "Lift your foot and make eye contact — say nothing.",
    "Lick something you shouldn’t (safely).",
    "Wrap your wrists with a scarf and wait 1 minute.",
    "Let your partner choose where to kiss next... using only gestures."
  ],
  random: []
};

tasks.random = [...tasks.fun, ...tasks.eros, ...tasks.foso];

let currentCategory = 'random';

function setCategory(cat) {
  currentCategory = cat;
  document.getElementById('taskBox').classList.remove('hidden');
  generateTask();
}

function generateTask() {
  const taskList = tasks[currentCategory];
  const randomIndex = Math.floor(Math.random() * taskList.length);
  document.getElementById('taskText').innerText = taskList[randomIndex];
}
