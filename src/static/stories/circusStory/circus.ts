import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img1 from './Friends-Circus-no-templates.png';
//import img1 from './Friends-Circus_with-templates.png';

const a1 = require('./audio/SPS_6_1.mp3');
const a2 = require('./audio/SPS_6_2.mp3');
const a3 = require('./audio/SPS_6_3.mp3');
const a4 = require('./audio/SPS_6_4.mp3');
const a5 = require('./audio/SPS_6_5.mp3');
const a6 = require('./audio/SPS_6_6.mp3');
const a7 = require('./audio/SPS_6_7.mp3');
const a8 = require('./audio/SPS_6_8.mp3');
const a9 = require('./audio/SPS_6_9.mp3');
const a10 = require('./audio/SPS_6_10.mp3');
const a11 = require('./audio/SPS_6_11.mp3');
const a12 = require('./audio/SPS_6_12.mp3');
const a13 = require('./audio/SPS_6_13.mp3');
const a14 = require('./audio/SPS_6_14.mp3');
const a15 = require('./audio/SPS_6_15.mp3');
const a16 = require('./audio/SPS_6_16.mp3');
const a17 = require('./audio/SPS_6_17.mp3');
const a18 = require('./audio/SPS_6_18.mp3');
const a19 = require('./audio/SPS_6_19.mp3');
const a20 = require('./audio/SPS_6_20.mp3');
const a21 = require('./audio/SPS_6_21.mp3');
const a22 = require('./audio/SPS_6_22.mp3');
const a23 = require('./audio/SPS_6_23.mp3');
const a24 = require('./audio/SPS_6_24.mp3');
const a25 = require('./audio/SPS_6_25.mp3');
const a26 = require('./audio/SPS_6_26.mp3');
const a27 = require('./audio/SPS_6_27.mp3');
const a28 = require('./audio/SPS_6_28.mp3');
const a29 = require('./audio/SPS_6_29.mp3');
const a30 = require('./audio/SPS_6_30.mp3');
const a31 = require('./audio/SPS_6_31.mp3');
const a32 = require('./audio/SPS_6_32.mp3');
const a33 = require('./audio/SPS_6_33.mp3');

const story: IStory = {
  title: 'The Friends\' Circus',
  id: 4,
  sections: [
    {
      text:
        ``,
      audio: a1,
      part: 1,
      id: `A1`,
      wordCategories: WordCategory.FRIENDS,
      imgPositions: [{
          top: 62,
          left: 44.5,
          width: 15,
          part: 1,
        }]
      },{
      text:
        ` had been too sick to go to the circus, so all the friends decided to have a special kid circus just for `,
      audio: a2,
      wordCategories: [],
      id: 'A1',
      part: 1,
      imgPositions: []
    },{
      text:
        `, though they let other kids come to watch, and grownups too.`,
      audio: a3,
      wordCategories: WordCategory.FRIENDS,
      id: 'B1',
      part: 1,
      imgPositions: [{
          top: 52,
          left: 85,
          rotate: 0,
          scale: .98,
          part: 1,
        }]
      },{
      text:
        ` handed out special colored tickets and everyone in the audience 
        had to put one ticket in the basket so `,
      audio: a4,
      id: `B1`,
      wordCategories: [],
      part: 1,
      imgPositions: []
    },{
      text:
        ` could count the attendance and know how many people had come. For stilts, `,
      audio: a5,
      wordCategories: WordCategory.FRIENDS,
      id: 'C1',
      part: 1,
      imgPositions: [{
          top: 6,
          left: 37,
          part: 1,
        }]
      },{
      text:
        ` got two tin cans the very same size and made holes to put strings through 
        and tie tight over both shoes, and then `,
      audio: a6,
      wordCategories: WordCategory.FRIENDS,
      id: 'C1',
      part: 1,
      imgPositions: []
    },{
      text:
        ` stood on top of the can-stilts and walked slowly and carefully around every one, 
        and even walked up some steps and back down again. To be an acrobat`,
      audio: a7,
      id: `D1`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      imgPositions: [{
          top: 13,
          left: 86,
          part: 1,
          width: 14,
        }]
      },{
      text:
        ` jumped off a box painted like some `,
      audio: a8,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.CLOTHES,
      ],
      id: 'L',
      part: 1,
      imgPositions: [{
          top: 40,
          left: 88,
          rotate: 0,
          scale: .85,
          part: 1,
        }],
      },{
      text:
        ` to land on a teeter-totter thing that flipped this `,
      audio: a9,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.CLOTHES,
      ],
      id: 'M',
      part: 1,
      imgPositions: [{
          top: 40,
          left: 58,
          part: 1,
        }]
    },{
      text:
        ` in a loopy-loop that flipped over `,
      audio: a10,
      id: `E1`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      imgPositions: [{
          top: 40,
          left: 46.5,
          part: 1,
        }]
    },{
      text:
        ` and landed in a net with `,
      id: `F1`,
      audio: a11,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      imgPositions: [{
          top: 35,
          left: 18,
          part: 1,
        }]
     },{
      text:
        ` standing ready to catch it if it missed. To be wild animal trainers `,
      audio: a12,
      id: `G1`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      imgPositions: [{
          top: 8,
          left: 48,
          part: 1,
        }]
    },{
      text:
        ` and `,
      audio: a13,
      id: `H1`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      imgPositions: [{
          top: 10,
          left: 73,
          part: 1,
        }]
    },{
      text:
        ` got three boxes, and `,
      audio: a14,
      id: `G1`,
      wordCategories: WordCategory.FRIENDS,
      imgPositions: [],
      part: 1,
    },{
      text:
        ` helped the `,
      audio: a15,
      id: `N`,
      wordCategories: WordCategory.ANIMALS,
      part: 1,
      imgPositions: [{
          top: 14,
          left: 63,
          rotate: 0,
          scale: .85,
          part: 1,
        }]
    },{
      text:
        ` stand up straight on the first one, and then turn all around,
         then turn around the opposite way, and then helped the`,
      audio: a16,
      id: `N`,
      wordCategories: WordCategory.ANIMALS,
      part: 1,
    },{
      text:
        ` jump from the first box to the second then the third, and back again.
        And `,
      audio: a17,
      id: `H1`,
      wordCategories: WordCategory.FRIENDS,
      imgPositions: [],
      part: 1,
    },{
      text:
        ` tied a little `,
      audio: a18,
      id: `P`,
      wordCategories: WordCategory.ANIMALS,
      part: 1,
      imgPositions: [{
          top: 13,
          left: 55.5,
          rotate: 0,
          scale: .5,
          part: 1,
        }],
    },{
      text:
        ` to the back of the `,
      audio: a19,
      id: 'Q',
      wordCategories: WordCategory.ANIMALS,
      part: 1,
      imgPositions: [{
          top: 19,
          left: 55.5,
          part: 1,
        }]
    },{
      text:
        ` so it could ride, and then showed the `,
      audio: a20,
      id: 'P',
      wordCategories: WordCategory.ANIMALS,
      part: 1,
    },{
      text:
        ` how to run curving all around the boxes, between, in and out,
         and round and round, and then with the `,
      audio: a21,
      id:'Q',
      wordCategories: WordCategory.ANIMALS,
      part: 1,
    },{
      text:
        ` rider hop up and leap completely over the top of all three boxes. `,
      audio: a22,
      id: `J`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
      imgPositions: [{
          top: 16,
          left: 23.5,
          rotate: 0,
          scale: .95,          
          part: 1,
        }]
    },{
      text:
        ` got there late, but brought face paint to be a clown put on and a goofy `,
      audio: a23,
      id: `R`,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.VEHICLES],
      part: 1,
      imgPositions: [{
          top: 9,
          left: 23.5,
          rotate: 0,
          scale: .95,
          part: 1,
        }]
    },{
      text:
        ` to wear as a hat and a toy `,
      audio: a24,
      id: `S`,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.VEHICLES],
      part: 1,
      imgPositions: [{
          top: 27,
          left: 21.5,
          rotate: 0,
          scale: .55,
          part: 1,
        }]
    },{
      text:
        ` for one shoe and a toy `,
      audio: a25,
      id: `T`,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.VEHICLES],
      imgPositions: [{
          top: 27,
          left: 25.5,
          rotate: 0,
          scale: .55,
          part: 1,
        }],
      part: 1,
    },{
      text:
        ` for the other, then did funny walks
         and somersaults and pretended to be afraid of the `,
      audio: a26,
      id: `Aa`,
      wordCategories: [
        WordCategory.ANIMALS,
      ],
      imgPositions: [{
          top: 53,
          left: 37,
          part: 1,
        }],
      part: 1,
    },{
      text:
        ` and the `,
      audio: a27,
      id: `Ca`,
      wordCategories: [
        WordCategory.ANIMALS,
      ],
      imgPositions: [ {
          top: 49,
          left: 9,
          part: 1,
        }],
      part: 1,
    },{
      text:
        ` and spread legs wide for them to run under
         and kept tumbling over and over trying to catch them. `,
      audio: a28,
      id: `K`,
      wordCategories: WordCategory.FRIENDS,
      imgPositions: [{
          top: 57,
          left: 23.5,
          part: 1,
        }],
      part: 1,
    },{
      text:
        ` practiced and practiced and surprised everyone by juggling one `,
      audio: a29,
      id: `U`,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.VEHICLES],
      imgPositions: [{
          top: 53,
          left: 17,
          rotate: 0,
          scale: .65,
          part: 1,
        }],
      part: 1,
    },{
      text:
        ` and one `,
      audio: a30,
      id: `V`,
      wordCategories: [
        WordCategory.CLOTHES,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS],
        imgPositions: [{
            top: 48,
            left: 23.5,
            rotate: 0,
            scale: .65,
            part: 1,
          }],
        part: 1,
    },{
      text:
        ` and one `,
      audio: a31,
      id: `W`,
      wordCategories: [
        WordCategory.CLOTHES,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS],
      imgPositions: [{
          top: 53,
          left: 29,
          rotate: 0,
          scale: .65,
          part: 1,
        }],
      part: 1,
    },{
      text:
        `, and only dropped them four times in three tries!
        The friends all had the most wonderfulest increduliciousest
         fun, and all the kids and grownups in the audience too, and`,
      audio: a32,
      id: `A1`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },{
      text:
        ` especially enjoyed the friends’ circus extra more than anybody
         because the friend’s circus was mostly, particularly,
          extra-specially for `,
      audio: a33,
      id: `A1`,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },{
      text:
        ` `,
      audio: a33,
      id: `00`,
      wordCategories: [],
      part: 1,
    }],
  parts: [
    {
      backgroundImg: img1,
      id: 1,
    }
  ]
};

export default story;