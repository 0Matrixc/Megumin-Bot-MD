import db from '../lib/database.js'
let handler = async (m, {conn, usedPrefix}) => {
   let img = './Menu.jpg'
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return m.react('✖️')
   if (!(who in global.db.data.users)) return m.reply(`*El usuario no se encuentra en mi base de datos*`)
   let user = global.db.data.users[who]
   const texto = `${who == m.sender ? `🌵 Tienes: *${user.bank}* Galletas en el banco.` : `🌵 Ese usuario tiene *${user.bank}* Galletas 🍪 en el Banco`}`

  // await conn.reply(m.chat, texto, m, rcanal)
   await conn.sendButton(m.chat, texto, wm, img, [['Retirar Todo', `${usedPrefix}retirar all`], ['Meter Al Banco Todo', `${usedPrefix}d all`] ], rcanal, null, { mentions: [who] })
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = ['bank', 'banco'] 
handler.register = true 
export default handler 
