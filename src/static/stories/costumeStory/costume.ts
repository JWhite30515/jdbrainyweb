import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img1 from './Wacky-Costume-no-templates.png';
import img2 from './Wacky-Costume2-no-templates.png';

const a1 = require('./audio/SPS_1_1 Copy.mp3');
const a2 = require('./audio/SPS_1_2 Copy.mp3');
const a3 = require('./audio/SPS_1_3 Copy.mp3');
const a4 = require('./audio/SPS_1_4 Copy.mp3');
const a5 = require('./audio/SPS_1_5 Copy.mp3');
const a6 = require('./audio/SPS_1_6 Copy.mp3');
const a7 = require('./audio/SPS_1_7 Copy.mp3');
const a8 = require('./audio/SPS_1_8 Copy.mp3');
const a9 = require('./audio/SPS_1_9 Copy.mp3');
const a10 = require('./audio/SPS_1_10 Copy.mp3');
const a11 = require('./audio/SPS_1_11 Copy.mp3');
const a12 = require('./audio/SPS_1_12 Copy.mp3');
const a13 = require('./audio/SPS_1_13 Copy.mp3');
const a14 = require('./audio/SPS_1_14 Copy.mp3');
const a15 = require('./audio/SPS_1_15 Copy.mp3');
const a16 = require('./audio/SPS_1_16 Copy.mp3');
const a17 = require('./audio/SPS_1_17 Copy.mp3');
const a18 = require('./audio/SPS_1_18 Copy.mp3');
const a19 = require('./audio/SPS_1_19 Copy.mp3');
const a20 = require('./audio/SPS_1_20 Copy.mp3');
const a21 = require('./audio/SPS_1_21 Copy.mp3');
const a22 = require('./audio/SPS_1_22 Copy.mp3');
const a23 = require('./audio/SPS_1_23 Copy.mp3');
const a24 = require('./audio/SPS_1_24 Copy.mp3');
const a25 = require('./audio/SPS_1_25 Copy.mp3');
const a26 = require('./audio/SPS_1_26 Copy.mp3');
const a27 = require('./audio/SPS_1_27 Copy.mp3');
const a28 = require('./audio/SPS_1_28 Copy.mp3');
const a29 = require('./audio/SPS_1_29 Copy.mp3');
const a30 = require('./audio/SPS_1_30 Copy.mp3');
const a31 = require('./audio/SPS_1_31 Copy.mp3');
const a32 = require('./audio/SPS_1_32 Copy.mp3');
const a33 = require('./audio/SPS_1_33 Copy.mp3');
const a34 = require('./audio/SPS_1_34 Copy.mp3');
const a35 = require('./audio/SPS_1_35 Copy.mp3');
const a36 = require('./audio/SPS_1_36 Copy.mp3');
const a37 = require('./audio/SPS_1_37 Copy.mp3');
const a38 = require('./audio/SPS_1_38 Copy.mp3');
const a39 = require('./audio/SPS_1_39 Copy.mp3');
const a40 = require('./audio/SPS_1_40 Copy.mp3');

const story: IStory = {
  title: 'The Wacky Costume Party',
  id: 1,
  sections: [
    {
      text:
        `Do you like wearing costumes and pretending to be somebody different?
        The spelling kids really do, and enjoyed the goofiest, silliest, craziest, wackiest
        mixed-up costume party-- ever! And had their pets dress up too! The only rule was
        — no... scary... costumes. Some kids dressed like a`,
      audio: a1,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
      ],
      part: 1,
    },
    {
      text: ` or`,
      audio: a2,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
      part: 1,
    },
    {
      text: ` or`,
      audio: a3,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
      part: 1,
    },
    {
      text:
        `, but the spelling kids shared and traded different costume parts so their pets all
        looked really strange and weird and kind of especially — wondersome!  Except —`,
      audio: a4,
      id: 'friend_0',
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text:
        ` didn’t plan to mean to intend to break the rule, or be really naughty,
        just maybe a tiny bit mischievous, so`,
      audio: a5,
      id: 'friend_0',
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text: ` convinced`,
      audio: a6,
      id: 'friend_0',
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text:
        ` it would be okay if the costume wasn’t scary all by itself,
        only just scary if people decided to be frightened, and if people decided to,`,
      audio: a7,
      id: 'friend_0',
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text: ` decided that`,
      audio: a8,
      id: 'friend_0',
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text: ` wasn’t to blame. Uh-hunh.`,
      audio: a9,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      id: 'friend_1',
    },
    // friend costume 1, in parts 1 and 2
    // D-1-3
    {
      text: ` went to the party dressed as a`,
      audio: a10,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPositions: [
        {
          top: 25,
          left: 44,
          part: 1,
        },
        {
          top: 55,
          left: 2,
          part: 2,
        },
      ],
      part: 1,
    },
    // animal parts 1
    {
      text: `, and brought a pet`,
      audio: a11,
      wordCategories: [
        WordCategory.HEAD,
      ],
      id: 'pet_1',
      imgPositions: [
        {
          top: 37,
          left: 30.6,
          width: 12.7,
          part: 1,
        },
        {
          top: 19,
          left: 41.5,
          rotate: 25,
          width: 12.7,
          part: 2,
        },
      ],
      part: 1,
    },
    {
      text: ` who looked very interesting with a`,
      audio: a12,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPositions: [
        {
          top: 37,
          left: 30.6,
          width: 12.7,
          part: 1,
        },
        {
          top: 19,
          left: 41.5,
          rotate: 25,
          width: 12.7,
          part: 2,
        }
      ],
      part: 1,
    },
    {
      text: ` body and a`,
      audio: a13,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPositions: [
        {
          top: 37,
          left: 30.6,
          width: 12.7,
          part: 1,
        },
        {
          top: 19,
          left: 41.5,
          rotate: 25,
          width: 12.7,
          part: 2,
        }
      ],
      part: 1,
    },
    {
      text: ` tail.`,
      audio: a14,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      id: 'friend_2',
    },
    // friend costume 2, G-1-3
    // in parts 1 and 2
    {
      text: ` came costumed as a`,
      audio: a15,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPositions: [
        {
          top: 31,
          left: 76,
          part: 1,
        },
        {
          top: 68,
          left: 73,
          rotate: 345,
          part: 2,
        }
      ],
      part: 1,
    },
    // animal with parts 2
    {
      text: `, and had a pet`,
      audio: a16,
      wordCategories: [
        WordCategory.HEAD,
      ],
      id: 'pet_2',
      imgPositions: [
        {
          top: 60,
          left: 77.4,
          width: 12.7,
          part: 1,
        },
        {
          top: 30,
          left: 28.5,
          rotate: -20,
          part: 2,
          width: 12.7,
        }
      ],
      part: 1,
    },
    {
      text: ` who looked great with a`,
      audio: a17,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPositions: [
        {
          top: 60,
          left: 77.4,
          width: 12.7,
          part: 1,
        },
        {
          top: 30,
          left: 28.5,
          rotate: -20,
          part: 2,
          width: 12.7,
        }
      ],
      part: 1,
    },
    {
      text: ` tail and a`,
      audio: a18,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPositions: [
        {
          top: 60,
          left: 77.4,
          width: 12.7,
          part: 1,
        },
        {
          top: 30,
          left: 28.5,
          rotate: -20,
          part: 2,
          width: 12.7,
        }
      ],
      part: 1,
    },
    {
      text: ` middle.`,
      audio: a19,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      id: 'friend_3',
    },
    // friend costume 3, referenced in parts 1 and 2
    {
      text: ` thought and wondered and cogitated and finally decided to be a`,
      audio: a20,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPositions: [
        {
          top: 40,
          left: 88,
          part: 1,
        },
        {
          top: 67,
          left: 88,
          rotate: 380,
          part: 2,
        }
      ],
      part: 1,
    },
    // animal parts 3
    {
      text: `, and brought a strange pet`,
      audio: a21,
      wordCategories: [
        WordCategory.HEAD,
      ],
      id: 'pet_3',
      imgPositions: [
        {
          top: 76,
          left: 66,
          width: 12.7,
          part: 1,
        },
        {
          top: 53,
          left: 31,
          rotate: 43,
          part: 2,
          width: 12.7,
        }
      ],
      part: 1,
    },
    {
      text: ` with`,
      audio: a22,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPositions: [
        {
          top: 76,
          left: 66,
          width: 12.7,
          part: 1,
        },
        {
          top: 53,
          left: 31,
          rotate: 43,
          part: 2,
          width: 12.7,
        }
      ],
      part: 1,
    },
    {
      text: ` tummy parts and a`,
      audio: a23,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPositions: [
        {
          top: 76,
          left: 66,
          width: 12.7,
          part: 1,
        },
        {
          top: 53,
          left: 31,
          rotate: 43,
          part: 2,
          width: 12.7,
        }
      ],
      part: 1,
    },
    {
      text: ` tail part. And a wonderful time was had by all — until`,
      audio: a24,
      id: 'friend_0',
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    // philip's section starts here
    {
      text: ` appeared in a Bigfoot Sasquatch costume! Which didn't scare`,
      audio: a25,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
      id: 'friend_1',
    },
    {
      text: ` or `,
      audio: a26,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
      id: 'friend_2'
    },
    {
      text: ` or `,
      audio: a27,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
      id: 'friend_3',
    },
    {
      // pet of friend 1
      text:
        ` they didn’t decide to be frightened—but those poor pets didn’t know they could decide,
      and just got howlishouslyscared without even thinking about it! The `,
      audio: a28,
      wordCategories: [WordCategory.HEAD],
      part: 2,
      id: 'pet_1',

    },
    {
      text: ` spilled the fruit punch bowl and the `,
      audio: a29,
      wordCategories: [WordCategory.HEAD],
      part: 2,
      id: 'pet_2',
    },
    {
      text:
        ` tumbled into the big party chocolate angel-food cake and the `,
      audio: a30,
      wordCategories: [WordCategory.HEAD],
      id: 'pet_3',
      part: 2,
    },
    {
      text:
        `  knocked over the treats table and in all the commotion `,
      id: 'friend_1',
      audio: a31,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      //item being hid behind
      text: ` hid behind the `,
      audio: a32,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF
      ],
      imgPositions: [
        {
          top: 76,
          left: 2,
          part: 2,
        }
      ],
      part: 2,
    },
    {
      text: `, and `,
      id: 'friend_2',
      audio: a33,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text: ` peeeeked out of the`,
      audio: a34,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF
      ],
      imgPositions: [
        {
          top: 76,
          left: 52,
          part: 2,
        }
      ],
      part: 2,
    },
    {
      text: `, and `,
      id: 'friend_3',
      audio: a35,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text: ` sneaked under the `,
      audio: a36,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF
      ],
      imgPositions: [
        {
          top: 50,
          left: 82,
          part: 2,
        }
      ],
      part: 2,
    },
    {
      text: `, and when the grown-ups rushed in `,
      id: 'friend_0',
      audio: a37,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text:
        ` thought it was a very good time to hide in a costume, 
      only maybe not in a Bigfoot Sasquatch costume. And the grownups made `,
      id: 'friend_0',
      audio: a38,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text:
        ` keep that costume on and do all the work all alone to wipe up the fruit 
      punch and clean up the spilled cake and tidy up the treats table. And `,
      id: 'friend_0',
      audio: a39,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text:
        ` decided not to decide again that it would be okay fun to decide to scare anybody, whether they decided to be scared or not.`,
      audio: a40,
      wordCategories: [],
      part: 2,
    }
  ],
  parts: [{
      backgroundImg: img1,
      id: 0,
    },
    {
      backgroundImg: img1,
      id: 1,
    },
    {
      backgroundImg: img2,
      id: 2,
    }
  ],
}

export default story;