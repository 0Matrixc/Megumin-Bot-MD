//Codígo creado por David Chian wa.me/5351524614

const _0x58a767=_0x3e9d;(function(_0x1eea00,_0x3ed249){const _0x3bb116=_0x3e9d,_0x18df87=_0x1eea00();while(!![]){try{const _0x2548b8=-parseInt(_0x3bb116(0xa4))/0x1+parseInt(_0x3bb116(0x94))/0x2+parseInt(_0x3bb116(0xa3))/0x3*(parseInt(_0x3bb116(0x9d))/0x4)+-parseInt(_0x3bb116(0x9c))/0x5*(-parseInt(_0x3bb116(0x82))/0x6)+parseInt(_0x3bb116(0xa9))/0x7*(parseInt(_0x3bb116(0xa0))/0x8)+-parseInt(_0x3bb116(0x84))/0x9*(-parseInt(_0x3bb116(0x75))/0xa)+-parseInt(_0x3bb116(0xaf))/0xb*(parseInt(_0x3bb116(0xb4))/0xc);if(_0x2548b8===_0x3ed249)break;else _0x18df87['push'](_0x18df87['shift']());}catch(_0x28a7f0){_0x18df87['push'](_0x18df87['shift']());}}}(_0x2273,0x53376));import _0x645923 from'fs';import _0x30498a from'path';const profilesPath='./citaperfiles.json';let media='https://telegra.ph/file/2828be47ab320e30e0a94.jpg';import _0x106456 from'dotenv';_0x106456[_0x58a767(0x96)]();const SECRET_KEY=process[_0x58a767(0x88)][_0x58a767(0x86)],loadProfiles=()=>{const _0x50579c=_0x58a767;try{let _0x1487cf=_0x645923[_0x50579c(0x7b)](profilesPath,_0x50579c(0x8e));return JSON['parse'](_0x1487cf);}catch(_0x5a3b4d){return console[_0x50579c(0xad)](_0x50579c(0x73),_0x5a3b4d),[];}},saveProfiles=_0x1220d9=>{const _0x525b86=_0x58a767;try{_0x645923[_0x525b86(0x95)](profilesPath,JSON[_0x525b86(0x9a)](_0x1220d9,null,0x2));}catch(_0x2cc7e3){console[_0x525b86(0xad)](_0x525b86(0xab),_0x2cc7e3);}},verify=()=>{const _0x269eea=_0x58a767;try{const _0x502188=JSON['parse'](_0x645923[_0x269eea(0x7b)]('./package.json',_0x269eea(0x8e)));if(_0x502188[_0x269eea(0x70)]!==_0x269eea(0xa8))return![];if(_0x502188[_0x269eea(0x98)][_0x269eea(0xa5)]!==_0x269eea(0x80))return![];if(SECRET_KEY!==_0x269eea(0x7e))return![];return!![];}catch(_0xffe937){return console['error'](_0x269eea(0xb5),_0xffe937),![];}},isUserBanned=(_0x314cb6,_0x1fa467)=>{const _0x1c734d=_0x58a767,_0x2811a8=_0x1fa467['find'](_0x58c369=>_0x58c369['id']===_0x314cb6);return _0x2811a8?_0x2811a8[_0x1c734d(0xb3)]:![];};let handler=async(_0x161eb8,{conn:_0xffce83})=>{const _0x279d9d=_0x58a767;if(!verify()){await _0xffce83['reply'](_0x161eb8[_0x279d9d(0xb0)],_0x279d9d(0x79),_0x161eb8,rcanal);return;}let _0x552e6e=loadProfiles();if(isUserBanned(_0x161eb8['sender'],_0x552e6e))return await _0xffce83['reply'](_0x161eb8[_0x279d9d(0xb0)],'🚫\x20Lo\x20sentimos,\x20pero\x20has\x20sido\x20baneado\x20y\x20no\x20puedes\x20usar\x20más\x20este\x20comando.\x0aSi\x20crees\x20que\x20esto\x20es\x20un\x20error\x20contacta\x20con\x20mi\x20creador.',_0x161eb8,rcanal);let _0x19f6dd=loadProfiles(),_0x207376=_0x19f6dd[_0x279d9d(0x99)](_0x34197a=>_0x34197a['id']===_0x161eb8['sender']);if(!_0x207376){_0x207376={'id':_0x161eb8['sender'],'nombre':null,'edad':null,'genero':null,'fotos':[],'quiero':null},_0x19f6dd['push'](_0x207376),saveProfiles(_0x19f6dd);let _0x5b7040='╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹߭̇╭ׅׄ̇─ׅ̻ׄ╮\x0a├ׁ̟̇「\x20ᴃɪᴇɳᴃᴇɲɪᴅᴏ\x20ᴀ\x20𝘾𝙄𝙏𝘼𝘽𝙊𝙊𝙈\x20」\x0a╰━┈━┈━┈≪≪✧≫≫┈━┈━┈━╯\x0a𝑬𝒔𝒕𝒆\x20𝒆𝒔\x20𝒖𝒏\x20𝒆𝒔𝒑𝒂𝒄𝒊𝒐\x20𝒑𝒂𝒓𝒂\x20𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓\x20𝒂\x20𝒕𝒖\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂\x20𝒆𝒔𝒑𝒆𝒄𝒊𝒂𝒍.';await _0xffce83[_0x279d9d(0x7f)](_0x161eb8[_0x279d9d(0xb0)],_0x5b7040,_0x279d9d(0x93)+dev,media,[[_0x279d9d(0xb6),'/nombrecita']],null,[[_0x279d9d(0x71),''+md]],_0x161eb8);}else{if(!_0x207376[_0x279d9d(0x8a)])await _0xffce83[_0x279d9d(0x7f)](_0x161eb8[_0x279d9d(0xb0)],_0x279d9d(0x97),wm,media,[[_0x279d9d(0x72),_0x279d9d(0xae)]],_0x161eb8);else{if(!_0x207376[_0x279d9d(0x90)])await _0xffce83['sendButton'](_0x161eb8[_0x279d9d(0xb0)],_0x279d9d(0xb2)+_0x207376[_0x279d9d(0x8a)]+_0x279d9d(0x83),wm,media,[['Configurar\x20Edad\x20🎂',_0x279d9d(0xac)]],_0x161eb8);else{if(!_0x207376[_0x279d9d(0xaa)])await _0xffce83['sendButton'](_0x161eb8[_0x279d9d(0xb0)],'¡𝑯𝒐𝒍𝒂\x20'+_0x207376[_0x279d9d(0x8a)]+'!\x20𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒂\x20𝒕𝒖\x20𝒈𝒆𝒏𝒆𝒓𝒐\x20𝒑𝒂𝒓𝒂\x20𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓.',wm,media,[[_0x279d9d(0xa6),_0x279d9d(0x76)],['Femenino\x20♀️','/generocita\x20Femenino']],_0x161eb8);else{if(_0x207376['fotos']['length']<0x2)await _0xffce83['sendButton'](_0x161eb8[_0x279d9d(0xb0)],_0x279d9d(0x9e)+_0x207376[_0x279d9d(0x8a)]+_0x279d9d(0x9f),wm,media,[[_0x279d9d(0x92),'/fotocita']],_0x161eb8);else{if(!_0x207376[_0x279d9d(0x9b)]){await _0xffce83[_0x279d9d(0x7f)](_0x161eb8[_0x279d9d(0xb0)],_0x279d9d(0xa7),_0x279d9d(0x6f),media,[[_0x279d9d(0xb1),_0x279d9d(0x7c)],[_0x279d9d(0x8f),_0x279d9d(0x8d)],['Solo\x20charlar\x20☕',_0x279d9d(0x85)],[_0x279d9d(0x77),_0x279d9d(0x8c)],['Hacer\x20nuevos\x20contactos\x20profesionales\x20💼','/yoquiero\x20Quiero\x20hacer\x20nuevos\x20contactos\x20profesionales\x20💼']],_0x161eb8);return;}else await _0xffce83[_0x279d9d(0x7f)](_0x161eb8['chat'],'𝑻𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍\x20𝒆𝒔𝒕𝒂\x20𝒍𝒊𝒔𝒕𝒐,\x20'+_0x207376['nombre']+_0x279d9d(0xa2),wm,media,[[_0x279d9d(0x87),_0x279d9d(0x7a)],['Ver\x20Perfil\x20✅',_0x279d9d(0x7d)],[_0x279d9d(0x8b),_0x279d9d(0x89)]],_0x161eb8);}}}}}};function _0x3e9d(_0x459380,_0x3f5ecf){const _0x227302=_0x2273();return _0x3e9d=function(_0x3e9d9b,_0x34300f){_0x3e9d9b=_0x3e9d9b-0x6f;let _0x36c1a5=_0x227302[_0x3e9d9b];return _0x36c1a5;},_0x3e9d(_0x459380,_0x3f5ecf);}handler['register']=!![],handler[_0x58a767(0x74)]=!![],handler[_0x58a767(0x78)]=[_0x58a767(0x91)],handler[_0x58a767(0xa1)]=[_0x58a767(0x91)],handler[_0x58a767(0x81)]=/^citaboom$/i;function _0x2273(){const _0x4a2030=['bannuser','6464796SuMzeg','Error\x20al\x20leer\x20package.json:','Nombre\x20💖','Elige\x20entre\x20algunos\x20ejemplos:','name','⏤‌‌ू⃪\x20፝‌⁞M‌ᴇɢ፝֟ᴜᴍ⃨ɪɴ⃜✰⃔࿐','Configurar\x20Nombre\x20💖','Error\x20al\x20cargar\x20perfiles:','private','10muAHCA','/generocita\x20Masculino','Salir\x20a\x20divertirme\x20🎉','tags','Este\x20comando\x20solo\x20está\x20disponible\x20para\x20Megumin\x20Bot.\x0a\x20🔥\x20https://github.com/David-Chian/Megumin-Bot-MD','/buscarpareja','readFileSync','/yoquiero\x20Quiero\x20conocer\x20nuevos\x20amigos\x20🌸','/finalizarperfil','49rof384foerAlkkO4KF4Tdfoflw','sendButton','git+https://github.com/David-Chian/Megumin-Bot-MD.git','command','35424TCGjkj','!\x20𝑨𝒉𝒐𝒓𝒂,\x20𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂\x20𝒕𝒖\x20𝒆𝒅𝒂𝒅\x20𝒖𝒔𝒂𝒏𝒅𝒐\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20*/edad*\x20𝒔𝒆𝒈𝒖𝒊𝒅𝒐\x20𝒅𝒆\x20𝒕𝒖\x20𝒆𝒅𝒂𝒅.','2000574tIbTut','/yoquiero\x20Quiero\x20solo\x20charlar\x20☕','SECRET_KEY','Buscar\x20Perfiles\x20❤️‍🔥','env','/cancelarperfil','nombre','Cancelar\x20Perfil\x20❌','/yoquiero\x20Quiero\x20salir\x20a\x20divertirme\x20🎉','/yoquiero\x20Quiero\x20encontrar\x20el\x20amor\x20verdadero\x20💘','utf-8','Encontrar\x20el\x20amor\x20verdadero\x20💘','edad','citaboom','Subir\x20Foto📷','𝑷𝒂𝒓𝒂\x20𝒆𝒎𝒑𝒆𝒛𝒂𝒓,\x20𝒑𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓\x20𝒄𝒓𝒆𝒂\x20𝒕𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍.\x0a','234846aSpnjF','writeFileSync','config','𝑷𝒂𝒓𝒆𝒄𝒆\x20𝒒𝒖𝒆\x20𝒂𝒖𝒏\x20𝒏𝒐\x20𝒉𝒂𝒔\x20𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒐\x20𝒕𝒖\x20𝒏𝒐𝒎𝒃𝒓𝒆.\x20𝑷𝒂𝒓𝒂\x20𝒉𝒂𝒄𝒆𝒓𝒍𝒐,\x20𝒖𝒔𝒂\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20*/nombre*\x20𝒔𝒆𝒈𝒖𝒊𝒅𝒐\x20𝒅𝒆\x20𝒕𝒖\x20𝒏𝒐𝒎𝒃𝒓𝒆.','repository','find','stringify','quiero','330OohvdH','2092XQwrXX','¡𝒀𝒂\x20𝒄𝒂𝒔𝒊\x20𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒎𝒐𝒔\x20','!\x20𝑺𝒖𝒃𝒆\x20𝒂𝒍\x20𝒎𝒆𝒏𝒐𝒔\x20𝒅𝒐𝒔\x20𝒇𝒐𝒕𝒐𝒔\x20𝒑𝒂𝒓𝒂\x20𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓\x20𝒕𝒖\x20𝒑𝒆𝒓𝒇𝒊𝒍.\x20𝑼𝒔𝒂\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20*/foto*\x20𝒑𝒂𝒓𝒂\x20𝒔𝒖𝒃𝒊𝒓𝒍𝒂𝒔.','64OjSaOP','help','.\x20𝑷𝒖𝒆𝒅𝒆𝒔\x20𝒗𝒊𝒔𝒖𝒂𝒍𝒊𝒛𝒂𝒓\x20𝒕𝒖\x20𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒄𝒊𝒐𝒏\x20𝒐\x20𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓𝒍𝒂.','927hjjifI','47284iLRCkK','url','Masculino\x20♂️','𝑷𝒐𝒓\x20𝒖𝒍𝒕𝒊𝒎𝒐,\x20¿𝒆𝒏\x20𝒒𝒖𝒆\x20𝒑𝒊𝒆𝒏𝒔𝒂𝒔?\x20𝑫𝒊𝒍𝒆\x20𝒂\x20𝒍𝒐𝒔\x20𝒐𝒕𝒓𝒐𝒔\x20𝒄𝒐𝒎𝒑𝒂ñ𝒆𝒓𝒐𝒔\x20𝒒𝒖𝒆\x20𝒒𝒖𝒊𝒆𝒓𝒆𝒔\x20𝒉𝒂𝒄𝒆𝒓\x20𝒄𝒖𝒂𝒏𝒅𝒐\x20𝒍𝒐𝒔\x20𝒄𝒐𝒏𝒐𝒛𝒄𝒂𝒔:\x0a\x20𝑼𝒕𝒊𝒍𝒊𝒛𝒂\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20`/𝒚𝒐𝒒𝒖𝒊𝒆𝒓𝒐\x20(𝒍𝒐\x20𝒒𝒖𝒆\x20𝒒𝒖𝒊𝒆𝒓𝒂𝒔)`.','Megumin-Bot-MD','502796FBQBZj','genero','Error\x20al\x20guardar\x20perfiles:','/edadcita','error','/nombrecita','22rDGOOK','chat','Conocer\x20nuevos\x20amigos\x20🌸','¡𝑯𝒐𝒍𝒂\x20'];_0x2273=function(){return _0x4a2030;};return _0x2273();}export default handler;