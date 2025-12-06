// Abstract classes give a general idea of a class but do not provide full implementation.
// We can achieve this in two ways:
// 1. Using the abstract class keyword
// 2. Using interfaces with the implements keyword

// using abstract
abstract class MediaPlayer {
  abstract volume: number;
  abstract play(): void;
  abstract pause(): void;
  abstract forward(): void;
}

class VLCPlayer extends MediaPlayer {
  volume: number;
  constructor(volume: number) {
    super();
    this.volume = volume;
  }

  play() {
    console.log("playing the music");
  }
  pause() {
    console.log("pausing the music");
  }
  forward(): void {
    console.log("Forwarding the music");
  }
}

const vlcPlayer = new VLCPlayer(40);
vlcPlayer.volume;
vlcPlayer.forward();
console.log("vlc", vlcPlayer);

// Same thing can be implemented by interfaces with implements keyword
interface MediaPlayer2 {
  volume: number;
  play(): void;
  pause(): void;
  forward(): void;
}

class MXPlayer implements MediaPlayer2 {
  volume: number;
  constructor(volume: number) {
    this.volume = volume;
  }

  play() {
    console.log("playing the music");
  }
  pause() {
    console.log("pausing the music");
  }
  forward(): void {
    console.log("Forwarding the music");
  }
}

const mxPlayer = new MXPlayer(40);
mxPlayer.pause();
console.log("mx", mxPlayer);
