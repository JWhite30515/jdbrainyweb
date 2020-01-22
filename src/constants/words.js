import apeAudio from '../static/audio/ape.mp3';

import apeImg from '../static/img/categories/ape.png';
import bearImg from '../static/img/words/bear.png';
import catImg from '../static/img/words/cat.png';
import cowImg from '../static/img/words/cow.png';

export const words = {
  'animals': [
    {
      id: 1,
      name: 'ape',
      complete: false,
      audio: apeAudio,
      img: apeImg
    },
    {
      id: 2,
      name: 'cat',
      complete: false,
      img: catImg
    },
    {
      id: 3,
      name: 'cow',
      complete: false,
      img: cowImg
    },
    {
      id: 4,
      name: 'bear',
      complete: false,
      img: bearImg
    }
  ]
}