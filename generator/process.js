const fs = require("fs");

const episode = process.argv[2];

let content = fs.readFileSync(episode, "utf8");

content = `${content}`;

function speak(person, content) {
  return {
    N: `<voice name="en-GB-RyanNeural"><prosody rate="0%" pitch="-2%">${content.trim()}</prosody></voice>`,
    J: `<voice name="en-US-GuyNeural"><mstts:express-as style="newscast" ><prosody rate="7%" pitch="0%">${content.trim()}</prosody></mstts:express-as></voice>`,
    S: `<voice name="en-US-AmberNeural"><prosody rate="3%" pitch="-7%">${content.trim()}</prosody></voice>`,
  }[person];
}

function doc(content) {
  return `
<speak xmlns="http://www.w3.org/2001/10/synthesis"
    xmlns:mstts="http://www.w3.org/2001/mstts"
    xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US">
${content}
</speak>`;
}

function speakerReplace(person, content) {
  const pattern = new RegExp(`^${person}:(.+)`, "gim");

  return content.replace(pattern, (str, content) => {
    console.log("replace");
    return speak(person, content);
  });
}

function removeComments(content) {
  return content.replace(/#(.+)/gi, "");
}
function pause(content) {
  return content.replace(
    /--/gi,
    `<voice name="en-US-JennyNeural"><break time="100ms" /></voice>`
  );
}

content = removeComments(content);
content = pause(content);
content = speakerReplace("N", content);
content = speakerReplace("J", content);
content = speakerReplace("S", content);
content = doc(content);

fs.writeFileSync(episode.replace(/\.md$/, '.xml'), content);
