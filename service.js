import {
  addEventListener,
  play,
  pause,
  destroy,
  skipToNext,
  skipToPrevious,
  seekTo,
  getPosition,
} from 'react-native-track-player';

module.exports = async function () {
  addEventListener('remote-play', () => play());

  addEventListener('remote-pause', () => pause());

  addEventListener('remote-stop', () => destroy());

  addEventListener('remote-next', () => skipToNext());

  addEventListener('remote-previous', async (param) => skipToPrevious());
  addEventListener('remote-jump-forward', async ({interval}) => {
    const position = await getPosition();
    seekTo(position + interval);
  });
  addEventListener('remote-jump-backward', async ({interval}) => {
    const position = await getPosition();
    seekTo(position - interval);
  });
  addEventListener('remote-seek', ({position}) => seekTo(position));
};
