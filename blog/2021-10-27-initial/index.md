## Initiate a new Podcast

## Background
Today I saw at [Zurich University of the Arts](https://www.zhdk.ch/) a course caled [Audio-Storytelling](https://web.archive.org/web/20211030221111/https://www.zhdk.ch/weiterbildung/sws/audio-storytelling-8014). Sounds interestening. I listen to Podcast since around 2005 and I always appreciate the format as a democratized form of radio.  
The course starts in about four months. That's at least some time to do preparations for my own production. 


## How I'm going to do it
I would like to go a bit a different route with my format. I'm a programmer and I would like to have the podcast in a form where a machine can (re-)create it from a source-file (text-form). This gives me the oportunitiy to constantly improve old episodes and iterate while technic, content and my own abilities evolve.


## Manifesto
* The content is in the center
* The form has to serve the content
* The tools has to serve the form


## Decision

```component
id: #init
decision: I generate a podcast episode with code.
acceptance-criteria: A pilot episode of an entirely in code generated podcast is produced
context: The general topic of the podcast should be in mathematical and computational information processing. 
consequences: 
    - #title: A title is for the podcast is found
    - #intro: An intro is produced
    - #tooling: A toolchain is found and missing parts developed
    - #content: The content for the first pilot is written.
status: ideation
```

## Research
* [Speech Synthesis Markup Language (SSML)](https://www.w3.org/TR/speech-synthesis/) is most likely the way to go.
* [Microsoft](https://web.archive.org/web/20210909031857/https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp) and [Google](https://web.archive.org/web/20211029094029/https://cloud.google.com/text-to-speech/docs/ssml) have good SSML-Support. 