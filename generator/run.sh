
# ffmpeg -i ../public/media/2022-02-03-first-start/hello.wav -vn -ar 44100 -ac 2 -b:a 192k ../public/media/2022-02-03-first-start/hello.mp3



# --- episode 0 ---

# node process.js "../content/2022-02-04-finding-the-format/00-episode-zero.md"
# node tts.js "../content/2022-02-04-finding-the-format/00-episode-zero.xml" 

# ffmpeg -i ../public/media/2022-02-04-finding-the-format/00-episode-zero.wav -vn -ar 44100 -ac 2 -b:a 192k ../public/media/2022-02-04-finding-the-format/00-episode-zero.mp3


# --- 

# node process.js "../content/2022-02-05-building-a-voice/intonation-test.md"
# node tts.js "../content/2022-02-05-building-a-voice/intonation-test.xml" 

# ffmpeg -i ../public/media/2022-02-05-building-a-voice/intonation-test.wav -vn -ar 44100 -ac 2 -b:a 192k ../public/media/2022-02-05-building-a-voice/intonation-test.mp3



# --- episode 1 ---

# node process.js "../content/2022-02-05-building-a-voice/SS01-E01-test.md"
# node tts.js "../content/2022-02-05-building-a-voice/SS01-E01-test-000.xml" 
# node tts.js "../content/2022-02-05-building-a-voice/SS01-E01-test-001.xml"

# sox ../public/media/2022-02-05-building-a-voice/SS01-E01-test-000.wav ../public/media/2022-02-05-building-a-voice/SS01-E01-test-001.wav ../public/media/2022-02-05-building-a-voice/SS01-E01-test.wav     

# ffmpeg -i ../public/media/2022-02-05-building-a-voice/SS01-E01-test.wav -vn -ar 44100 -ac 2 -b:a 192k ../public/media/2022-02-05-building-a-voice/SS01-E01-test.mp3
