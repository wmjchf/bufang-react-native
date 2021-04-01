// import PlayList from '@/pages/main/playList/index.js';
// import Player from '@/pages/main/player/index.js';
// import Hot from '@/pages/main/hot/index.js';
// import Person from '@/pages/main/person/index.js';
import Read from '@/pages/home/read/index.js';
import My from '@/pages/home/my/index.js';
class Data {
  constructor(data) {
    this.value = data;
  }
  //静态方法
  static getInstance(data) {
    if (!this.instance) {
      this.instance = new Data(data);
    }
    return this.instance;
  }
}

const data = [
  {
    name: 'read',
    title: '阅读',
    icon: 'book',
    component: Read,
  },
  {
    name: 'my',
    title: '我的',
    icon: 'game-controller-sharp',
    component: My,
  },
  // {
  //   name: 'playlist',
  //   title: '歌单',
  //   icon: 'book',
  //   component: PlayList,
  // },
  // {
  //   name: 'player',
  //   title: '歌手',
  //   icon: 'flag',
  //   component: Player,
  // },
  // {
  //   name: 'hot',
  //   title: '推荐',
  //   icon: 'football-outline',
  //   component: Hot,
  // },
  // {
  //   name: 'person',
  //   title: '我的',
  //   icon: 'game-controller-sharp',
  //   component: Person,
  // },
];
export default Data.getInstance(data);
