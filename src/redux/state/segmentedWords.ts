import antheadImg from '../../static/words/Segimg/ant-head.png';
import antmiddleImg from '../../static/words/Segimg/ant-middle.png';
import anttailImg from '../../static/words/Segimg/ant-tail.png';
import batheadImg from '../../static/words/Segimg/bat-head.png';
import batmiddleImg from '../../static/words/Segimg/bat-middle.png';
import battailImg from '../../static/words/Segimg/bat-tail.png';
import bugheadImg from '../../static/words/Segimg/bug-head.png';
import bugmiddleImg from '../../static/words/Segimg/bug-middle.png';
import bugtailImg from '../../static/words/Segimg/bug-tail.png';
import catheadImg from '../../static/words/Segimg/cat-head.png';
import catmiddleImg from '../../static/words/Segimg/cat-middle.png';
import cattailImg from '../../static/words/Segimg/cat-tail.png';
import copheadImg from '../../static/words/Segimg/cop-Head.png';
import copbodyImg from '../../static/words/Segimg/cop-Body.png';
import cubheadImg from '../../static/words/Segimg/cub-head.png';
import cubmiddleImg from '../../static/words/Segimg/ant-middle.png';
import cubtailImg from '../../static/words/Segimg/ant-tail.png';
import dogheadImg from '../../static/words/Segimg/Dog-head.png';
import dogmiddleImg from '../../static/words/Segimg/Dog-middle.png';
import dogtailImg from '../../static/words/Segimg/Dog-tail.png';
import elkheadImg from '../../static/words/Segimg/elk-head.png';
import elkmiddleImg from '../../static/words/Segimg/elk-middle.png';
import elktailImg from '../../static/words/Segimg/elk-tail.png';
import flyheadImg from '../../static/words/Segimg/fly-head.png';
import flymiddleImg from '../../static/words/Segimg/fly-middle.png';
import flytailImg from '../../static/words/Segimg/fly-tail.png';
import docheadImg from '../../static/words/Segimg/Doc-Head.png';
import docbodyImg from '../../static/words/Segimg/Doc-Body.png';
import elfheadImg from '../../static/words/Segimg/Elf-Head.png';
import elfbodyImg from '../../static/words/Segimg/Elf-Body.png';
import foxheadImg from '../../static/words/Segimg/Fox-head.png';
import foxmiddleImg from '../../static/words/Segimg/Fox-middle.png';
import foxtailImg from '../../static/words/Segimg/Fox-tail.png';
import galheadImg from '../../static/words/Segimg/Gal-Head.png';
import galbodyImg from '../../static/words/Segimg/Gal-Body.png';
import henheadImg from '../../static/words/Segimg/hen-head.png';
import henmiddleImg from '../../static/words/Segimg/hen-middle.png';
import hentailImg from '../../static/words/Segimg/hen-tail.png';
import kidheadImg from '../../static/words/Segimg/Kid-Head.png';
import kidbodyImg from '../../static/words/Segimg/Kid-Body.png';
import pigheadImg from '../../static/words/Segimg/pig-head.png';
import pigmiddleImg from '../../static/words/Segimg/pig-middle.png';
import pigtailImg from '../../static/words/Segimg/pig-tail.png';
import ramheadImg from '../../static/words/Segimg/Ram-head.png';
import rammiddleImg from '../../static/words/Segimg/Ram-middle.png';
import ramtailImg from '../../static/words/Segimg/Ram-tail.png';
import refheadImg from '../../static/words/Segimg/Ref-Head.png';
import refbodyImg from '../../static/words/Segimg/Ref-Body.png';

const placeholderAudio = require('../../static/words/audio/placeholder.mp3');

import { WordCategory } from '../state/wordState';

export interface ISegmentedWord {
  text: string;
  img: any;
  audio: any;
  category: WordCategory;
}

const segmentedWords: ISegmentedWord[] = [
 {
   text: 'ant-head',
   img: antheadImg,
   audio: {},
   category: WordCategory.HEAD,
 },
 {
  text: 'ant-middle',
  img: antmiddleImg,
  audio: {},
  category: WordCategory.MIDDLE,
},
{
  text: 'ant-tail',
  img: anttailImg,
  audio: {},
  category: WordCategory.TAIL,
},
{
 text: 'bat-head',
 img: batheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'bat-middle',
 img: batmiddleImg,
 audio: {},
 category: WordCategory.MIDDLE,
},
{
 text: 'bat-tail',
 img: battailImg,
 audio: {},
 category: WordCategory.TAIL,
},
{
 text: 'bug-head',
 img: bugheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'bug-middle',
 img: bugmiddleImg,
 audio: {},
 category: WordCategory.MIDDLE,
},
{
 text: 'bug-tail',
 img: bugtailImg,
 audio: {},
 category: WordCategory.TAIL,
},
{
 text: 'Cat-head',
 img: catheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'Cat-middle',
 img: catmiddleImg,
 audio: {},
 category: WordCategory.MIDDLE,
},
{
 text: 'Cat-tail',
 img: cattailImg,
 audio: {},
 category: WordCategory.TAIL,
},
{
 text: 'Cop-Body',
 img: copheadImg,
 audio: {},
 category: WordCategory.BODY,
},
{
 text: 'Cop-Head',
 img: copbodyImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'cub-head',
 img: cubheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'cub-middle',
 img: cubmiddleImg,
 audio: {},
 category: WordCategory.MIDDLE,
},
{
 text: 'cub-tail',
 img: cubtailImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'Doc-head',
 img: docheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'Doc-body',
 img: docbodyImg,
 audio: {},
 category: WordCategory.BODY,
},
{
 text: 'Dog-head',
 img: dogheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'Dog-middle',
 img: dogmiddleImg,
 audio: {},
 category: WordCategory.MIDDLE,
},
{
 text: 'Dog-tail',
 img: dogtailImg,
 audio: {},
 category: WordCategory.TAIL,
},
{
 text: 'Elf-head',
 img: elfheadImg,
 audio: {},
 category: WordCategory.HEAD,
},
{
 text: 'Elf-body',
 img: elfbodyImg,
 audio: {},
 category: WordCategory.BODY,
},
{
text: 'elk-head',
img: elkheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'elk-middle',
img: elkmiddleImg,
audio: {},
category: WordCategory.MIDDLE,
},
{
text: 'elk-tail',
img: elktailImg,
audio: {},
category: WordCategory.TAIL,
},
{
text: 'fly-head',
img: flyheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'fly-middle',
img: flymiddleImg,
audio: {},
category: WordCategory.MIDDLE,
},
{
text: 'fly-tail',
img: flytailImg,
audio: {},
category: WordCategory.TAIL,
},
{
text: 'Fox-head',
img: foxheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Fox-middle',
img: foxmiddleImg,
audio: {},
category: WordCategory.MIDDLE,
},
{
text: 'Fox-tail',
img: foxtailImg,
audio: {},
category: WordCategory.TAIL,
},
{
text: 'Gal-body',
img: galbodyImg,
audio: {},
category: WordCategory.BODY,
},
{
text: 'Gal-head',
img: galheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Hen-head',
img: henheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Hen-middle',
img: henmiddleImg,
audio: {},
category: WordCategory.MIDDLE,
},
{
text: 'Hen-Tail',
img: hentailImg,
audio: {},
category: WordCategory.TAIL,
},
{
text: 'Kid-head',
img: kidheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Kid-Body',
img: kidbodyImg,
audio: {},
category: WordCategory.BODY,
},
{
text: 'pig-Head',
img: pigheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Pig-middle',
img: pigmiddleImg,
audio: {},
category: WordCategory.MIDDLE,
},
{
text: 'Pig-tail',
img: pigtailImg,
audio: {},
category: WordCategory.TAIL,
},
{
text: 'Ram-head',
img: ramheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Ram-middle',
img: rammiddleImg,
audio: {},
category: WordCategory.MIDDLE,
},
{
text: 'Ram-tail',
img: ramtailImg,
audio: {},
category: WordCategory.TAIL,
},
{
text: 'Ref-Head',
img: refheadImg,
audio: {},
category: WordCategory.HEAD,
},
{
text: 'Ref-Body',
img: refbodyImg,
audio: {},
category: WordCategory.BODY,
}
]