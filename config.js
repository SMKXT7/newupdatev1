let fs = require('fs')

//Info maszeh
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Ganti di Handler.js
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.namabot = 'Xzn-Botz' //nama BOT Lu
global.packname = 'Xzn-Botz'
global.author = 'Akmall Nz..な' //nama Owner
global.ownernya = '628988986891'
global.linkyt = 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA' //link yt lu
global.linkig = 'https://instagram.com/_xzennz' //link ig lu
global.linkgh = 'https://github.com/XzenzBotz' //link github lu
global.titlebot = `⫹⫺ WhatsApp Bot | By Akmall Nz`
global.wm2 = 'nekopoi.care' //ganti aja kalau mau
global.wm = 'Xzn-Botz'
global.colong1 = 'Ciss 📸'
global.colong2 = '🗿'
global.kontak2 = [
['628988986891', '>.<, 𝙊𝙬𝙣𝙚𝙧', 'Sᴀᴠᴇ Aᴊᴀ Yᴇ Oᴡɴᴇʀ Kᴜ Bᴀɪᴋ Kᴏᴋ', true],
]

//Biodata OWNER Bre
global.RL = 'Xzennz' //jenis kelamin lu
global.gender = 'Boys' //jenis kelamin lu
global.agama = 'islam' //agama lu
global.age = '17' //usia lu sekarang
global.kelas = '11' //kelas lu
global.hobi = 'Gaming/Ngoding/Nonton Anime' //hobi lu bre
global.tempat = 'INDONESIA , Yogyakarta, Jawa Tengah' //tempat tinggal lu

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  males: 'https://malesin.xyz',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.lolkey = 'a243d5d9b0d811b81d63e6cf'
global.xkey = 'YourApikey'
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': '6aceac403a3d479b',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

//img nya
global.thumb = 'https://telegra.ph/file/9ab1eb43f4f344888fe34.jpg'
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']

//Proses berlangsung
global.wait = '_*𝒔𝒆𝒅𝒂𝒏𝒈 𝒅𝒊 𝒑𝒓𝒐𝒔𝒆𝒔...*_'
global.eror = '_*𝒎𝒂𝒂𝒇 𝒔𝒆𝒓𝒗𝒆𝒓 𝒆𝒓𝒓𝒐𝒓...*_'

//========Url Template Buttons=========//
global.dtu = 'Group bot'
global.urlnya = "https://chat.whatsapp.com/IjE0XQ3uVdQApnZP2Uymss"

//============= callButtons =============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '3'

//============= Games ================//
global.benar = '_*Benar*_✅'
global.salah = '_*Salah*_❌'
global.dikit = "dikit lagi :3"

global.multiplier = 100 // The higher, The harder levelup

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//=========== Requirements ==========//

global.htki = '––––––『' //hiasan title kiri
global.htka = '』––––––' //hiasan title kanan
global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
