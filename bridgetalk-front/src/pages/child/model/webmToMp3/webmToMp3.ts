import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

export async function webmToMp3(audio: Blob) {
  // Blob => FileData
  const fileData = await audio.arrayBuffer();
  const newFileData = new Uint8Array(fileData);

  const ffmpeg = new FFmpeg();

  const baseURL = '/@ffmpeg/core/dist/esm';

  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  // webm => mp3 변환
  await ffmpeg.writeFile('input.webm', newFileData);
  console.log('{webmToMp3: writeFile}');
  await ffmpeg.exec(['-i', 'input.webm', '-vn', '-ab', '192k', 'output.mp3']);
  console.log('{webmToMp3: exec}');
  const data: any = await ffmpeg.readFile('output.mp3');
  console.log('{webmToMp3: readFile}');
  const newBlob = new Blob([data.buffer], { type: 'audio/mpeg' });
  console.log('{webmToMp3: create new Blob}', newBlob);

  return newBlob;
}
