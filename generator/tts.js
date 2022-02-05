// (function () {

// pull in the required packages.
var sdk = require("microsoft-cognitiveservices-speech-sdk");
var readline = require("readline");
const fs = require("fs");
require("dotenv").config();

const { AZURE_SUBSCRIPTION_KEY, AZURE_SERVICE_REGION } = process.env;

const episode = process.argv[2];

// replace with your own subscription key,
// service region (e.g., "westus"), and
// the name of the file you save the synthesized audio.
var filename = episode
  .replace(/\.xml$/, ".wav")
  .replace("/content/", "/public/media/");

const text = `${fs.readFileSync(episode, "utf8")}`;

// console.log({ text });
//   const text = "Speech synthesis canceled";

// we are done with the setup

// now create the audio-config pointing to our stream and
// the speech config specifying the language.
var audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
var speechConfig = sdk.SpeechConfig.fromSubscription(
  AZURE_SUBSCRIPTION_KEY,
  AZURE_SERVICE_REGION
);


speechConfig.speechSynthesisOutputFormat =
  sdk.SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm;

// create the speech synthesizer.
var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

// The event synthesizing signals that a synthesized audio chunk is received.
// You will receive one or more synthesizing events as a speech phrase is synthesized.
// You can use this callback to streaming receive the synthesized audio.
// synthesizer.synthesizing = function (s, e) {
//   var str =
//     "(synthesizing) Reason: " +
//     sdk.ResultReason[e.result.reason] +
//     " Audio chunk length: " +
//     e.result.audioData.byteLength;
//   console.log(str);
// };

// start the synthesizer and wait for a result.
//   synthesizer.speakTextAsync(
synthesizer.speakSsmlAsync(
  text,
  function (result) {
    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      console.log("synthesis finished.");
    } else {
      console.error(
        "Speech synthesis canceled, " +
          result.errorDetails +
          "\nDid you update the subscription info?"
      );
    }
    synthesizer.close();
    synthesizer = undefined;
  },
  function (err) {
    console.trace("err - " + err);
    synthesizer.close();
    synthesizer = undefined;
  }
);
console.log("Now synthesizing to: " + filename);

//   // </code>
// })();
