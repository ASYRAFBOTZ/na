let handler = async m => m.reply(`
╭─「 MIKAZU BOT 」
│ SEWABOT
│ > Harga :
│• 10k PERMANEN
│
│ PREMIUM 
│ > harga :
│• 5K 1MINGGU
│
│ > Pembayaran :
│• DANA
│• PULSA (+1K)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
