import { MutableRefObject, SetStateAction, Dispatch } from 'react';

export function startRecordVoice(
    streamRef: MutableRefObject<MediaStream | null>,
    recorderRef: MutableRefObject<MediaRecorder | null>,
    setAudioURL: Dispatch<SetStateAction<string>>,
) {
    if (streamRef.current) {
        recorderRef.current = new MediaRecorder(streamRef.current);

        const voiceChunk: Blob[] = [];
        recorderRef.current.ondataavailable = (e: BlobEvent) => {
            voiceChunk.push(e.data);
        };

        recorderRef.current.onstop = () => {
            const audioBlob: Blob = new Blob(voiceChunk, { type: 'audio/webm' });
            const audioURL: string = URL.createObjectURL(audioBlob);

            voiceChunk.splice(0, voiceChunk.length);

            setAudioURL(audioURL);
        };

        recorderRef.current.start();
    }
}
