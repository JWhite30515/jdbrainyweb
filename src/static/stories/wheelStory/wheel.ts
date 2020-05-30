import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img1 from './blank.png';

const a1 = require('./audio/SPS_4_1.mp3');
const a2 = require('./audio/SPS_4_2.mp3');
const a3 = require('./audio/SPS_4_3.mp3');
const a4 = require('./audio/SPS_4_4.mp3');
const a5 = require('./audio/SPS_4_5.mp3');
const a6 = require('./audio/SPS_4_6.mp3');
const a7 = require('./audio/SPS_4_7.mp3');
const a8 = require('./audio/SPS_4_8.mp3');
const a9 = require('./audio/SPS_4_9.mp3');
const a10 = require('./audio/SPS_4_10.mp3');
const a11 = require('./audio/SPS_4_11.mp3');
const a12 = require('./audio/SPS_4_12.mp3');
const a13 = require('./audio/SPS_4_13.mp3');
const a14 = require('./audio/SPS_4_14.mp3');
const a15 = require('./audio/SPS_4_15.mp3');
const a16 = require('./audio/SPS_4_16.mp3');
const a17 = require('./audio/SPS_4_17.mp3');
const a18 = require('./audio/SPS_4_18.mp3');
const a19 = require('./audio/SPS_4_19.mp3');
const a20 = require('./audio/SPS_4_20.mp3');
const a21 = require('./audio/SPS_4_21.mp3');
const a22 = require('./audio/SPS_4_22.mp3');
const a23 = require('./audio/SPS_4_23.mp3');
const a24 = require('./audio/SPS_4_24.mp3');
const a25 = require('./audio/SPS_4_25.mp3');
const a26 = require('./audio/SPS_4_26.mp3');
const a27 = require('./audio/SPS_4_27.mp3');
const a28 = require('./audio/SPS_4_28.mp3');
const a29 = require('./audio/SPS_4_29.mp3');
const a30 = require('./audio/SPS_4_30.mp3');
const a31 = require('./audio/SPS_4_31.mp3');

const story: IStory = {
  title: 'Magic Wheels',
  id: 5,
  sections: [
    {
      text:
        `Suppose you had a favorite trike or bike or wagon or skateboard
         or skates or`,
      audio: a1,
      part: 1,
      id: `A`,
      wordCategories: [
        WordCategory.TOYS,
        WordCategory.VEHICLES],      
      imgPositions: [{
          top: 63,
          left: 20,
          part: 1,
          width: 14
      }]
    },{
      text:
        ` with wheels. Suppose one night a tricky, magical, mischievous `,
      audio: a2,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.WATER_ANIMALS,
        WordCategory.ANIMALS,
        WordCategory.BIRDS],
      id: 'C',
      part: 1,
      imgPositions: [{
          top: 29,
          left: 10,
          part: 1,
      }]
    },{
      text:
        ` enchanted the wheels with strange super powers so you could ride
        anywhere in the whole wide world, or out of the world. Anywhere— but the
        special rule is, you must always keep your eyes closed and see everything just
        with your imagination.
        Would you ride to the zoo and visit one of your very favorite animals?
        Wouldn’t it be wonderful to visit a nice `,
      audio: a3,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.WATER_ANIMALS,
        WordCategory.ANIMALS,
        WordCategory.BIRDS],
      id: 'D',
      part: 1,
      imgPositions: [
        {
          top: 37,
          left: 24,
          part: 1,
        }
      ]
    },
    {
      text:
        `! Would you pet it? What
        would that feel like? What it would smell like? If it was gobbling down piles of `,
      audio: a4,
      id: `E`,
      wordCategories: WordCategory.FOOD,
      part: 1,
      imgPositions: [{
          top: 37,
          left: 47,
          part: 3,
          width: 14,
      }]
    },{
      text:
        ` and offered to share—would you eat some?
        Would you fly up and way over some. `,
      audio: a5,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      id: 'G',
      part: 2,
      imgPositions: [{
          top: 19,
          left: 44,
          part: 1,
      }]
    },{
      text:
        ` and then far above
        some big `,
      audio: a6,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      id: 'J',
      part: 2,
      imgPositions: [{
          top: 14,
          left: 60,
          part: 1,
      }]
    },{
      text:
        ` and over lots of sea water to a desert island? If your
        magical wheels glided fast over the sea waves, what would the water spray feel
        like on your `,
      audio: a7,
      id: `Ka`,
      wordCategories: WordCategory.BODY_PARTS,
      part: 2,
      imgPositions: [{
          top: 33,
          left: 76,
          part: 3,
          width: 14,
      }]
    },{
      text:
        ` and `,
      audio: a8,
      wordCategories: [
        WordCategory.BODY_PARTS
      ],
      id: 'Kb',
      part: 2,
      imgPositions: [{
          top: 43,
          left: 70,
          part: 1,
      }]
    },{
      text:
        ` and `,
      audio: a9,
      wordCategories: [
        WordCategory.BODY_PARTS
      ],
      id: 'Kc',
      part: 2,
      imgPositions: [{
          top: 29,
          left: 82,
          part: 1,
      }]
    },{
      text:
        `? On the beach would you walk barefoot
        in warm squishy sand and look for a lost `,
      audio: a10,
      id: `La`,
      wordCategories: [
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF],
      part: 2,
    },{
      text:
        ` washed ashore by the
        surf and waves, or maybe dig in the sand to find some lost `,
      id: `Lb`,
      audio: a11,
      wordCategories: [
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF],
      part: 2,
      imgPositions: [{
          top: 45,
          left: 34,
          part: 2,
      }],
    },{
      text:
        `. Maybe your wheels would dive you deep
         under the salty water to watch some lazy `,
      audio: a12,
      id: `N`,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.PRETEND,
        WordCategory.PEOPLE],
      imgPositions: [{
          top: 66,
          left: 34,
          part: 2,
      }],
      part: 3,
    },{
      text:
        ` swim by. Some huge `,
      audio: a13,
      id: `P`,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES],
      part: 3,
    },{
      text:
        ` bigger than a
        bus might float past an octopus swirling its eight arms that never tangle, and a big`,
      audio: a14,
      id: `Q`,
      wordCategories: [
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES],
      imgPositions: [{
          top: 45,
          left: 51,
          part: 3,
      }],
      part: 3,
      duplicateId: 'person_2_present_2'
    },{
      text:
        ` leap high out of the water and splash back down, and
        you’d feel the underwater splashy waves on your body—and maybe see a strange
        sea`,
      audio: a15,
      id: `R`,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS],
      imgPositions: [
        {
          top: 67,
          left: 48,
          part: 2,
        }
      ],
      part: 3,
      duplicateId: 'person_2_present_1'
    },{
      text:
        ` Your enchanted wheels might fly you so high in the sky that you could feel
        the cool swirly wind on your `,
      audio: a16,
      id: `S`,
      wordCategories: WordCategory.BODY_PARTS,
      part: 4,
    },{
      text:
        ` and your `,
      audio: a17,
      id: `U`,
      wordCategories: WordCategory.CLOTHES,
      imgPositions: [
        {
          top: 66,
          left: 61,
          part: 2,
        }
      ],
      part: 4,
      duplicateId: 'person_3_present_1'
    },{
      text:
        `might blow away, and you’d
        float through a cloud shaped like a soft `,
      audio: a18,
      id: `V`,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      imgPositions: [
        {
          top: 47,
          left: 64,
          part: 2,
        }
      ],
      part: 4,
    },{
      text:
        ` or glide through misty damp fog. You could hold out your `,
      audio: a19,
      id: 'W',
      wordCategories: WordCategory.BODY_PARTS,
      part: 4,
    },{
      text:
        ` and a little `,
      audio: a20,
      id: 'X',
      wordCategories: WordCategory.BIRDS,
      part: 4,
    },{
      text:
        `flying by could sit there to rest, cock its eye in your direction, and wonder what
        kind of bird you might be.
        Your magical wheels could roll you deep down into underground caves
        where all around you’d see nothing but rocks shaped like a little `,
      audio: a21,
      id:'Y',
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      part: 5,
    },{
      text:
        ` or some `,
      audio: a22,
      id: `Z`,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      part: 5,
    },{
      text:
        ` or a ginorimous `,
      audio: a23,
      id: `Aa`,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      imgPositions: [{
          top: 65,
          left: 3,
          part: 3,
      }],
      part: 5,
    },{
      text:
        `. You could travel so far back you hear
        nothing but silence until you pick up two rocks, maybe one kind of `,
      audio: a24,
      id: `Cc`,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      imgPositions: [{
          top: 78,
          left: 19,
          part: 3,
      }],
      part: 5,
    },{
      text:
        `-like, another kind of `,
      audio: a25,
      id: `Dd`,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.CLOTHES,
        WordCategory.VEHICLES,
        WordCategory.PLACES,
        WordCategory.OUTDOORS],
      part: 5,
    },{
      text:
        ` already has an old -like, and hit them together to hear the
        echoes echoes echoes click farther farther farther awaaaaaay.
        Would you see any creatures at all in a deep cave? If you had a flashlight maybe
        you’d see a dark `,
      audio: a26,
      id: `Ee`,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS],
      imgPositions: [{
          top: 67,
          left: 36,
          part: 3,
      }],
      part: 5,
    },{
      text:
        `, and won’t play with the new one, but really likes , or maybe a hiding `,
      audio: a27,
      id: `Gg`,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS],
      imgPositions: [{
          top: 76,
          left: 52,
          part: 3,
      }],
      part: 5,
    },{
      text:
        `. Would you ride far, far back in time and visit the dinosaurs, and maybe
        bring back a little baby dinosaur `,
      audio: a28,
      id: `Jj`,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS],
      part: 6,
    },{
      text:
        ` to be your pet? Would you hide it
        under your bed and secretly feed it some `,
      audio: a29,
      id: `Kk`,
      wordCategories: WordCategory.FOOD,
      part: 6,
    },
    {
      text:
        ` for dinner? Would you ever tell
        anyone about your strange and wonderful pet dinosaur `,
      audio: a30,
      id: `Jj`,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS],
      imgPositions: [{
          top: 66,
          left: 69,
          part: 3,
      }],
      part: 3,
    },{
      text:
        `, or just keep
        it hidden and secret?
        If you visited all these places on your ride you might feel awfully tired after
        a while, and want to imagine riding back home where somebody loves you. And
        after so many strange and wonderful adventures your last ride home might just
        be the very best most magical ride of all.`,
      audio: a31,
      wordCategories: [],
      part: 6,
    },
  ],
  parts: [
    {
      backgroundImg: img1,
      id: 1,
    }
  ]
};

export default story;
