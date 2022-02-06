// https://github.com/loov/jsfx/pull/16

// https://stackoverflow.com/questions/62011452/sample-accurate-punch-in-and-punch-out-recording-using-tone-js
// tone.js

const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
const synth = new Tone.PolySynth(Tone.Synth).connect(feedbackDelay);
const now = Tone.now();
synth.triggerAttack("D4", now);
synth.triggerAttack("F4", now + 0.5);
synth.triggerAttack("A4", now + 1);
synth.triggerAttack("C5", now + 1.5);
synth.triggerAttack("E5", now + 2);
synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 3.5);

const vol = new Tone.Volume(-42).toDestination().toDestination();

const filter2 = new Tone.Filter(1500, "highpass").connect(vol);
filter2.frequency.rampTo(1000, 3.5);
const noise = new Tone.Noise().connect(filter2).start();
// https://tonejs.github.io/examples/spatialPanner
// const filter = new Tone.Filter(400, 'lowpass').toDestination();
// const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

// connect the player to the feedback delay and filter in parallel
// player.connect(filter);
// player.connect(feedbackDelay);
