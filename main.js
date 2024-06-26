const ytdl = require("ytdl-core");
const { createWriteStream, rmSync, readFileSync } = require('fs');

const print = (rgb, text) => process.stdout.write(`\x1b[38;2;${rgb.split(' ')[0]};${rgb.split(' ')[1]};${rgb.split(' ')[2]}m${text}\x1b[0m`);
const log = (rgb, text) => print(rgb, text + '\n');

log('255 255 255', 'INFO ## Загрузчик видео от Acelotick');

let canrun = 1;
let http = process.argv[2];

if (!http) {
    log('255 0 0', 'ERR  ## Введите https ссылку до видео из ютуба');
    log('255 255 255', 'INFO ## Содержание параметров\n  - 1. Ссылка до видео\n  - 2. Имя файла (опц)\n  - 3. Формат сохранения (опц)\nДля большей информации читать readme.md');
    canrun = 0;
}

let filename = process.argv[3];
let ini = readFileSync('ytd-settings.ini', { encoding: 'utf8' }).split('\n');

if (!filename) {
    filename = ini[0].replace(/\r$/, '');
    if (canrun) log('255 100 100', `INFO ## Не установлено имя файла, установлено: ${filename}`);
}

let quality = process.argv[4];
if (!quality) {
    quality = ini[1].replace(/\r$/, '');
    if (canrun) log('255 100 100', `INFO ## Не выбран параметр качества файла, выбран: ${quality}`);
}

if (!['highestaudio', 'lowestaudio', 'highest', 'lowest', 'highestvideo', 'lowestvideo'].includes(quality)) {
    if (canrun) log('255 0 0', 'ERR  ## Неизвестный параметр качества файла');
    canrun = 0;
}

let fileextension = ['highestaudio', 'lowestaudio'].includes(quality) ? '.mp3' : '.mp4';

if (canrun) log('255 255 255', 'INFO ## Начинаем загрузку..');

if (canrun) {
    let s = ytdl(http, { quality: quality });
    s.pipe(createWriteStream(`${ini[2]}${filename}${fileextension}`));
    s.on('end', () => {
        log('255 255 255', `INFO ## ${fileextension === '.mp4' ? 'Видео' : 'Аудио'} файл сохранен в ${ini[2]}${filename}${fileextension}`);
    });
    s.on('error', e => {
        log('255 0 0', `ERROR # ${e.message}`);
        rmSync(ini[2] + filename + fileextension);
    });
}
