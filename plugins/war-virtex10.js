let fs = require('fs')
let handler = async (m, { conn } ) => {    
m.reply('Wait suhu')
let anu =`
*-*🍎݊ɪᴘʜᴏɴᴇ🍎݊ *𝙈𝙋𝙅* *-* *𝙎𝙄𝙎𝙏𝙀𝙈𝘼 𝙁𝙐𝘿𝙄𝘿𝙊* *-*🍎݊𝙄𝙋𝙃𝙊𝙉𝙀 𝙎𝙀 𝙁𝙐𝘿𝙀𝙐🍎݊ *-* *-*🍎݊ɪᴘʜᴏɴᴇ🍎݊ *𝙈𝙋𝙅* *𝙎𝙄𝙎𝙏𝙀𝙈𝘼 𝙁𝙐𝘿𝙄𝘿𝙊*  https://pin.it/zihq7rhxg4v7pn *-*🍎݊ *𝙈𝙋𝙅* *-*℣𝙈𝘼𝙍𝘾𝙊𝙎 *⸙*░⃟⃛🍎༘݊➮ *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-* http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*৪৪৪৪৪৪৪৪*-* *-*𝙈𝙋𝙅*-* *-*🍎݊𝙄𝙋𝙃𝙊𝙉𝙀 𝙎𝙀 𝙁𝙐𝘿𝙀𝙐🍎݊ *-*                                                                                                                                                                                                                                                                                                            *-*🍎݊
`
m.reply(anu)
}
handler.help = ['virtex10']
handler.tags = ['war']
handler.command = /^(virtex10)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler