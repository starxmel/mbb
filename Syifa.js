//TERIMA KASIH ATAS SUPORT NYA🙌
///TETEP SUPORT CHANEL SAYA YA
///TETAP MEMENUHI ATURAN DI SC INI YA BANG
///SUBSCRIBE DHENXS CODE

///Recode Boleh Asal Cantumin Yt Saya Biar Enak
///MAFF KALO FITUR EROR SOAL NYA SAYA BARU  PEMULA
///JANGAN SAMPAI DI GANTI CREATOR NYA KALO DI GANTI GW ENC
/// WA CS NYA BIARR BOT NYA BISA : wa.me/6289646775883
///TERIMA DAH MAKE SC NYA EROR FIX SENDIRI
///KITA SAMA SAMA BIKIN BOT KAGA ADA MASTAH MASTAHAN DI SINI SAMA SAMA BELAJAR 
///THANKS SUBSCRIBE SAYA DAN CREATOR BOT LAIN NYA
//SC ORI "RAKUN STORE" LUH JAN NGAKU2 DAH
//KALO MAU AMBIL CASE TAG "RAKUN OFFICIAL"
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const setting = JSON.parse(fs.readFileSync('./apikey/setting.json'))
const Apikey = JSON.parse(fs.readFileSync('./apikey/Apikey.json'))
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\
const gember = fs.readFileSync("./lib/menu7.jpg"); 
const thumb = fs.readFileSync("./media/gambar/thumb.jpg");
const qris = fs.readFileSync("./media/gambar/qris.jpg");
sound = fs.readFileSync('./lib/Geleng.mp3')
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\

Lolhuman = Apikey.Lolhuman
AlphaBot = Apikey.AlphaBot
Leyscoders = Apikey.Leyscoders
//━━━━━━━━━━━━━━━[  AUTO RESPON ]━━━━━━━━━━━━━━━\\

autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true

//━━━━━━━━━━━━━━━[  PUBLIC ]━━━━━━━━━━━━━━━\\

publik = true

//━━━━━━━━━━━━━━━[EDIT DI SETTING.JSON]━━━━━━━━━━━━━━━\\

namabot = setting.BotName
namaowner = setting.OwnerName
nomorowner = setting.OwnerNumber
//━━━━━━━━━━━━━━━[ Sticker WM ]━━━━━━━━━━━━━━━\\

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif() 

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = Ramdani = async (Ramdani, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
			mess = {
				daftar: `maaf Kamu Belum Terdaftar Silahkan Daftar Ketik .daftar`,
				wait: 'PEROSES [‼️] MOHON DI TUNGU YA KAK....',
				banned: 'Luh dah di banned awoakawok, chat owner untuk di ruqyah',
				success: 'Nih deks jan lupa subscribe https://youtube.com/channel/UCB157jomCne961WzYHpG4gg',
				error: {
					stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker',
					Iv: 'Luh ngasih link apaan tolol'
				},
				only: {
					group: 'FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!! ❌',
					premium: 'LUH BUKAN USER PREMIUM, CHAT OWNER UNTUK DI RUQYAH!!!',
					ownerG: 'FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER GRUP!!! ❌',
					ownerB: 'FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER BOT!!! ❌',
					admin: 'FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GRUP!!! ❌',
					Badmin: 'FITUR INI HANYA BISA DIGUNAKAN KETIKA BOT MENJADI ADMIN!!! ❌'
				}
			}
//━━━━━━━━━━━━━━━[ Terakhir ]━━━━━━━━━━━━━━━\\
			const botNumber = Ramdani.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[sender] != undefined ? Ramdani.contacts[sender].vname || Ramdani.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
//━━━━━━━━━━━━━━━[ HARI HARI ]━━━━━━━━━━━━━━━\\
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			Ramdani.sendMessage(from, teks, text, { thumbnail: gember, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} WIB - ${week}`,body:"MB STORE",previewType:"PHOTO",thumbnail:gember,sourceUrl:`https://wa.me/6281212303461`}}})
		}
		const reply2 = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
//━━━━━━━━━━━━━━━[WAKTU]━━━━━━━━━━━━━━━\\
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `RamdaniBot`, jpegThumbnail: fs.readFileSync(`./media/gambar/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/gambar/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 20,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 20,
                            status: 1,
                            surface : 1,
                            message: `By MB STORE`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/gambar/thumb.jpg"),
                                  "itemCount":20,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 20`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":1000,"isForwarded":true}, sendEphemeral: true})}


	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ramdani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    
                    Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Ramdani.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By RamdaniBot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
Ramdani.updatePresence(from, Presence.composing)
//━━━━━━━━━━━━━━━[ PUBLIC ]━━━━━━━━━━━━━━━\\
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//━━━━━━━━━━━━━━━[ UCAPAN WAKTU ]━━━━━━━━━━━━━━━\\
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
//━━━━━━━━━━━━━━━[ FAKE MENU BOT ]━━━━━━━━━━━━━━━\\
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `New Base By MB STORE`,
                 "title": `New Base By MB STORE`,
                 'jpegThumbnail': fs.readFileSync("./lib/Rakun.jpg"),
                        }
	                  } 
                     }
//━━━━━━━━━━━━━━━[ BUAT BIO BOT ]━━━━━━━━━━━━━━━\\
runi = process.uptime() 
           Ramdani.setStatus(`OPEN 24JAM ${kyun(runi)} `).catch((_)=>_);
          settingstatus = new Date() * 1;
//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
//━━━━━━━━━━━━━━━[ TEKS BUFFER ]━━━━━━━━━━━━━━━\\
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: froxx})
}
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\

switch(command) {
case 'help':
case 'h':
case 'm':
case 'z':
if (isBanned) return reply(mess.banned)
anu =`┏━━>[ INFO BOT ]
┣ 𐝑 👑 *Nama Own* : ${namaowner}
┣ 𐝑 🤖 *Name Bot* : ${namabot}
┣ 𐝑 📆 *Tanggal* : ${tanggal}/${bulan}/${tahun}
┣ 𐝑 🐉 *Prefix* : ${prefix}MENU
┣ 𐝑 ⌚ *Jam* : ${jam}
┣ 𐝑 ✅ *Version* : ɴᴇᴡ 15.7.0.8
┗━━━━━━━━━━━>`
sendButImage(from, anu,`jangan spam bot, kasih jeda 5 detik  agar bot tidak bug/delay\n© Creator By MB STORE \n${Tanggal}`, thumb, [
            {buttonId: `${prefix}c`, buttonText: {displayText: `📑 MENU`, }, type: 1, },
            {buttonId: `${prefix}owner`, buttonText: { displayText: `👥 OWNER`, }, type: 1, },
            {buttonId: `${prefix}sewabot`, buttonText: { displayText: `🤖 SEWA BOTZ`, }, type: 1, },
            ]);            
break

case 'c':
case 'command':
case 'simpelmenu':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'PILIH DISINI',
 footerText: '© Creator By MB STORE',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Menunya disini`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "[👥]Owner",
                       "description" :"INI ADALAH OWNER MB STORE",
                       "rowId": `${prefix}owner`
                           },
                           {                         
                              "title": "[📑Donasi",
                              "description" :"MENAMPILKAN DONASI UNTUK BOTz 🤖",
                              "rowId": `${prefix}donasi`
                          },
                           {                         
                              "title": "[🛒]Store menu",
                              "description" :"TOP UP GAME MLBB,FF,PUBG,CIP,PULSA,DLL 🐉",
                              "rowId": `${prefix}storemenu`
                           },
                           {
                        "title": "[🤍]Asupan Menu",
                       "description" :"Menampilkan Menu Asupan",
                       "rowId": `${prefix}asupanmenu`
                           },
                           {                         
                              "title": "[📝]Maker Menu",
                              "description" :"Menampilkan Menu Maker",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "[🉐]Anime Menu",
                              "description" :"Menampilkan Menu Anime",
                              "rowId": `${prefix}animemenu`
                           },
                           {                         
                              "title": "[🎮]Game Menu",
                              "description" :"Menampilkan Menu Game",
                              "rowId": `${prefix}gamemenu`
                           },
                           {                         
                              "title": "[👳]Islam Menu",
                              "description" :"Menampilkan Menu Islam",
                              "rowId": `${prefix}islammenu`
                           },
                           {                         
                              "title": "[🦊]Hewan Menu",
                              "description" :"Menampilkan Menu Hewan",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "[🈵]Hentai Menu",
                              "description" :"Menampilkan Menu Hentai",
                              "rowId": `${prefix}hentaimenu`
                           },
                           {                         
                              "title": "[📤]Download Menu",
                              "description" :"Menampilkan Menu Download",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "[👩‍💻]Owner Menu",
                              "description" :"Menampilkan Menu Owner",
                              "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "[🎩]Ocr Menu",
                              "description" :"Menampilkan Menu OCR",
                              "rowId": `${prefix}ocrmenu`
                           },
                           {                         
                              "title": "[🗿]Sticker Menu",
                              "description" :"Menampilkan Menu Sticker",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "[🧐]Kode Menu",
                              "description" :"Menampilkan Menu Kode",
                              "rowId": `${prefix}kodemenu`
                           },
                           {                         
                              "title": "[🐣]Grup Menu",
                              "description" :"Menampilkan Menu Grup",
                              "rowId": `${prefix}grupmenu`
                           },
                           {                         
                              "title": "[♻️]Mode Menu",
                              "description" :"Menampilkan Menu Mode",
                              "rowId": `${prefix}modemenu`
                           },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'store menu':
case 'storemenu':
case 'sm':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'PILIH DISINI',
 footerText: '© Creator By MB STORE',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "Menu MB STORE",
                       "description" :"Menampilkan Menu Top Up Game",
                       "rowId": `${prefix}list`
                           },
                           {
                        "title": "Member lite",
                       "description" :"MENU GAME TOP UP MEBER LITE SILAKAN DI CEK 😁",
                       "rowId": `${prefix}lite`
                           },
                           {
                        "title": "Top up saldo",
                       "description" :"Menampilkan Menu Top Up Saldo",
                       "rowId": `${prefix}topupsaldo`
                           },
                           {                         
                              "title": "Sewa bot",
                              "description" :"Menampilkan Menu Sewa Bot",
                              "rowId": `${prefix}sewabot`
                          },
                          {
                        "title": "Buy premium",
                       "description" :"Menampilkan List Beli Premium",
                       "rowId": `${prefix}buypremium`
                           },
                           {                         
                              "title": "Buy sc",
                              "description" :"Menampilkan List Menu Beli Script Bot",
                              "rowId": `${prefix}buysc`
                           },
                           {
                        "title": "Donasi",
                       "description" :"Menampilkan List Menu Donasi",
                       "rowId": `${prefix}donasi`
                           },                           
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'Menu MB STORE':
case 'pricelist':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'MENU MB STORE',
 footerText: '2022 © MBSTORE BOT',
 description: `_*SILAHKAN PILIH MENU DI BAWAH INI*_ @${sender.split('@')[0]} ⬇️ `,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "RULES MB STORE ⚠️",
                        "description" :"Rules Group MB Store",
                       "rowId": `${prefix}rules`
                           },
                           {                         
                              "title": "PAYMENT 💳",
                              "description" :"Metode Pembayaran",
                              "rowId": `${prefix}payment`
                           },
                           {                         
                              "title": "PO & PROMO 📑",
                              "description" :"Pre-order & Promo",
                              "rowId": `${prefix}popromo`
                           },
                           {
                        "title": "MOBILE LEGENDS A 💎",
                        "description" :"Mobile Legends Paket A",
                       "rowId": `${prefix}mla`
                           },
                           {
                        "title": "MOBILE LEGENDS B 💎",
                        "description" :"Mobile Legends Paket B",
                       "rowId": `${prefix}mlb`
                           },
                           {                         
                              "title": "MOBILE LEGENDS C 💎",
                              "description" :"Mobile Legends Paket C",
                              "rowId": `${prefix}mlc`
                           },
                           {
                        "title": "MOBILE LEGENDS SLOW ⏳",
                        "description" :"Mobile Legends Paket Slow",
                       "rowId": `${prefix}mlslow`
                           },
                           {
                        "title": "MOBILE LEGENDS V-LOGIN 📝",
                        "description" :"Mobile Legends Via Login Moonton",
                       "rowId": `${prefix}vlog`
                           },
                           {                         
                              "title": "FREE FIRE 💎",
                              "description" :"Paket Free Fire",
                              "rowId": `${prefix}dmff`
                          },
                          {                         
                              "title": "PUBG A 💸",
                              "description" :"Paket Pubg A",
                              "rowId": `${prefix}pubga`
                          },
                          {                         
                              "title": "PUBG B 💸",
                              "description" :"Paket Pubg B",
                              "rowId": `${prefix}pubgb`
                          },
                          {                         
                              "title": "LAYANAN PREMIUM 📺",
                              "description" :"Layanan Sosmed & Premium",
                              "rowId": `${prefix}l-premium`
                          },
                          {                         
                              "title": "SALDO E-MONEY 💵",
                              "description" :"Topup Saldo E-Money",
                              "rowId": `${prefix}e-money`
                          },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'Member lit':
case 'pricelistvip':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'PILIH DISINI',
 footerText: '© Creator MB Store',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Game nya disini`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "PAYMENT",
                       "description" :"PAYMENT : UNTUK PEMBAYARAN",
                       "rowId": `${prefix}pay-mlam`
                           },
                           {
                        "title": "DM 86 MEBER LITE",
                       "description" :"Diamond kusus meberlite",
                       "rowId": `${prefix}mlam`
                           },
                           {
                        "title": "LING PENDAFTARAN",
                       "description" :"LING PENDAFTARAN KUSUS MEBER LITE",
                       "rowId": `${prefix}daftar-lite`
                           },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'top up saldo':
case 'topupsaldo':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'PILIH DISINI',
 footerText: '© Creator By MB STORE',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Aplikasi nya disini`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "Go-Pay",
                       "description" :"Menampilkan List Menu Top Up Go-Pay",
                       "rowId": `${prefix}topupgopay`
                           },
                           {                         
                              "title": "Dana",
                              "description" :"Menampilkan List Menu Top Up Dana",
                              "rowId": `${prefix}topupdana`
                          },
                          {
                        "title": "Ovo",
                       "description" :"Menampilkan List Menu Top Up Ovo",
                       "rowId": `${prefix}topupovo`
                           },
                           {                         
                              "title": "Pulsa",
                              "description" : "Menampilkan List Menu Top Up Pulsa",
                              "rowId": `${prefix}topuppulsa`
                           },                                                      
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//CASEE NYAA BWANGG
case 'sewabot':
if (isBanned) return reply(mess.banned)
reply2(`*TIDAK DI SEWA*`)
break
case 'buypremium':
if (isBanned) return reply(mess.banned)
reply2(`━━━━━『 *LIST PREMIUM* 』━━━━━

❏ PERHARI : 2H. 1K, 5H. 4K, 7H 6K,
❏ PERMINGGU : 1MIN. 6K, 2MIN. 10K, 3MIN. 15K,
❏ PERBULAN : 1B. 18K, 2B. 28K, 3B. 38K,
❏ PERTAHUN : 1THN. 100K
❏ PERMANEN : 150K
*minat chat owner*`)
break
//buysc
case 'buysc':
reply(`_*silahkan hubungi owner jika ingin membeli script bot*_\n_*ketik ${prefix}owner`)
break
case 'rules':
reply2(`┏━━━━━━━━━━━━━━⬣
┃「 ⛔️ *RULES MB STORE* ⛔️ 」
⬣ ━━━━━━━━━━━━━━⬣
┃⚠️ *PENTING!!!*
┃⚠️ *JANGAN MALAS BACA!!!*
┏━━━━━━━━━━━━━━⬣
┃▫️ *_RULES GIFT SKIN_*
┃
┃1. Dilarang ganti akun setelah masuk ┃antrian
┃2. Dilarang ganti nickname setelah ┃masuk antrian
┃3. Dilarang ganti skin setelah masuk ┃antrian
┃4. Dilarang unfriend setelah masuk list ┃antrian
┃5. Tidak bisa refund
┃
┃MELANGGAR? AUTO HANGUS ❌
┃
┃_Sistem :_
┃- Kirim format -> Tf lunas -> Add ID ┃yang diberi admin -> Tunggu 7 hari 
┃- Proses 7 hari + Antrian
┗━━━━━━━━━━━━━━⬣
┃▫️ *_RULES DM SLOW_*
┃
┃1. Dilarang untuk menyebarkan ┃screenshot diamond masuk di ┃Inbox, testi buyer dll, jika ketahuan ┃akan di kick dan di blacklist, serta ┃akan mendapatkan resiko lainnya.
┃
┃2. Per akun maximal 2695 DM per ID ┃dalam satu minggu, lebih dari itu ┃masuk antrian minggu depannya lagi.
┃
┃3. Dilarang untuk para reseller ┃menyantumkan tanggal kapan turun ┃diamondnya bilang saja estimasi 7-14 ┃hari maximal 21 hari (jika ada kendala/┃trouble)
┃
┃4. Jika Diamond belum masuk, ┃konfirmasi komplain hari senin mulai ┃dari jam 18:00 sampai jam 23:59 WIB.
┃
┃5. Transaksi via ID Diamonds Legal ┃from Montoon (jangan melanggar ┃rules jika tidak mau beresiko)
┃
┃6. Kesalahan ID dan Server ┃ditanggung pembeli
┃
┃7. Jika ingin laporan Diamond tidak ┃masuk, berikan bukti video dan foto ┃pada hari yang sama, batas waktu ┃memberikan video dan foto sampai ┃hari selasa, jika dihari lain komplain ┃akan di tolak.
┃
┃8. Patuhi rules jika tidak ingin ┃adanya resiko dari kami!
┃
┃9. Pesanan yang telah masuk list ┃tidak dapat di Cancel/Refund (kecuali ┃dari pihak kami)
┃
┃_Catatan:_
┃- Diamond biasanya di kirim setiap ┃hari senin, jadi kamu bisa cek secara ┃berkala setiap hari senin di waktu ┃7-14 hari dan maximal 21 hari jika ┃ada kendala/trouble dari pusat.
┃- Yang bilang lama atau lambat tidak ┃usah order! Bagi yang paham saja ┃(Rata-rata di pasaran ML Slow 14-21 ┃Hari! Rate 160 - 170) Cara hitung ┃Rate : Diamond x Rate = Harga (ex : ┃1225dm x 158 = 193.550)
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *🗒NOTE * 」━━━━━━⬣
┃*JIKA ADA KEJADIAN ORDERAN*
┃*HANGUS ATAS KESALAHAN*
┃*BUYER YANG TIDAK MEMBACA/┃MELANGGAR RULES, MAKA ITU*
┃*BUKAN TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)

break
case 'payment':
reply2(`┏━━━━━━━━━━━━━━⬣
┃「 *⛔️PAYMENT MB STORE*⛔️  」
⬣ ━━━━━━━━━━━━━━⬣
┃         *QRIS ALL PAYMENT*
┃            bit.ly/QrisMBStore
┗━━━━━━━━━━━━━━⬣
┃                 *E-MONEY*
┗━━━━━━━━━━━━━━⬣
┃💰DANA ✅
┃=> Melvie [ 081212303462 ]
┃=> Bintang [ 081212303461 ]
┃💰GOPAY ✅
┃=> Melvie [ 081212303462 ]
┃💰OVO ✅
┃=> Melvie [ 081212303462 ]
┃=> Bintang [ 081212303461 ]
┃💰SHOPEEPAY ✅
┃=> Lesti [ 081212303462 ]
┗━━━━━━━━━━━━━━⬣
┃                       *ATM*
┗━━━━━━━━━━━━━━⬣
┃🏦 BCA ✅
┃=> Melvie [ 6520680916 ]
┃🏦 BJB ❌
┃=> Melvie [ 0113707143100 ]
┗━━━━━━━━━━━━━━⬣
┃        *NO VIRTUAL DANA*
┗━━━━━━━━━━━━━━⬣
┃🏦BCA = 3901081212303462
┃🏦BRI = 88810081212303462
┃🏦BNI = 8810081212303462
┃🏦MANDIRI = 895008081212303462
┃🏦BTPN = 8000009081212303462
┃🏦PERMATA = 8528081212303462
┃🏦BNC = 8528081212303462
┃             < GODS TOP UP >
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JANGAN SAMPAI SALAH INPUT!!!*
┃*JIKA TERJADI KESALAHAN*
┃*TRANSAKSI SELAIN NO TUJUAN*
┃*DIATAS, MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN ┃(HANGUS*)
┗━━━━━━━━━━━━━━━━⬣`)
            
break
case 'mla':
reply2(`┏━━━━━━━━━━━━━━⬣
┃       「 💎 *LIST DIAMOND* 」
┃  「🎮 *MOBILE LEGENDS A* 」
┃      「✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┏━━━━━━━━━━━━━━⬣
┃⏳*1 - 5 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃84💎 (78+8) = Rp19.995
┃172💎 (156+16) = Rp40.040
┃257💎 (234+23) = Rp60.060
┃344💎 (312+32) = Rp80.060
┃429💎 (390+39) = Rp100.100
┃514💎 (468+46) = Rp120.120
┃600💎 (546+54) = Rp140.140
┃706💎 (625+81) = Rp160.160
┃878💎 (781+97) = Rp200.200
┃963💎 (859+104) = Rp220.220
┃1050💎 (937+113) = Rp240.240
┃1412💎 (1250+162) = Rp320.320
┃2195💎 (1860+335) = Rp478.950
┃3688💎 (3099+589) = Rp796.700
┃5532💎 (4649+883) = Rp1.188.880
┃6238💎 (5274+964) = Rp1.349.040
┃9288💎 (7740+1548) = Rp1.985.580
┃
┃⭐️ SL+💎/TW = Rp96.000
┃⭐️ SL PLUS = Rp223.000
┗━━━━━━━━━━━━━━⬣
┃
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Server :
┃Order dm :
┃Paket : ML A
┃Sisa dm :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)

break
case 'mlb':
reply2(`┏━━━━━━━━━━━━━━⬣
┃        「 💎 *LIST DIAMOND* 」
┃   「🎮 *MOBILE LEGENDS B* 」
┃       「✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*1-5 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃3💎 (3+0) = Rp1.267
┃5💎 (5+0) = Rp1.445
┃14💎 (13+1) = Rp3.559
┃19💎 (18+1) = Rp5.216
┃28💎 (26+2) = Rp7.119
┃42💎 (38+4) = Rp10.678
┃56💎 (51+5) = Rp14.237
┃65💎 (59+6) = Rp15.040
┃70💎 (64+6) = Rp16.999
┃84💎 (77+7) = Rp20.605
┃112💎 (102+10) = Rp27.872
┃129💎 (117+12) = Rp30.080
┃143💎 (130+13) = Rp33.685
┃172💎 (156+16) = Rp40.850
┃185💎 (168+17) = Rp44.504
┃194💎 (176+18) = Rp45.119
┃222💎 (202+20) = Rp52.332
┃259💎 (235+24) = Rp60.159
┃278💎 (253+25) = Rp65.724
┃283💎 (258+25) = Rp67.684
┃352💎 (320+32) = Rp82.315
┃366💎 (332+34) = Rp85.921
┃388💎 (352+36) = Rp90.239
┃430💎 (390+40) = Rp101.057
┃530💎 (469+61) = Rp120.319
┃572💎 (507+65) = Rp131.136
┃586💎 (520+66) = Rp134.743
┃609💎 (541+68) = Rp138.971
┃724💎 (645+79) = Rp165.438
┃853💎 (762+91) = Rp195.518
┃881💎 (788+93) = Rp202.729
┃983💎 (880+103) = Rp232.808
┃1189💎 (1055+134) = Rp270.723
┃1448💎 (1290+158) = Rp330.882
┃1647💎 (1395+252) = Rp360.962
┃2035💎 (1747+288) = Rp451.201
┃2177💎 (1864+313) = Rp481.280
┃2256💎 (1936+320) = Rp620.250
┃2767💎 (2325+442) = Rp601.599
┃2975💎 (2514+461) = Rp650.324
┃3685💎 (3146+539) = Rp812.162
┃4150💎 (3487+663) = Rp902.401
┃4409💎 (3722+687) = Rp962.560
┃5533💎 (4718+815) = Rp1.225.448
┃6250💎 (5293+957) = Rp1.368.641
┃6966💎 (5805+1161) = Rp1.503.999
┃7496💎 (6274+1222) = Rp1.624.318
┃7690💎 (6450+1240) = Rp1.669.437
┃9337💎 (7845+1492) = Rp2.030.399
┃12957💎 (10863+2094) = ┃Rp2.819.686
┃
┃⭐ SL+💎/TW = Rp96.000
┃⭐ SL PLUS = Rp223.000
┗━━━━━━━━━━━━━━⬣
┃
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Server :
┃Order dm :
┃Paket : ML B
┃Sisa dm :
┃
┃📢 Contact Admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣ `)

break
case 'mlslow':
reply2(` ┏━━━━━━━━━━━━━━⬣
┃        「 💎 *LIST DIAMOND* 」
┃「🎮 *MOBILE LEGENDS SLOW* 」
┃       「✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*7-14 HARI MAX 21 HARI*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃⚠️ *WARNING* ⚠️
┃SEBELUM ORDER WAJIB BACA ┃RULES TERLEBIH DAHULU DI ┃http://bit.ly/PricelistMBStore
┃TIDAK MEMBACA/MELANGGAR ┃RULES = HANGUS + BLACKLIST ❌
┏━━━━━━━━━━━━━━⬣
┃💰RATE = 160
┃
┃980💎 = Rp156.800
┃1225💎 = Rp196.000
┃1470💎 = Rp235.200
┃1715💎 = Rp274.400
┃1960💎 = Rp313.600
┃2205💎 = Rp352.800
┃2450💎 = Rp392.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Server :
┃Order dm :
┃Paket : ML Slow
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)
break
case 'vlog':
reply2(`┏━━━━━━━━━━━━━━⬣
┃         「 💎 *LIST DIAMOND* 」
┃「 🎮 *MOBILE LEGENDS VILOG* 」
┃  「 ✅ *VIA LOG-IN MOONTON* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*1 x 24 JAM MAX 3 HARI*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃1100🌟 = Rp75.000
┃1100🌟 + 112💎 = Rp100.665
┃ 6000💎 = Rp1.070.000
┃12000💎 = Rp2.140.000
┃18000💎 = Rp3.210.000
┃24000💎 = Rp4.280.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Email :
┃Password :
┃Paket : ML Vilog
┃_Pastikan matikan verif_
┗━━━━━━━━━━━━━━⬣
┃*KETENTUAN VIA LOG-IN*
┃
┃1. Saat pesanan telah sukses
┃pastikan anda melakukan log-out
┃all device dan mengubah password
┃secara langsung.
┃2. Setelah pesanan sukses, kami tidak
┃menyimpan data pesanan yang ┃bersifat privasi (Password ataupun
┃kode).
┃3. Kepada reseller, di wajibkan untuk
┃tidak menyimpan data privasi
┃(Password ataupun kode) dan
┃memberikan informasi untuk ┃mengubah data secara langsung.
┃4. Kamu menjamin keamanan akun di
┃proses oleh tim yang profesional.
┃5. Kami tidak bertanggung jawab
┃apabila ada kasus Hacking Account.
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA PESANAN MASIH DALAM*
┃*PROSES DAN AKUN DITABRAK*
┃*MAKA REFUND 50%. KESALAHAN*
┃*BUYER BUKAN TANGGUNG JAWAB*
┃*ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)
break
case'popromo':
reply2(` ┏━━━━━━━━━━━━━━⬣
┃ 「 ✅ *OPEN PRE-ORDER* 」
┃  「🎮 *MOBILE LEGENDS* 」
⬣ ━━━━━━━━━━━━━━⬣
┃_*PO SKIN M-WORLD*_
┃
┃• WANWAN 515
┃• LING 515
┃• YIN 515
┃ 
┃Harga : *89.000*
┗━━━━━━━━━━━━━━⬣
┃_*PO STARLIGHT MEI*_
┃
┃Pilihan Sementara :
┃• Paquito
┃• Kagura
┃• Khufra
┃• Alucard
┃• Miya
┃
┃Harga : *Rp88.000*
┃
┃_Close 27 April, Terkirim 1-3 Mei 2022_
┃Note : Semakin lama harga akan 
┃semakin naik, jadi disarankan untuk
┃PO awal-awal agar mendapat harga ┃murah
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)
break
case 'dmff':
reply2(` ┏━━━━━━━━━━━━━━⬣
┃       「💎 *LIST DIAMOND* 」
┃           「 🎮*FREE FIRE* 」
┃     「✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*3-5 MENIT MAX 30 MENIT*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃5💎 = Rp825
┃20💎 = Rp2.750
┃50💎 = Rp6.600
┃70💎 = Rp9.075
┃100💎 = Rp13.200
┃120💎 = Rp18.583
┃140💎 = Rp18.150
┃210💎 = Rp27.225
┃355💎 = Rp45.375
┃500💎 = Rp64.350
┃720💎 = Rp90.750
┃1000💎 = Rp127.050
┃2000💎 = Rp247.500
┃4000💎 = Rp495.000
┃
┃💳 M. MINGGUAN = Rp27.500
┃💳 M. BULANAN = Rp137.5OO
┗━━━━━━━━━━━━━━⬣
┃Pecahan lebih lengkap cek di
┃http://bit.ly/PricelistMBStore
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order dm :
┃Sisa dm :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)

break
case 'mlc':
reply2(` *STOCK KOSONG*
`)

break
case 'pubga':
reply2(`┏━━━━━━━━━━━━━━⬣
┃               「 💵 *LIST UC* 」
┃「 🎮*PUBG MOBILE SEMIFAST* 」
┃     「 🇮🇩*REGION INDONESIA* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10-180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 10.00 - 19.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃263💵 = Rp46.500
┃525💵 = Rp90.000
┃788💵 = Rp134.500
┃1050💵 = Rp179.500
┃1375💵 = Rp224.000
┃1638💵 = Rp269.000
┃1900💵 = Rp313.500
┃2163💵 = Rp358.500
┃2425💵 = Rp403.500
┃2875💵 = Rp448.000
┃3138💵 = Rp493.000
┃3400💵 = Rp537.500
┃3925💵 = Rp627.500
┃4250💵 = Rp672.000
┃6000💵 = Rp896.900
┃9375💵 = Rp1.344.000
┃46875💵 = Rp6.720.000
┃93750💵 = Rp13.340.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order UC :
┃Region :
┃Paket : PUBG A
┃Sisa UC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)

break
case 'pubgb':
reply2(`┏━━━━━━━━━━━━━━⬣
┃               「 💵 *LIST UC* 」
┃    「 🎮*PUBG MOBILE FAST* 」
┃    「 🇮🇩*REGION INDONESIA* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 10 MENIT MAX 3 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃16💵 = Rp2.675
┃26💵 = Rp4.500
┃52💵 = Rp9.000
┃105💵 = Rp18.000
┃131💵 = Rp22.500
┃263💵 = Rp44.000
┃530💵 = Rp87.000
┃825💵 = Rp130.000
┃1100💵 = Rp172.500
┃1925💵 = Rp302.000
┃2200💵 = Rp348.500
┃2463💵 = Rp389.500
┃2730💵 = Rp433.000
┃3025💵 = Rp477.500
┃3300💵 = Rp513.000
┃3563💵 = Rp566.500
┃3830💵 = Rp610.500
┃4125💵 = Rp653.000
┃4400💵 = Rp697.000
┃4663💵 = Rp790.000
┃4930💵 = Rp784.000
┃5500💵 = Rp870.000
┃6600💵 = Rp1.038.000
┃7700💵 = Rp1.208.000
┃8800💵 = Rp1.381.000
┃9900💵 = Rp1.556.000
┃10005💵 = Rp1.567.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order UC :
┃Region :
┃Paket : PUBG B
┃Sisa UC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`)

break
case 'l-premium':
reply2(`*---------------------------------------*
   🎥 *LAYANAN SIARAN PREMIUM* 🎥
                   🎥 *MB STORE* 🎥
*---------------------------------------*

🎬 _*NETFLIX PREMIUM*_ 🎬 *---------------------------------------*
▫️ *NETFLIX PREMIUM SHARED*
[ 3 HARI - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 7.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 7 HARI - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 10.500]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 21.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - MOBILE - VPN ]
=> [Rp 24.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 1 USER ]
=> [Rp 30.000]
▫️ *NETFLIX PREMIUM PRIVATE*
[ 1 BULAN - 5 PROFILE ]
=> [Rp 125.000]

*---------------------------------------*
🎬 _*IQIYI PREMIUM*_ 🎬
*---------------------------------------*
▫️ *IQIYI PREMIUM SHARED*
[ 1 BULAN ]
=> [Rp 20.000]
▫️ *IQIYI PREMIUM PRIVATE*
[ 1 BULAN - 2 DEVICE ]
=> [Rp 24.000]

*---------------------------------------*
🎬 _*WE-TV PREMIUM *_🎬 *---------------------------------------*
▫️ *WE-TV PREMIUM SHARED*
[ 1 BULAN ]
=> [Rp 10.000]
▫️ *WE-TV PREMIUM SHARED*
[ 1 TAHUN ]
=> [Rp 33.000]
▫️ *WE-TV PREMIUM PRIVATE*
[ 1 BULAN ]
=> [Rp 35.000]

*---------------------------------------*
🎬 _*DISNEY HOTSTAR PREMIUM *_🎬
*---------------------------------------*
▫️ *DISNEY + HOTSTAR SHARED* 
[ 1 BULAN ]
=> [Rp 17.000]
▫️ *DISNEY - HOTSTAR SHARED*
[ 2 BULAN ]
=> [Rp 31.000]

*---------------------------------------*
🎬 _*YOUTUBE PREMIUM*_ 🎬 *---------------------------------------*
▫️ *YOUTUBE PREMIUM ANGGOTA*
[ 1 BULAN - INVITE ]
=> [Rp 4.500]
▫️ *YOUTUBE PREMIUM FAMILY*
[ 1 BULAN - 5 ANGGOTA ]
=> [Rp 6.500]
▫️ *YOUTUBE PREMIUM INDIVIDU*
 [ 4 BULAN ]
=> [Rp 15.000]

*---------------------------------------*
🎬 _*CANVA PREMIUM*_🎬
*---------------------------------------*
▫️ *CANVA PRO*
[ 1 BULAN ]
=> [Rp 7.000]
▫️ *CANVA PRO*
[ 1 TAHUN - GARANSI 6 BULAN ]
=> [Rp 16.000]
▫️ *CANVA PRO*
[ PERMANENT - GARANSI 1 TAHUN ]
=> [Rp 20.000]

*---------------------------------------*
🎬 _*VIDEO PREMIER PREMIUM*_🎬 
*---------------------------------------*
▫️ *VIDEO PREMIER SHARED*
[ 1 BULAN ]
=> [Rp 19.000]
▫️ *VIDEO PREMIER PRIVATE*
[ 1 BULAN ]
=> [Rp 31.000]

*---------------------------------------*
🎬 _*SPOTIFY PREMIUM*_🎬 
*---------------------------------------*
▫️ *SPOTIFY PREMIUM ANGGOTA*
[ 2 BULAN - INVITE - INDO]
=> [Rp 14.000]
▫️ *SPOTIFY PREMIUM ADMIN*
[ 2 BULAN - INDO ]
=> [Rp 24.000]
 
*---------------------------------------*
🗒 NOTE :
*SEMUA LAYANAN PREMIUM FULL GARANSI*
*---------------------------------------*
📢 WA ADMIN
📞 wa.me/6281212303462
📞 wa.me/6281212303461`)

break
case 'e-money':
reply2(`┏━━━━━━━━━━━━━━⬣
┃        「 💰 LIST HARGA 」
┃   「 💵 SALDO E-MONEY 」
┃         「 ✅ MB STORE 」
⬣ ━━━━━━━━━━━━━━⬣
┃                 BRI BRIZZI
┗━━━━━━━━━━━━━━⬣
┃Brizzi 20.000 = Rp21.875
┃Brizzi 50.000 = Rp51.710
┃Brizzi 100.000 = Rp101.710
┃Brizzi 200.000 = Rp201.600
┗━━━━━━━━━━━━━━⬣
┃                     DANA
┏━━━━━━━━━━━━━━⬣
┃Dana Rp10.000 = Rp11.275
┃Dana Rp15.000 = Rp16.240
┃Dana Rp20.000 = Rp21.280
┃Dana Rp25.000 = Rp26.245
┃Dana Rp30.000 = Rp31.255
┃Dana Rp40.000 = Rp41.295
┃Dana Rp50.000 = Rp51.295
┃Dana Rp60.000 = Rp61.255
┃Dana Rp70.000 = Rp71.375
┃Dana Rp75.000 = Rp76.255
┃Dana Rp80.000 = Rp81.375
┃Dana Rp90.000 = Rp91.375
┃Dana Rp100.000 = Rp101.255
┃Dana Rp150.000 = Rp151.255
┃Dana Rp200.000 = Rp201.255
┃Dana Rp25.000 = Rp251.255
┃Dana Rp300.000 = Rp301.255
┃Dana Rp400.000 = Rp401.255
┃Dana Rp500.000 = Rp501.255
┃Dana Rp800.000 = Rp801.255
┃Dana Rp900.000 = Rp901.535
┃Dana Rp1.000.000 = Rp1.000.2000
┗━━━━━━━━━━━━━━⬣
┃                     DOKU
┏━━━━━━━━━━━━━━⬣
┃Doku 55.000 = Rp56.800
┃Doku 65.000 = Rp66.800
┃Doku 85.000 = Rp86.800
┃Doku 95.000 = Rp96.800
┗━━━━━━━━━━━━━━⬣
┃                    GOPAY
┏━━━━━━━━━━━━━━⬣
┃Gopay 5.000 = Rp6.690
┃Gopay 10.000 = Rp11.850
┃Gopay 15.000 = Rp16.775
┃Gopay 20.000 = Rp21.850
┃Gopay 25.000 = Rp26.775
┃Gopay 30.000 = Rp31.790
┃Gopay 35.000 = Rp36.850
┃Gopay 40.000 = Rp41.790
┃Gopay 45.000 = Rp46.850
┃Gopay 50.000 = Rp51.895
┃Gopay 55.000 = Rp56.895
┃Gopay 60.000 = Rp61.875
┃Gopay 65.000 = Rp66.875
┃Gopay 70.000 = Rp71.875
┃Gopay 75.000 = Rp76.895
┃Gopay 80.000 = Rp81.875
┃Gopay 85.000 = Rp86.875
┃Gopay 90.000 = Rp91.875
┃Gopay 95.000 = Rp96.875
┃Gopay 100.000 = Rp101.790
┃Gopay 150.000 = Rp151.790
┃Gopay 200.000 = Rp201.790
┃Gopay 250.000 = Rp251.790
┃Gopay 500.000 = Rp501.800
┃Gopay 1.000.000 = Rp1.002.150
┗━━━━━━━━━━━━━━⬣
┃            GOPAY DRIVER
┏━━━━━━━━━━━━━━⬣
┃Gopay Driver 10.000 = Rp11.280
┃Gopay Driver 15.000 = Rp16.455
┃Gopay Driver 20.000 = Rp21.285
┃Gopay Driver 25.000 = Rp26.285
┃Gopay Driver 30.000 = Rp31.350
┃Gopay Driver 35.000 = Rp36.350
┃Gopay Driver 40.000 = Rp41.350
┃Gopay Driver 45.000 = Rp46.325
┃Gopay Driver 50.000 = Rp51.300
┃Gopay Driver 55.000 = Rp56.350
┃Gopay Driver 60.000 = Rp61.350
┃Gopay Driver 65.000 = Rp66.350
┃Gopay Driver 70.000 = Rp71.325
┃Gopay Driver 75.000 = Rp76.300
┃Gopay Driver 80.000 = Rp81.350
┃Gopay Driver 85.000 = Rp86.350
┃Gopay Driver 90.000 = Rp91.350
┃Gopay Driver 95.000 = Rp96.350
┃Gopay Driver 100.000 = Rp101.300
┃Gopay Driver 150.000 = Rp151.300
┃Gopay Driver 200.000 = Rp201.300
┃Gopay Driver 250.000 = Rp251.300
┃Gopay Driver 300.000 = Rp301.300
┃Gopay Driver 500.000 = Rp501.300
┗━━━━━━━━━━━━━━⬣
┃                     GRAB
┏━━━━━━━━━━━━━━⬣
┃Grab Customer 20.000 = Rp21.095
┃Grab Customer 25.000 = Rp26.095
┃Grab Customer 40.000 = Rp41.115
┃Grab Customer 50.000 = Rp51.115
┃Grab Driver 50.000 = Rp51.920
┃Grab Customer 75.000 = Rp76.115
┃Grab Driver 100.000 = Rp101.115
┃Grab Customer 100.000 = Rp101.425
┃Grab Driver 150.000 = Rp151.350
┃Grab Customer 150.000 = Rp151.995
┃Grab Driver 200.000 = Rp201.350
┃Grab Customer 200.000 = Rp201.995
┃Grab Driver 250.000 = Rp251.350
┗━━━━━━━━━━━━━━⬣
┃                   LINK AJA
┏━━━━━━━━━━━━━━⬣
┃Link Aja Rp10.000 = Rp11.250
┃Link Aja Rp15.000 = Rp16.375
┃Link Aja Rp20.000 = Rp21.240
┃Link Aja Rp25.000 = Rp26.240
┃Link Aja Rp30.000 = Rp31.290
┃Link Aja Rp40.000 = Rp41.255
┃Link Aja Rp50.000 = Rp51.290
┃Link Aja Rp60.000 = Rp61.290
┃Link Aja Rp70.000 = Rp71.255
┃Link Aja Rp80.000 = Rp80.255
┃Link Aja Rp90.000 = Rp91.290
┃Link Aja Rp100.000 = Rp101.290
┃Link Aja Rp150.000 = Rp151.300
┃Link Aja Rp200.000 = Rp201.290
┃Link Aja Rp250.000 = Rp251.850
┗━━━━━━━━━━━━━━⬣
┃           MANDIRI E-TOLL
┏━━━━━━━━━━━━━━⬣
┃Mandiri E-Toll 10.000 = Rp12.075
┃Mandiri E-Toll 20.000 = Rp21.700
┃Mandiri E-Toll 25.000 = Rp26.700
┃Mandiri E-Toll 30.000 = Rp32.175
┃Mandiri E-Toll 40.000 = Rp42.175
┃Mandiri E-Toll 50.000 = Rp51.700
┃Mandiri E-Toll 75.000 = Rp76.700
┃Mandiri E-Toll 100.000 = Rp101.700
┃Mandiri E-Toll 150.000 = Rp152.150
┃Mandiri E-Toll 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃                    MAXIM
┏━━━━━━━━━━━━━━⬣
┃Maxim Driver 10.000 = Rp11.800
┃Maxim Driver 15.000 = Rp16.800
┃Maxim Driver 20.000 = Rp22.000
┃Maxim Driver 25.000 = Rp26.800
┃Maxim Driver 30.000 = Rp31.800
┃Maxim Driver 35.000 = Rp36.800
┃Maxim Driver 40.000 = Rp41.800
┃Maxim Driver 45.000 = Rp46.800
┃Maxim Driver 50.000 = Rp51.800
┃Maxim Driver 60.000 = Rp61.800
┃Maxim Driver 70.000 = Rp71.800
┃Maxim Driver 80.000 = Rp81.800
┃Maxim Driver 90.000 = Rp91.800
┃Maxim Driver 100.000 = Rp101.800
┗━━━━━━━━━━━━━━⬣
┃                      OVO
┏━━━━━━━━━━━━━━⬣
┃OVO 5.000 = Rp6.605
┃OVO 10.000 = Rp10.455
┃OVO 15.000 = Rp16.600
┃OVO 20.000 = Rp20.435
┃OVO 25.000 = Rp25.424
┃OVO 30.000 = Rp30.475
┃OVO 40.000 = Rp40.375
┃OVO 50.000 = Rp50.424
┃OVO 60.000 = Rp60.475
┃OVO 70.000 = Rp70.475
┃OVO 75.000 = Rp75.825
┃OVO 80.000 = Rp80.475
┃OVO 90.000 = Rp90.825
┃OVO 100.000 = Rp100.750
┃OVO 150.000 = Rp150.450
┃OVO 200.000 = Rp200.450
┃OVO 250.000 = Rp250.425
┃OVO 300.000 = Rp300.425
┃OVO 400.000 = Rp400.425
┃OVO 500.000 = Rp500.425
┃OVO 600.000 = Rp600.425
┃OVO 700.000 = Rp701.150
┃OVO 800.000 = Rp801.150
┃OVO 900.000 = Rp901.150
┃OVO 1.000.000 = Rp1.000.1150
┗━━━━━━━━━━━━━━⬣
┃               SHOPEEPAY
┏━━━━━━━━━━━━━━⬣
┃Shopeepay 10.000 = Rp11.400
┃Shopeepay 14.500 = Rp16.535
┃Shopeepay 15.000 = Rp16.360
┃Shopeepay 20.000 = Rp21.350
┃Shopeepay 25.000 = Rp26.285
┃Shopeepay 30.000 = Rp31.375
┃Shopeepay 35.000 = Rp36.315
┃Shopeepay 40.000 = Rp41.345
┃Shopeepay 45.000 = Rp46.315
┃Shopeepay 50.000 = Rp51.450
┃Shopeepay 55.000 = Rp56.315
┃Shopeepay 60.000 = Rp61.550
┃Shopeepay 65.000 = Rp66.315
┃Shopeepay 70.000 = Rp71.550
┃Shopeepay 75.000 = Rp76.550
┃Shopeepay 80.000 = Rp81.315
┃Shopeepay 85.000 = Rp86.315
┃Shopeepay 90.000 = Rp91.345
┃Shopeepay 95.000 = Rp96.315
┃Shopeepay 100.000 = Rp101.550
┃Shopeepay 150.000 = Rp151.345
┃Shopeepay 200.000 = Rp201.345
┃Shopeepay 250.000 = Rp251.350
┃Shopeepay 300.000 = Rp301.450
┗━━━━━━━━━━━━━━⬣
┃              TAPCASH BNI
┏━━━━━━━━━━━━━━⬣
┃Tapcash BNI 10.000 = Rp11.700
┃Tapcash BNI 20.000 = Rp21.700
┃Tapcash BNI 50.000 = Rp51.700
┃Tapcash BNI 100.000 = Rp101.700
┗━━━━━━━━━━━━━━⬣
┃                     TIX ID
┏━━━━━━━━━━━━━━⬣
┃TIX ID 10.000 = Rp12.105
┃TIX ID 25.000 = Rp27.010
┃TIX ID 50.000 = Rp52.025
┃TIX ID 100.000 = Rp101.700
┃TIX ID 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒 NOTE  」━━━━━⬣
┃JIKA ADA KESALAHAN NOMOR ┃ATAU PESANAN ATAS KESALAHAN
┃BUYER MAKA 100% BUKAN
┃TANGGUNG JAWAB ADMIN
┗━━━━━━━━━━━━━━━━⬣`)

//BATAS MENERR JOLLYMAX//

break
case 'pay-mlam':
reply2(`*💳 PAYMENT MLAM 😁*
➖➖➖➖➖➖➖➖➖➖➖

╭─「 *BAYAR DULU BERO* 」
║╭ *OPEN JAM 09 /TUTUP JAM 21*
║├「DANA/GOPAY/LING AJA」
║├ [1]📶 082391768021
║├ [2]📶 0895601301347
║├ A/N DANA 1 : MAHARANI
║├ A/N GOPAY : JOLLY MAX ID (JMI)
║├ A/N LING AJA : WINORO HADI M
║├ N/A DANA 2 : ANDRE S
║╰─ BAYAR DULU SEBELUM YOP UP
║╭─ *[ ATM VIRSUAL ]*
║├ 💳 *BCA VIRSUAL*
║│ 3901 082391768021
║├ 💳 *BANK BRI*
║│ 8881 0 082391768021
║├ 💳 *PERMATA BANK*
║│ 8528 082391768021
║├ 💳 *ALFAMAT* *INDOMARET*
║│ 0823 9176 8021
║KE KASIR BILANG BAYAR UTANG 😆
║├ 💳 *INDOMARET*
║│ 0823 9176 8021 / MINTAK KODE
║ PEMBAYARAN KE SAYA.
║╰─ BAYAR DULU SEBELUM YOP UP
║╭─ BANK LAIN
║├ 🏧 SEAKBANK :
║│ 901711939465
║├ 🏧 NEO BANK :
║│ 5859458141770827
║╰─────
║╭─ √ QRIS PAYMENT
DANA : https://postimg.cc/kBtbtSrP
GOPAY : https://postimg.cc/D85cBsjJ
NEO : https://postimg.cc/tYgr02Vt
║
╰─────
➖➖➖➖➖➖➖➖➖➖➖
 *_© COUNTER BY ༒ɴᴀɴᴅᴏ࿑
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'mlam':
reply(`*DIAMOND MLAM 😁*
=============================
KOSONG KK.... 🥺
➖➖➖➖➖➖➖➖➖➖➖
 *_© COUNTER BY ༒ɴᴀɴᴅᴏ࿑
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'daftar-lite':
reply(`*YUK DAFTAR DULU😁*
➖➖➖➖➖➖➖➖➖➖➖
*INI KK LING PENDAFTARAN NYA KK*
//LING : https://forms.gle/7ijm4tZnTL8f18zx7
*INI LING PEMBAYARAN NYA*
//LING : https://saweria.co/NandoOfc

// *INI ADALAH OWNER PENDAFTARAN* //
[👥 OWNER] : https://wa.me/6289646775883
➖➖➖➖➖➖➖➖➖➖➖
 *_© COUNTER BY ༒ɴᴀɴᴅᴏ࿑
➖➖➖➖➖➖➖➖➖➖➖`)
break

//PEMBATAS//JOLLY MAX PUNYA YG BAWAH//

break
case 'topupgopay':
reply(`_chat owner_`)
break
case 'topupdana':
reply(`_chat owner_`)
break
case 'topupovo':
reply(`_chat owner_`)
break
case 'pulsa':
reply(`TOP UP PULSA ID
➖➖➖➖➖➖➖➖➖➖➖
┏━━> ⌜ *PULSA NABAH MASA AKTIF* ⌟ 
┣ • ${prefix}telkomsel
┣ • ${prefix}tri
┣ • ${prefix}indosat
┣ • ${prefix}xl
┣ • ${prefix} 
┗━━━━━━━━━━━>
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Rakun Official_* 
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'telkomsel':
reply2(`TOP UP PULSA TELKOMSEL
➖➖➖➖➖➖➖➖➖➖➖
MENAMBAH MASA AKTIF

🎗️5K   💹 Rp5.500
🎗️10K	💹 Rp10.500
🎗️15K	💹 Rp15.000
🎗️20K	💹 Rp20.000
🎗️25K	💹 Rp25.000
🎗️30K	💹 Rp30.000
🎗️40K	💹 Rp40.000
🎗️50K	💹 Rp50.900
🎗️75K	💹 Rp74.000
🎗️100K 💹 Rp99.000
🎗️200K 💹 Rp194.600
🎗️300K 💹 Rp291.900
🎗️500K 💹 Rp486.000
🎗️1JT  💹 Rp970.000
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Rakun Official_* 
 
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'tri':
reply2(`TOP UP PULSA TRI3
➖➖➖➖➖➖➖➖➖➖➖
MENAMBAH MASA AKTIF

🎗️5K   💹 Rp5.500
🎗️10K	💹 Rp10.500
🎗️15K	💹 Rp15.000
🎗️20K	💹 Rp20.000
🎗️25K	💹 Rp25.000
🎗️30K	💹 Rp30.000
🎗️50K	💹 Rp50.000
🎗️100K 💹 Rp99.000
🎗️200K 💹 Rp198.000
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Rakun Official_* 
➖➖➖➖➖➖➖➖➖➖➖`)

//INI ADALAH MENU TOP UP PULSA//
break
case 'bot':
reply2(`IYA KK ADA YG BISA SAYA BANTING...
SIKALAN KETIK 👉 #menu
UNTUK CEK MENU KAMI`)


break
case 'p':
reply2(`O━• *PESANAN DI PROSES* •━O

📅 TANGGAL  : ${tanggal}/${bulan}/${tahun}
⏰ JAM       : ${jam} 
⏳ STATUS   : Pending 🔄
🗒 ADMIN  : ${pushname}

          *MOHON DITUNGGU* 
      ━O━O━•••••••••••••━O━O━`)
        
break
case 'd':
reply2(`「O━• *PESANAN SUKSES* •━O

📅 TANGGAL  : ${tanggal}/${bulan}/${tahun}
⏰ JAM      : ${jam}
⏳ STATUS   : Sukses ☑️
🗒 ADMIN  : ${pushname}


[ *TERIMA KASIH SUDAH ORDER⁩* ] 
[ *DI TUNGGU ORDERAN SELANJUTNYA* ]

             *IG : @mballstore* 
           ━O━O━•••••••••••••━O━O━`)


break
                 case 'daftar':
                 case 'data':
                 case 'pendaftaran':
if (isBanned) return reply(mess.banned)
anu =`Hi Member, Silahkan Pilih Daftar SewaBot⤵️
╔════════════════════
║ *PENDAFTARAN SEWA BOT*
╠════════════════════
║╭──❉ *DATA DIRI KAMU* ❉─────
║│➸ *NAMA* : ${pushname}
║│➸ *TGL*   : ${tanggal}/${bulan}/${tahun}
║│➸ *GRUP* :  MBSTORE
║╰──────────────────
╠════════════════════
║       .${kyun(runi)}
║✅MBSTORE GAME TOPUP✅
╚════════════════════`
sendButImage(from, anu,`DAFTAR DULU OM\n© Creator By MB Store Official`, qris, [
            {buttonId: `!ok`, buttonText: {displayText: `DAFTRAR`, }, type: 1, },
            {buttonId: `!o`, buttonText: { displayText: `TIDAK`, }, type: 1, },
            ]); 
break
//jawab nye
case 'ok':
reply2(`*TERIMAKASIH ATAS DONASINYA ☺️*`)
break
case 'o':
reply2(`*KENAPA TIDAK? 😆*`)
break


case 'asupanmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑨𝒔𝒖𝒑𝒂𝒏 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}asupangeayubi
┃⬡${prefix}asupanaura
┃⬡${prefix}asupanbunga
┃⬡${prefix}asupanayu
┃⬡${prefix}asupancaca
└──────────────>`)
break

case 'makermenu':
if (isBanned) return reply(mess.banned)
reply2(`┏━━> ⌜Maker Menu⌟ 
┣ • ${prefix}blackpink {teks}
┣ • ${prefix}pipe {teks}
┣ • ${prefix}heloween {teks}
┣ • ${prefix}heloween2 {teks}
┣ • ${prefix}horor {teks}
┣ • ${prefix}nulis {teks}
┣ • ${prefix}sirkuit {teks}
┣ • ${prefix}discovery {teks}
┣ • ${prefix}fiction {teks}
┣ • ${prefix}8bit {teks}
┣ • ${prefix}demon {teks}
┣ • ${prefix}transformer {teks}
┣ • ${prefix}berry {teks}
┣ • ${prefix}leyered {teks}
┣ • ${prefix}thunder {teks}
┣ • ${prefix}magma {teks}
┣ • ${prefix}stone {teks}
┣ • ${prefix}neon3 {teks}
┣ • ${prefix}glitch {teks}
┣ • ${prefix}glitch2 {teks}
┣ • ${prefix}broken {teks}
┣ • ${prefix}nulis2 {teks}
┣ • ${prefix}gradient {teks}
┣ • ${prefix}glossy {teks}
┣ • ${prefix}watercolor {teks}
┣ • ${prefix}multicolor {teks}
┣ • ${prefix}neondevil {teks}
┣ • ${prefix}underwater {teks}
┣ • ${prefix}bear {teks}
┗━━━━━━━━━━━>`)
break

case 'gamemenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑮𝒂𝒎𝒆 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}family100
┃⬡${prefix}tebakgambar
┃⬡${prefix}caklontong
┃⬡${prefix}tebakbendera
└──────────────>`)
break

case 'animemenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑨𝒏𝒊𝒎𝒆 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}ppcouple
┃⬡${prefix}uniform
┃⬡${prefix}cuckold
┃⬡${prefix}zettairyouiki
┃⬡${prefix}sfwneko
┃⬡${prefix}sao
┃⬡${prefix}cosplay
┃⬡${prefix}milf
┃⬡${prefix}loli
┃⬡${prefix}lovelive
┃⬡${prefix}hsdxd
┃⬡${prefix}husbu
┃⬡${prefix}wallml
┃⬡${prefix}waifu
└──────────────>`)
break

case 'hewanmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑯𝒆𝒘𝒂𝒏 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}fox
┃⬡${prefix}dog
┃⬡${prefix}cat
┃⬡${prefix}panda
┃⬡${prefix}panda1
┃⬡${prefix}bird
┃⬡${prefix}koala
└──────────────>`)
break

case 'hentaimenu':
if (isBanned) return reply(mess.banned)
reply2(`┏━━> ⌜Hentai Menu⌟ 
┣ • ${prefix}art
┣ • ${prefix}bts
┣ • ${prefix}exo
┣ • ${prefix}elf
┣ • ${prefix}loli
┣ • ${prefix}neko
┣ • ${prefix}waifu
┣ • ${prefix}shota
┣ • ${prefix}husbu
┣ • ${prefix}sagiri
┣ • ${prefix}shinobu
┣ • ${prefix}megumin
┣ • ${prefix}wallnime
┣ • ${prefix}chiisaihentai
┣ • ${prefix}trap
┣ • ${prefix}blowjob
┣ • ${prefix}yaoi
┣ • ${prefix}ecchi
┣ • ${prefix}hentai
┣ • ${prefix}ahegao
┣ • ${prefix}hololewd
┣ • ${prefix}sideoppai
┣ • ${prefix}animefeets
┣ • ${prefix}animebooty
┣ • ${prefix}animethighss
┣ • ${prefix}hentaiparadise
┣ • ${prefix}animearmpits
┣ • ${prefix}hentaifemdom
┣ • ${prefix}lewdanimegirls
┣ • ${prefix}biganimetiddies
┣ • ${prefix}animebellybutton
┣ • ${prefix}hentai4everyone
┣ • ${prefix}bj
┣ • ${prefix}ero
┣ • ${prefix}cum
┣ • ${prefix}feet
┣ • ${prefix}yuri
┣ • ${prefix}trap
┣ • ${prefix}lewd
┣ • ${prefix}feed
┣ • ${prefix}eron
┣ • ${prefix}solo
┣ • ${prefix}gasm
┣ • ${prefix}poke
┣ • ${prefix}anal
┣ • ${prefix}holo
┣ • ${prefix}tits
┣ • ${prefix}kuni
┣ • ${prefix}kiss
┣ • ${prefix}erok
┣ • ${prefix}smug
┣ • ${prefix}baka
┣ • ${prefix}solog
┣ • ${prefix}feetg
┣ • ${prefix}lewdk
┣ • ${prefix}waifu
┣ • ${prefix}pussy
┣ • ${prefix}femdom
┣ • ${prefix}cuddle
┣ • ${prefix}hentai
┣ • ${prefix}eroyuri
┣ • ${prefix}cum_jpg
┣ • ${prefix}blowjob
┣ • ${prefix}erofeet
┣ • ${prefix}holoero
┣ • ${prefix}classic
┣ • ${prefix}erokemo
┣ • ${prefix}fox_girl
┣ • ${prefix}futanari
┣ • ${prefix}lewdkemo
┣ • ${prefix}wallpaper
┣ • ${prefix}pussy_jpg
┣ • ${prefix}kemonomimi
┣ • ${prefix}nsfw_avatar
┣ • ${prefix}ngif
┣ • ${prefix}nsfw_neko_gif
┣ • ${prefix}random_hentai_gif
┗━━━━━━━━━━━>`)
break

case 'islammenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝒊𝒔𝒍𝒂𝒎 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}listsurah
┃⬡${prefix}asmaulhusna
┃⬡${prefix}alquran 
┃⬡${prefix}alquran 
┃⬡${prefix}alquran 
┃⬡${prefix}alquranaudio 
┃⬡${prefix}alquranaudio 
┃⬡${prefix}kisahnabi 
┃⬡${prefix}jadwalsholat 
└──────────────>`)
break

case 'downloadmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}tiktok {link tiktok}
┃⬡${prefix}play {Judul Lagu}
┃⬡${prefix}lirik {Judul Lagu}
┃⬡${prefix}herolist {Hero}
┃⬡${prefix}herodetail {nama Hero}
└──────────────>`)
break

case 'ownermenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}addcmd
┃⬡${prefix}addprem
┃⬡${prefix}delprem
┃⬡${prefix}premiumlist
┃⬡${prefix}ban
┃⬡${prefix}unban
┃⬡${prefix}delcmd
┃⬡${prefix}listcmd
┃⬡${prefix}exif
┃⬡${prefix}bc
┃⬡${prefix}leaveall
┃⬡${prefix}bc2
└──────────────>`)
break

case 'setifikatmenu':
if (isBanned) return reply(mess.banned)
reply2(`─❒ ⌜𝑺𝒆𝒓𝒕𝒊𝒇𝒊𝒌𝒂𝒕 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}serti1
┃⬡${prefix}serti2
┃⬡${prefix}serti3
└──────────────>`)
break

case 'grupmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑮𝒓𝒖𝒑 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}lapor
┃⬡${prefix}request
┃⬡${prefix}here
┃⬡${prefix}setgrupname
┃⬡${prefix}setdesc
┃⬡${prefix}setppgrup
┃⬡${prefix}promote
┃⬡${prefix}demote
┃⬡${prefix}welcome
┃⬡${prefix}antilink
┃⬡${prefix}group
┃⬡${prefix}wame
┃⬡${prefix}notif
└──────────────>`)
break

case 'ocrmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭─❒ ⌜𝑶𝒄𝒓 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}namaninja
┃⬡${prefix}pantun
┃⬡${prefix}katasindiran
┃⬡${prefix}katailham
┃⬡${prefix}tongue
┃⬡${prefix}ssweb
┃⬡${prefix}nickepep
└──────────────>`)
break

case 'stickermenu':
if (isBanned) return reply(mess.banned)
reply2(`┏━━> ⌜Sticker Menu⌟ 
┣ • ${prefix}amongus
┣ • ${prefix}patrick
┣ • ${prefix}toimg
┣ • ${prefix}sticker
┣ • ${prefix}ttp
┣ • ${prefix}attp
┗━━━━━━━━━━━>`)
break

case 'kodemenu':
if (isBanned) return reply(mess.banned)
reply2(`┏━━> ⌜Kode Menu⌟ 
┣ • ${prefix}tts
┣ • ${prefix}kodenegara
┣ • ${prefix}kodebahasa
┗━━━━━━━━━━━>`)
break

case 'modemenu':
if (isBanned) return reply(mess.banned)
reply2(`┏━━> ⌜Mode Menu⌟ 
┣ • ${prefix}public
┣ • ${prefix}self
┗━━━━━━━━━━━>`)
break

//══════════[ ASUPAN MENU ]════════════════════════════//
             case 'asupangeayubi':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await Ramdani.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
             case 'asupanaura':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await Ramdani.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
            case 'asupanbunga':
            if (isBanned) return reply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            reply(mess.wait)
            const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
            case 'asupanayu':
            if (isBanned) return reply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            reply(mess.wait)
            const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await Ramdani.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
             case 'asupancaca':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
//══════════[ANIME MENU]════════════════════════════//
            case 'ppcouple':
            if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              Ramdani.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
              Ramdani.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (isBanned) return reply(mess.banned)
				Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, swordartonline, image, {quoted: froxx, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (isBanned) return reply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, highschooldxd, image, {quoted: froxx, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (isBanned) return reply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, lovelive, image, {quoted: froxx, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (isBanned) return reply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					Ramdani.sendMessage(from, qute6, image, { quoted: froxx, caption: ':)' })
					break
             case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator RamdaniCode`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//══════════[ APIKEY ALPHA ]════════════════════════════//
case 'blackpink':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'pipe':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'horor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'sirkuit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'discovery':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'fiction':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case '8bit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'demon':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'transformer':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'berry':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'leyered':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'thunder':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'magma':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'stone':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neon3':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'herrypoter':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'embosed':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'broken':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'gradient':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glossy':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'watercolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'multicolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neondevil':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'underwater':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'bear':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
              
// Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
//══════════[ SELF DAN PUBLIC ]════════════════════════════//
case 'public':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = false
fakeText('*Sukses mengubah mode self*')
break
//══════════[ EXIF NYA GAN ]════════════════════════════//
           case 'exif':
                    if (isBanned) return reply(mess.banned)
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				     break
//══════════[ ISLAMI MENU ]════════════════════════════//
                case 'listsurah':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (isBanned) return reply(mess.banned)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//══════════[ tts Gunakan Kode Bahasa ]════════════════════════════//
                     case 'bahasa':
                     if (isBanned) return reply(mess.banned)
                    Ramdani.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (isBanned) return reply(mess.banned)
					Ramdani.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return Ramdani.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Ramdani.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//══════════[ Sticker Menu ]════════════════════════════//
           case 'ttp':  
           if (isBanned) return reply(mess.banned)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Syifa Botz Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    Syifa.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
          case 'attp':
          if (isBanned) return reply(mess.banned)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           Syifa.sendMessage(from, buffer, sticker, { quoted: mek })
            break
            case 'patrick':
            if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			Syifa.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
			case 'amongus':
			if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${Lolhuman}`)
			Syifa.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
            case 'toimg':
            if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Syifa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (isBanned) return reply(mess.banned)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Ramdani.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Ramdani.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
//══════════[ DOWNLOAD MENU ]════════════════════════════//
case 'play':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
Ramdani.sendMessage(from, mp4, video)
break
case 'mp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
Ramdani.sendMessage(from, mp3, audio)
break
case 'ytmp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=apivinz`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
Ramdani.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
Ramdani.sendMessage(from, res, audio)
break
case 'ytmp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=apivinz`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
Ramdani.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
Ramdani.sendMessage(from, res, video)
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              result = `DhenxCode¸ *Nickname*: ${data.result.author.nickname}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'buttons3': 
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              Ramdani.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'buttons4': 
          if (isBanned) return reply(mess.banned)
           reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${args[0]}`)
              Ramdani.sendMessage(from, data, audio, { quoted: froxx })
              break
              case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=apivinz&q=${q}`)
		     .then(res => {
			  Ramdani.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'lirik':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break

//══════════[ OWNER MENU ]════════════════════════════//

case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
case 'bc': 
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'by MB BOT',
			"buttons": [
			{"buttonId": `${prefix}simpelmenu`,
			"buttonText": {"displayText": "Simple Menu"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
        if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Ramdani.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Ramdani.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
//══════════[ WELCOME MENU ]════════════════════════════//
case 'intro':
var intro = `ᴡᴇʟᴄᴏᴍᴇ
ɪɴᴛʀᴏ
┌ > ɴᴀᴍᴀ : 
┌ > ᴀsᴀʟ ᴋᴏᴛᴀ : 
┌ > ᴜsɪᴀ : 
┌ > ɢᴇɴᴅᴇʀ : 
┌ > sᴛᴀᴛᴜs :

JANGAN LUPA FOLLOW IG MBSTORE YA 🥺 
https://instagram.com/mballstore
`
Ramdani.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
//══════════[ SETIFIKAT MENU]════════════════════════════//
case 'serti1':
case 'serti2':
case 'serti3':
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Ramdani.sendMessage(from, buff, image, { quoted: froxx, caption: 'Nih Bro Hasil nya' })
break
//══════════[ BERMAIN MENU ]════════════════════════════//
case 'nickepep':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${Leyscoders}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${Leyscoders}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'tongue':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break
//══════════[ PEMBATASAN]════════════════════════════//
case 'notif':
if (isBanned) return reply(mess.banned)
if (!isGroupAdmins) return reply(ind.only.admin)
Ramdani.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Ramdani.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await Ramdani.sendMessage(from, options, text)
break
case 'wa.me':
case 'wame':
if (isBanned) return reply(mess.banned)
Ramdani.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
Ramdani.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
               case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'BANTU DONASI DONG KAK 😘'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}daftar`, buttonText: {displayText: `📑 DAFTAR`, }, type: 1, },
          {buttonId: `${prefix}donasi`, buttonText: { displayText: `💳 DONASI`, }, type: 1, },
]); 
                 break
                 case 'donasi':
                 case 'donate':
                 case 'sedekah':
if (isBanned) return reply(mess.banned)
anu =`Hallo, kak bantu donasi ya supaya kita semangat update👋
╔════════════════════
║ *DONASI UNTUK MB STORE*
╠════════════════════
║╭──❉ *DONASI KAK* ❉─────
║│ *GOPAY* : 081212303462
║│ *DANA* : 081212303462
║│ *OVO* : 081212303461
║│ *PULSA* : 081212303461
║╰──────────────────
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ ✅ MBSTORE GAME TOPUP ✅
╚════════════════════`
sendButImage(from, anu,`DONASI NYA KAK \n©CREATOR BY MB STORE`, qris, [
            {buttonId: `!ok`, buttonText: {displayText: `OK 😘`, }, type: 1, },
            {buttonId: `!o`, buttonText: { displayText: `NO 😢`, }, type: 1, },
            ]); 
break
//jawab nye
case 'ok':
reply(`okeh🗿`)
break
case 'o':
reply(`Gak ada uang miskin... 🥱`)
break
                 case 'request':
                 if (isBanned) return reply(mess.banned)
					const rq = body.slice(8)
					if (args.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ramdani.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: fakeitem})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'lapor':
if (isBanned) return reply(mess.banned)
					const laporan = body.slice(7)
					if (args.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ramdani.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: fakeitem})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
      case 'shutdown':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
        case 'join':
        if (isBanned) return reply(mess.banned)
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await Ramdani.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
        if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Ramdani.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'ban':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply(mess.banned)
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              Ramdani.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (isBanned) return reply(mess.banned)
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':
if (isBanned) return reply(mess.banned)
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  Ramdani.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	if (isBanned) return reply(mess.banned)
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   Ramdani.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
if (isBanned) return reply(mess.banned)
				apri = 'MAU PILIH YG MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
if (isBanned) return reply(mess.banned)
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
      if (isBanned) return reply(mess.banned)
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await Ramdani.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					Ramdani.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
									if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
                                if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (isBanned) return reply(mess.banned)
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await Ramdani.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	Ramdani.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                if (isBanned) return reply(mess.banned)
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						Ramdani.sendMessage(from,`#hidetag PERHATIAN KEPADA SELURUH MEMBER ANTI LINK GROUP AKTIF APABILA ANDA MENGIRIM LINK GROUP ANDA AKAN DI KICK DARI GROUP`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
     if (!isGroup) return reply(mess.only.group)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Ramdani.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Ramdani.sendMessage(from, buffer, sticker, {quoted: fakeitem})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
default:
if (budy.includes(`Assalamualaikum`)) {
Ramdani.sendMessage(from, 'Waalaikumsalam', text, {quoted: fakeitem})
                  }
if (budy.includes(`kontol`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`memek`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`tai`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`hai`)) {
Ramdani.sendMessage(from, 'Hai Juga', text, {quoted: fakeitem})
                  }
if (budy.includes(`stres`)) {
Ramdani.sendMessage(from, 'Lu Yang Stres', text, {quoted: fakeitem})
                  }
if (budy.includes(`??`)) {
Ramdani.sendMessage(from, 'Larii Cuk Ada Batu!!', text, {quoted: fakeitem})
                  }
if (budy.includes(`Bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`Tes`)) {
Ramdani.sendMessage(from, 'Hmmm', text, {quoted: fakeitem})
                  }
}
if (budy.startsWith('x')){
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}