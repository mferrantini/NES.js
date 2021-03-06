import NES from './components/NES.js';

// const romPath = './roms/tests/nestest.nes';
// const romPath = './roms/tests/01-basics.nes';
// const romPath = './roms/instr_misc.nes';
// const romPath = './roms/official_only.nes';
// const romPath = './roms/rockman_2.nes';
const romPath = './roms/donkey_kong.nes';
// const romPath = './roms/super_mario_bros.nes';
// const romPath = './roms/super_mario_bros_3.nes';

let xhr = new XMLHttpRequest();
xhr.open('GET', romPath, true);
xhr.responseType = 'arraybuffer';

xhr.onload = e => {
    let nes = new NES();
    nes.loadRom(new Uint8Array(xhr.response));
};

xhr.send();