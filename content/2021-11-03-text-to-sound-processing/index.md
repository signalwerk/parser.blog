<grid columns="6">

<item>

---

</item>

<item>

### 2021-11-03

</item>

<item span="4">

---

</item>

</grid>

## Text to sound processing

### Background

To get a final podcast out of a text-file there are several steps necessary. I don't only need a text-to-speech-synthesis but I also like to controll the whole podcast via text-input.

### Requirements

- Generate narration
  - text to speech
  - change pitch of speech
  - change speed of speech
- Generate sound effects
- Mix all sounds

### Generate narration

There are several text to speech services available. The focus for evaluation could be on [Microsoft (Azure)](https://web.archive.org/web/20210909031857/https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp) and [Google](https://web.archive.org/web/20211029094029/https://cloud.google.com/text-to-speech/docs/ssml). Both have excellente voices and are very active in this field. To give the speech some tweeking we can use [Rubber Band](https://breakfastquay.com/rubberband/) to adjust the pitch and speed. This could be used to make it less tonal and give it more characteristics.

### Generate sound effects

I think for the beginning there will be only a requirement to have an intro and some markers during the naration. For example if there is a definition read for a word that is not commonly used it could be «opened» and «closed» with a certain sound-effect.  
I think [jsfx](https://egonelbre.com/project/jsfx/) and [Tone.js](https://tonejs.github.io/) should be enough to do some original sounds.

### Mix all sounds

To mix all sounds togehter we could use [SoX](http://sox.sourceforge.net/sox.html). The Mix-Definition could be done with the [`par`](https://cloud.google.com/text-to-speech/docs/ssml#par) element of [`SSML`](https://www.w3.org/TR/speech-synthesis/). The spacial audio (place sounds in a virtual room) is not yet researched.

### Research

- [Rubber Band CLI](https://breakfastquay.com/rubberband/) could be used for speed and pitch changes on audio
