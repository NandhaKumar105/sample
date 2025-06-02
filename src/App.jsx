import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import useSound from "use-sound";
import clickSound from "./click.mp3";
import { Widget } from '@typeform/embed-react';

function App() {

 const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ x, y })
  })

  const { width, height } = useWindowSize()

   const [play] = useSound(clickSound);

  return (
    <>
     <div class="elfsight-app-c4c0055a-0ef1-4f3e-a683-2144c01899c1" data-elfsight-app-lazy></div>
   <h2>hello</h2>
   <a href="/files/sample.pdf" download>
  Download PDF
</a> <br/>

 


  

   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste tempora laboriosam nostrum vitae similique, hic perspiciatis cum veritatis dolores eligendi quo dignissimos qui nemo quaerat! Nobis modi recusandae animi?
     <a href="https://wa.me/1234567890" target="_blank">whats app</a><br/>
    <a href="https://m.me/yourpage" target="_blank">messenger</a><br/>
    <a href="https://t.me/yourusername" target="_blank">telegram</a><br/>
    <a href="mailto:you@example.com?subject=verification">email</a><br/>

    <div class="elfsight-app-53727c92-cf2b-4e25-a858-65fbb2bde3fe" data-elfsight-app-lazy></div>

     <p>Microphone: {listening ? '🎙️ On' : '🔇 Off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Transcript: {transcript}</p>

       <button onClick={play}>
      🔊 Click me for sound!
    </button>

    <a href="https://feedback.fish/your-id" target="_blank" rel="noreferrer">
  Give Feedback
</a>


       <animated.div
      {...bind()}
      style={{
        x,
        y,
        width: 100,
        height: 100,
        backgroundColor: 'hotpink',
        borderRadius: 8,
        touchAction: 'none',
        position: 'absolute',
      }}
    />

     <Confetti
      width={width}
      height={height}/>



   
    
    
    </>
     
  )
}

export default App
