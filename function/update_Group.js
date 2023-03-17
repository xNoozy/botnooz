const { color } = require('./Data_Server_Bot/Console_Data')


const updateGroup = async (conn, anu) => {
const metdata = await conn.groupMetadata(anu.jid)

const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:conn\nitem1.TEL;waid=6283834558105:6283834558105\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}

if(anu.announce == 'false'){
let teks = `[ G R O U P - O P E N E D ]\n\n_Group telah di buka, semua member sudah mulai bisa mengirim pesan!_`
conn.sendMessage(metdata.id, {text: teks}, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
}
else if(anu.announce == 'true'){
let teks = `[ G R O U P - C L O S E ]\n\n_Group telah di tutup, semua member tidak bisa mengirim pesan hanya admin saja yang bisa mengirim pesan!_`
conn.sendMessage(metdata.id, {text: teks}, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
}
else if(!anu.desc == ''){
let tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'   
let teks = `[ NEW DESCRIPTION❗ ]\n\nAdmin @${anu.descOwner.split('@')[0]} Telah mengubah deskripsi grub menjadi\n\n${anu.desc}`
conn.sendMessage(metdata.id, {text: teks}, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
}
else if(anu.restrict == 'false'){
let teks = `[ GROUP SETTINGS CHANGED ]\n\n_Edit info telah di buka, sekarang semua member sudah bisa mulai mengedit info group!_`
conn.sendMessage(metdata.id, {text: teks}, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
}
else if(anu.restrict == 'true'){
let teks = `[ GROUP SETTINGS CHANGED ]\n\n_Edit info telah di tutup, sekarang semua member tidak bisa mengedit info group hanya admin saja yang bisa mengedit!_`
conn.sendMessage(metdata.id, {text: teks}, {quoted: fkontakk})
console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
}  
} 
module.exports = { updateGroup }   
  
  