import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img1 from './Space-Alien1.png';
import img2 from './Space-Alien2.png';
import img3 from './Space-Alien3.png';
import img4 from './Space-Alien4.png';
import img5 from './Space-Alien5.png';
//-no_landings

const a1 = require('./audio/SPS_5_1.mp3');
const a2 = require('./audio/SPS_5_2.mp3');
const a3 = require('./audio/SPS_5_3.mp3');
const a4 = require('./audio/SPS_5_4.mp3');
const a5 = require('./audio/SPS_5_5.mp3');
const a6 = require('./audio/SPS_5_6.mp3');
const a7 = require('./audio/SPS_5_7.mp3');
const a8 = require('./audio/SPS_5_8.mp3');
const a9 = require('./audio/SPS_5_9.mp3');
const a10 = require('./audio/SPS_5_10.mp3');
const a11 = require('./audio/SPS_5_11.mp3');
const a12 = require('./audio/SPS_5_12.mp3');
const a13 = require('./audio/SPS_5_13.mp3');
const a14 = require('./audio/SPS_5_14.mp3');
const a15 = require('./audio/SPS_5_15.mp3');
const a16 = require('./audio/SPS_5_16.mp3');
const a17 = require('./audio/SPS_5_17.mp3');
const a18 = require('./audio/SPS_5_18.mp3');
const a19 = require('./audio/SPS_5_19.mp3');
const a20 = require('./audio/SPS_5_20.mp3');
const a21 = require('./audio/SPS_5_21.mp3');
const a22 = require('./audio/SPS_5_22.mp3');
const a23 = require('./audio/SPS_5_23.mp3');
const a24 = require('./audio/SPS_5_24.mp3');
const a25 = require('./audio/SPS_5_25.mp3');
const a26 = require('./audio/SPS_5_26.mp3');
const a27 = require('./audio/SPS_5_27.mp3');
const a28 = require('./audio/SPS_5_28.mp3');
const a29 = require('./audio/SPS_5_29.mp3');
const a30 = require('./audio/SPS_5_30.mp3');
const a31 = require('./audio/SPS_5_31.mp3');
const a32 = require('./audio/SPS_5_32.mp3');

const story: IStory = {
	id: 6,
	title: 'The Space Alien',
	sections: [
		{
			text:
				`One Saturday evening `,
			audio: a1,
			part: 1,
			id: `A1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: [{
				top: 54,
				left: 9.5,
				width: 15,
				part: 1
			},{
				top: 6,
				left: 9.5,
				width: 15,
				part: 2
			},{
				top: 6,
				left: 9.5,
				width: 15,
				part: 3
			},{
				top: 32,
				left: 6.5,
				width: 15,
				part: 4
			},{
				top: 13,
				left: 14,
				width: 15,
				part: 5
			}]
		},{
			text:
			` and `,
			audio: a2,
			part: 1,
			id: `C1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: [{
				top: 52,
				left: 73.5,
				width: 15,
				part: 1
			},{
				top: 7,
				left: 73.5,
				width: 15,
				part: 2
			},{
				top: 7,
				left: 73.5,
				width: 15,
				part: 3
			},{
				top: 31,
				left: 75.5,
				width: 15,
				part: 4
			},{
				top: 13,
				left: 61,
				width: 15,
				part: 5			}]
		},{
			text:
			` made a tent to camp out in the backyard. They griped and whined and complained 
			to each other about a school assignment due next week: to stand in front of the 
			whole class and show pictures and talk about a special place they had visited. Neither 
			one had any special pictures of any place special, and they both just knew the teacher 
			would embarrass them, and the other kids would tease them, and Monday would be
			terrifishously, awfulishously, horrifishously bad. Feeling glum, `,
			audio: a3,
			part: 1,
			id: `A1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: []
		},{
			text:
				` snuggled tight in some blankets and `,
			audio: a4,
			part: 1,
			id: `C1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: []
		},{
			text:
				` curled up in a sleeping bag, when about midnight
				a strange-shaped shadow flickered on their tent wall.
				“What’s that” asked  `,
			audio: a5,
			part: 1,
			id: `A1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: []
		},{
			text:
				`. “Maybe some `,
			audio: a6,
			part: 1,
			id: `AA1`,
			wordCategories: [
				WordCategory.PEOPLE,
				WordCategory.FRIENDS,
				WordCategory.PRETEND,
				WordCategory.ANIMALS],
			imgPositions: [{
					top: 13,
					left: 12.5,
					width: 15,
					part: 1,
				}]
		},{
			text:
				`.”
				“Or a maybe some kind of `,
			audio: a7,
			part: 1,
			id: `BB1`,
			wordCategories: [
				WordCategory.PEOPLE,
				WordCategory.FRIENDS,
				WordCategory.PRETEND,
				WordCategory.ANIMALS],
			imgPositions: [{
					top: 14,
					left: 74.5,
					width: 15,
					part: 1,
			}]
		},{
			text:
				`,” guessed `,
			audio: a8,
			part: 1,
			id: `C1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: []
		},{
			text:
			`.
			They stuck their noses outside to find a weird looking space alien just their
			size.
			“Please help me!”
			“How?”
			“For my school project I need pictures of earth stuff, and I took a few
			pictures but I need more.”
			“Show us.”
			Space Alien punched a shiny elbow button and twisted a fancy shoulder
			dial, and Space Alien’s tummy screen displayed a glowy `,
			audio: a9,
			part: 2,
			id: `CC1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 31,
				left: 47,
				width: 9,
				part: 2
			}]
		},
		//PART 2
		{
			text:
			` “That’s a strange looking earth planet `,
			audio: a10,
			part: 2,
			id: `DD1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
					top: 72,
					left: 44.5,
					width: 15,
					part: 2
			}]
		},{
			text:
			`.”
			“Nope. Actually, a pretty nice `,
			audio: a11,
			part: 2,
			id: `CC1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: []
		},{
			text:
				`.”
				“No! Are you sure?”
				Both kids nodded yes.
				“But my sister said— I just feel so `,
			audio: a12,
			part: 2,
			id: `FF1`,
			wordCategories: [
				WordCategory.DESCRIBE,
				WordCategory.COLORS],
			imgPositions: []
		},{
			text:
				`. It makes me want to `,
			audio: a13,
			part: 2,
			id: `GG1`,
			wordCategories: [
				WordCategory.DESCRIBE,
				WordCategory.COLORS],
			imgPositions: []
		},
		//PART 3
		{
			text:
				`. 
				“Well, what about my `,
			audio: a14,
			part: 3,
			id: `HH1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 35,
				left: 43.5,
				width: 9,
				part: 3
			}]
		},{
			text:
				`?”
				“Sorry. But you’ve got a really nice `,
			audio: a15,
			part: 3,
			id: `JJ1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 72,
				left: 44.5,
				width: 15,
				part: 3
		}]
		},{
			text:
				`.”
				“I’ll fail my school project!” 
				“No way! We’ll help.”
				“What kinds of pictures do you need?”
				“Anything! Everything!”
				While everyone else in the house slept tight, the kids showed Space Alien
				lots of things—some toys, some real.
				"`,
			audio: a16,
			part: 4,
			id: `KK1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 10,
				left: 20.5,
				width: 15,
				part: 4,
			}]
		},
		//PART 4
		{
			text:
			`, I’m sure! My big brother told me.
			Big brother must have been teasing. Guess this.”
			“`,
			audio: a17,
			part: 4,
			id: `MM1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 11,
				left: 66.5,
				width: 15,
				part: 4,
			}]
		},{
			text:
			`. Absolutely positively!”
			“Nope,” “`,
			audio: a18,
			part: 4,
			id: `NN1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 69,
				left: 66.5,
				width: 15,
				part: 4,
			}]
		},{
			text:
			`.”
			Then Space Alien started to `,
			audio: a19,
			part: 4,
			id: `OO1`,
			wordCategories: WordCategory.DOING,
			imgPositions: []
		},{
			text:
			` and `,
			audio: a20,
			part: 4,
			id: `PP1`,
			wordCategories: WordCategory.DOING,
			imgPositions: []
		},{
			text:
			`.
			“Why are you doing that?”
			“That’s how we show we’re confused on my planet.”
			“We mostly just scratch our heads.”
			“What do you do when you’re angry?”
			“`,
			audio: a21,
			part: 4,
			id: `QQ1`,
			wordCategories: WordCategory.DOING,
			imgPositions: []
		},{
			text:
			`.”
			“And when you’re happy?”
			“Mostly we `,
			audio: a22,
			part: 4,
			id: `RR1`,
			wordCategories: WordCategory.DOING,
			imgPositions: []
		},{
			text:
			``,
			audio: null,
			part: 4,
			id: `A1`,
			wordCategories: [],
			imgPositions: []
		},{
			text:
			` and `,
			audio: a23,
			part: 4,
			id: `C1`,
			wordCategories: WordCategory.FRIENDS,
			imgPositions: []
		},{
			text:
			` just shook their heads.
			“Want to ride along while I check out some more freaky strange stuff?”
			“Sure!”
			Space Alien clicked heels, and a weird unearthly contraption quick-scooted
			over and hovered in the air beside their ankles.
			“What a great skateboard!”
			“Fantabulously SUPER skateboard!”
			“Space-board!”
			All three hopped on and flew away soaring high over a big `,
			audio: a24,
			part: 4,
			id: `SS1`,
			wordCategories: WordCategory.OUTDOORS,
			imgPositions: [{
				top: 70,
				left: 71.5,
				width: 15,
				part: 5
		}]
		},
		//PART 5
		{
			text:
			` and an
			even bigger `,
			audio: a25,
			part: 5,
			id: `TT1`,
			wordCategories: WordCategory.OUTDOORS,
			imgPositions: [{
				top: 66,
				left: 49.5,
				width: 20,
				part: 5
		}]
		},{
			text:
			`, curly-cueing around some `,
			audio: a26,
			part: 5,
			id: `UU1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 70,
				left: 12.5,
				width: 15,
				part: 5
		}]
		},{
			text:
			` and nearly
			knocking over an in-the-way `,
			audio: a27,
			part: 5,
			id: `VV1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 70,
				left: 32.5,
				width: 15,
				part: 5
		}]
		},{
			text:
			` Space Alien snapped picture
			after picture, `,
			audio: a28,
			part: 5,
			id: `WW1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 52,
				left: 13,
				width: 15,
				part: 5
		}]
		},{
			text:
			` and `,
			audio: a29,
			part: 5,
			id: `XX1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 52,
				left: 32,
				width: 15,
				part: 5
		}]
		},{
			text:
			` and `,
			audio: a30,
			part: 5,
			id: `YY1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 52,
				left: 52,
				width: 15,
				part: 5
		}]
		},{
			text:
			` and `,
			audio: a31,
			part: 5,
			id: `ZZ1`,
			wordCategories: [
				WordCategory.THINGS,
				WordCategory.HOUSE_STUFF,
				WordCategory.TOOLS,
				WordCategory.PLACES,
				WordCategory.OUTDOORS],
			imgPositions: [{
				top: 52,
				left: 71,
				width: 15,
				part: 5
		}]
		},{
			text:
			`.
			“That’s enough. Thanks for helping me do the best school project ever!”
			“Glad to help. But you know—”
			“What?” 
			“We’ve got our own school project due next week.”
			“About some place we’d like to visit.”
			“Do you think, maybe—”
			“Maybe—”
			“I’ll be back same time tomorrow night! Bring your cameras!”
			And they did!`,
			audio: a32,
			part: 5,
			id: ``,
			wordCategories: [],
			imgPositions: []
		},
	],
	parts: [
		{
			backgroundImg: img1,
			id: 1,
		},
		{
			backgroundImg: img2,
			id: 2,
		},
		{
			backgroundImg: img3,
			id: 3,
		},
		{
			backgroundImg: img4,
			id: 4,
		},
		{
			backgroundImg: img5,
			id: 5,
		}
	]
};

export default story;