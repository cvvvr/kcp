import wangzhe from './static/rank/wangzhe.png'
import zongshi from './static/rank/zongshi.png'
import dashi from './static/rank/dashi.png'
import zhuanshi from './static/rank/zhuanshi.png'
import bojin from './static/rank/bojin.png'
import huangjin from './static/rank/huangjin.png'
import baiyin from './static/rank/baiyin.png'
import huangtong from './static/rank/huangtong.png'
import heitie from './static/rank/heitie.png'

const rankImageMap = new Map();
rankImageMap.set('wangzhe', { image:wangzhe,name:'知识王者' });
rankImageMap.set('zongshi',{ image:zongshi,name:'知识宗师' });
rankImageMap.set('dashi',{ image:dashi,name:'知识大师' });
rankImageMap.set('zhuanshi',{ image:zhuanshi,name:'知识' });
rankImageMap.set('bojin',{ image:bojin,name:'王者' });
rankImageMap.set('huangjin',{ image:huangjin,name:'王者' });
rankImageMap.set('baiyin',{ image:baiyin,name:'王者' });
rankImageMap.set('huangtong',{ image:huangtong,name:'王者' });
rankImageMap.set('heitie',{ image:heitie,name:'黑铁' });

export default rankImageMap;
