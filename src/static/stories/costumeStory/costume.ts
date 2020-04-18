import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img from './Wacky-Costume-no-templates.png';
//import img from './Wacky-Costume2-with-templates.png';

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
    },
    {
      text: 
        `, but the spelling kids shared and traded different costume parts so their pets all
        looked really strange and weird and kind of especially — wondersome!  Except —`,
      audio: a4,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text:
        ` didn’t plan to mean to intend to break the rule, or be really naughty,
        just maybe a tiny bit mischievous, so`,
      audio: a5,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` convinced`,
      audio: a6,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: 
        ` it would be okay if the costume wasn’t scary all by itself,
        only just scary if people decided to be frightened, and if people decided to,`,
      audio: a7,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` decided that`,
      audio: a8,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` wasn’t to blame. Uh-hunh.`,
      audio: a9,
      wordCategories: WordCategory.FRIENDS,
    },
    // friend costume 1
    {
      text: ` went to the party dressed as a`,
      audio: a10,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPos: {
        top: 25,
        left: 44,
      }
    },
    // animal parts 1
    {
      text: `, and brought a pet`,
      audio: a11,
      wordCategories: [
        WordCategory.HEAD,
      ],
      imgPos: {
        top: 37,
        left: 30.6,
        width: 12.7,
      }
    },
    {
      text: ` who looked very interesting with a`,
      audio: a12,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPos: {
        top: 37,
        left: 30.6,
        width: 12.7,
      }
    },
    {
      text: ` body and a`,
      audio: a13,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPos: {
        top: 37,
        left: 30.6,
        width: 12.7,
      }
    },
    {
      text: ` tail.`,
      audio: a14,
      wordCategories: WordCategory.FRIENDS,
    },
    // friend costume 2
    {
      text: ` came costumed as a`,
      audio: a15,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPos: {
        top: 31,
        left: 76,
      }
    },
    // animal with parts 2
    {
      text: `, and had a pet`,
      audio: a16,
      wordCategories: [
        WordCategory.HEAD,
      ],
      imgPos: {
        top: 60,
        left: 77.4,
        width: 12.7,
      }
    },
    {
      text: ` who looked great with a`,
      audio: a17,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPos: {
        top: 60,
        left: 77.4,
        width: 12.7,
      }
    },
    {
      text: ` tail and a`,
      audio: a18,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPos: {
        top: 60,
        left: 77.4,
        width: 12.7,
      }
    },
    {
      text: ` middle.`,
      audio: a19,
      wordCategories: WordCategory.FRIENDS,
    },
    // friend costume 3
    {
      text: ` thought and wondered and cogitated and finally decided to be a`,
      audio: a20,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPos: {
        top: 40,
        left: 88,
      }
    },
    // animal parts 3
    {
      text: `, and brought a strange pet`,
      audio: a21,
      wordCategories: [
        WordCategory.HEAD,
      ],
      imgPos: {
        top: 76,
        left: 66,
        width: 12.7,
      }
    },
    {
      text: ` with`,
      audio: a22,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPos: {
        top: 76,
        left: 66,
        width: 12.7,
      }
    },
    {
      text: ` tummy parts and a`,
      audio: a23,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPos: {
        top: 76,
        left: 66,
        width: 12.7,
      }
    },
    {
      text: ` tail part. And a wonderful time was had by all — until`,
      audio: a24,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` appeared in a Bigfoot Sasquatch costume! Which didn't scare...`,
      audio: a25,
      wordCategories: WordCategory.FRIENDS
    },{
      text: ` Which didn’t scare `,
      id: 2,
       audio: a1,
      wordCategories: WordCategory.FRIENDS,
      imgPos: {
          top: 179,
          left: 8,
          width: 40,
        }
    },{
      text: ` or `,
      id: 3,
      audio: a26,
      wordCategories: WordCategory.FRIENDS,
      imgPos: {
          top: 214,
          left: 356,
          width: 40,
        }
    },{
      text: ` or `,
      id: 4,
      audio: a27,
      wordCategories: WordCategory.FRIENDS,
      imgPos: {
          top: 214,
          left: 299,
          width: 40,
        }
    },{
      //3parter at the top
      text:
      ` they didn’t decide to befrightened—but those poor pets didn’t know they could decide,
      and justgothowlishouslyscared without even thinking about it! The `,
      audio: a28,
      wordCategories: [
        WordCategory.HEAD,
        WordCategory.MIDDLE,
        WordCategory.TAIL],
        imgPos: {
            top: 80,
            left: 170,
            width: 12.7, //51
          }
          //body 76,158,51
          //head 70, 141,
    },{
      //3parter by cake
      text: ` spilled the fruit punch bowl and the `,
      audio: a29,
      wordCategories:  [
        WordCategory.HEAD,
        WordCategory.MIDDLE,
        WordCategory.TAIL,],
      imgPos: { //tail
          top: 34,
          left: 29,
          width: 13,
        }
        //body 33, 95,51
        //head 33,81,51
    },{
      //3parter at bottom
      text:
      ` tumbled into the big party chocolate angel-food cake and the `,
      audio: a30,
      wordCategories: [
        WordCategory.HEAD,
        WordCategory.MIDDLE,
        WordCategory.TAIL,],
      imgPos: {
          top: 189,
          left: 121,
          width: 12.7,
          //body 176,109,
          //head 163,97
        }
    },{
      text:
      `  knocked over the treats table and in all the commotion `,
      id: 2,
      audio: a31,
      wordCategories: WordCategory.FRIENDS,
    },{
      //item being hid behind
      text: ` hid behind the `,
      audio: a32,
      wordCategories:  [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF],
      imgPos: {
          top: 76,
          left: 66,
          width: 12.7,
        }
    },{
      text: ` , and `,
      id: 3,
      audio: a33,
      wordCategories: WordCategory.FRIENDS,
    },{
      text: ` peeeeked out of the`,
      audio: a34,
      wordCategories:  [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF],
        imgPos: {
            top: 76,
            left: 66,
            width: 12.7,
          }
    },{
      text: ` ,and `,
      id: 4,
      audio: a35,
      wordCategories: WordCategory.FRIENDS,
    },{
      text: ` sneaked under the `,
      audio: a36,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF],
        imgPos: {
            top: 76,
            left: 66,
            width: 12.7,
          }
    },{
      text: ` , and when the grown-ups rushed in `,
      id: 5,
      audio: a37,
      wordCategories: WordCategory.FRIENDS,
      imgPos: {
          top: 76,
          left: 66,
          width: 12.7,
        }
    },{
      text:
      ` thought it was a very good time to hide in a costume, 
      only maybe not in a BigfootSasquatch costume. And the grownups made `,
      id: 5,
      audio: a38,
      wordCategories: WordCategory.FRIENDS,
    },{
      text:
      ` keep that costume on and do all the work all alone to wipe up the fruit 
      punch and clean up the spilled cake and tidy up the treats table. And `,
      id: 5,
      audio: a39,
      wordCategories: WordCategory.FRIENDS,
    },{
      text:
      ` decided not to decide again that it would be okay fun to decide to scare anybody, whether they decided to be scared or not `,
      audio: a40,
      wordCategories: []
    }
  ],
  img,
}

export default story;