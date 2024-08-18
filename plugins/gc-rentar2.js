import db from '../lib/database.js';
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text }) => {
  if (!text) {
     m.reply('> _📝 Ingresa el link del grupo para rentar el bot._', m, rcanal);
    return
  }

  let userRents = global.db.data.userRents[m.sender];
  if (!userRents || userRents.tokens <= 0) {
     m.reply('❎ No tienes tokens disponibles para rentar el bot. Compra más tokens con /rentar.', m, rcanal);
     return
  }

  let [_, code] = text.match(linkRegex) || [];
  if (!code) {
     m.reply('🚩 Enlace inválido.', m, rcanal);
     return
  }
  
try {
  let groupMetadata;
    groupMetadata = await conn.groupAcceptInvite(code);
  } catch (e) {
   m.reply('❌ No pude unirme al grupo. Verifica el enlace.', m, rcanal);
   return
  }

  let groupId = groupMetadata.id || groupMetadata;

  if (!groupId.endsWith('@g.us')) {
     m.reply('❌ No se pudo identificar el grupo.', m, rcanal);
     return
  }

  global.db.data.groupRents = global.db.data.groupRents || {};
  
  global.db.data.groupRents[groupId] = {
    user: m.sender,
    tokenCount: userRents.tokens,
    startTime: Date.now(),
    duration: userRents.tokens * 24 * 60 * 60 * 1000
  };

  userRents.tokens = 0;
  userRents.groups.push(groupId);

  conn.reply(m.chat, `> _📝 Me uní correctamente al grupo_ *${groupId}* por ${global.db.data.groupRents[groupId].tokenCount} día(s).`);

  let chats = global.db.data.chats[groupId] || {};
  chats.expired = global.db.data.groupRents[groupId].startTime + global.db.data.groupRents[groupId].duration;
  global.db.data.chats[groupId] = chats;

  let pp = 'https://telegra.ph/file/32e696946433c03588726.mp4';
  await conn.sendMessage(groupId, { video: { url: pp }, gifPlayback: true, caption: '> ¡Ya llegué! El bot estará disponible por el tiempo acordado.', mentions: [m.sender] });
};

handler.tags = ['grupos']
handler.help = ['rentar2 *<link>*']
handler.command = ['rentar2']

export default handler