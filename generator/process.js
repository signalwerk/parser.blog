const fs = require("fs");

const episode = process.argv[2];

let content = fs.readFileSync(episode, "utf8");

content = `${content}`;

const LOUDER_REGEX = /([\*]{2})(.*?)\1/g;
const LOUD_REGEX = /([\*])(.*?)\1/g;
const DEEP_REGEX = /([_])(.*?)\1/g;
const DEEPER_REGEX = /([_]{2})(.*?)\1/g;

function prosody(text, { rate, pitch, volume = 60 }) {
  let content = text;
  function open({ rate, pitch, volume }) {
    return `<prosody rate="${rate}%" pitch="${pitch}%" volume="${volume}">`;
  }
  let standard = open({ rate, pitch, volume });
  let end = `</prosody>`;

  content = content.replace(LOUDER_REGEX, (str, _, em) => {
    return `${end}${open({
      rate,
      pitch,
      volume: volume + 18,
    })}${em}${end}${standard}`;
  });
  content = content.replace(LOUD_REGEX, (str, _, em) => {
    return `${end}${open({
      rate,
      pitch,
      volume: volume + 10,
    })}${em}${end}${standard}`;
  });
  content = content.replace(DEEPER_REGEX, (str, _, em) => {
    return `${end}${open({
      rate: rate - 2,
      pitch: pitch - 12,
      volume,
    })}${em}${end}${standard}`;
  });
  content = content.replace(DEEP_REGEX, (str, _, em) => {
    return `${end}${open({
      rate: rate - 2,
      pitch: pitch - 6,
      volume,
    })}${em}${end}${standard}`;
  });

  return `${standard}${content.trim()}${end}`;
}

function speak(person, content) {
  return {
    J: `<voice name="en-GB-RyanNeural">${prosody(content, {
      rate: 0,
      pitch: -2,
    })}</voice>`,
    N: `<voice name="en-US-GuyNeural"><mstts:express-as style="newscast" >${prosody(
      content,
      { rate: 5, pitch: 0 }
    )}</mstts:express-as></voice>`,
    S: `<voice name="en-US-JennyNeural"><mstts:express-as style="assistant" >${prosody(content, {
      rate: 3,
      pitch: -1,
    })}</mstts:express-as></voice>`,
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

function processFile(text) {
  let content = text;
  content = removeComments(content);
  content = pause(content);
  content = speakerReplace("N", content);
  content = speakerReplace("J", content);
  content = speakerReplace("S", content);
  content = doc(content);

  return content;
}

const junks = content.split("--- junk ---");

junks.forEach((text, index) => {
  const content = processFile(text);

  if (junks.length > 1) {
    fs.writeFileSync(
      episode.replace(/\.md$/, `-00${index}.xml`),
      content,
      "utf8"
    );
  } else {
    fs.writeFileSync(episode.replace(/\.md$/, ".xml"), content);
  }
});
