import SoundPlayer from './soundPlayer';

export default class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    return this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}