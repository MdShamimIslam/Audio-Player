const iconColor = '#4527a4';

export const mp3playerIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 512 512' >
	<path fill={iconColor} d='M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z' />
</svg>;

export const playIcon = <svg xmlns='http://www.w3.org/2000/svg' className='playBtn' id='play' viewBox='0 0 448 512'>
	<path className='playPath' d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z' />
	<path className='pausePath' d='M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z' />
</svg>;

export const prevIcon = <svg xmlns='http://www.w3.org/2000/svg' className='navBtn' id='prev' viewBox='0 0 512 512'>
	<path d='M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z' />
</svg>;

export const nextIcon = <svg xmlns='http://www.w3.org/2000/svg' className='navBtn' id='next' viewBox='0 0 512 512'>
	<path d='M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z' />
</svg>;

export function FaForward(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" {...props}><path d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z" /></svg>;
  }
  
  export function FaBackward(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" {...props}><path d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z" /></svg>;
  }
  
  export function FaPlay(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" {...props}><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" /></svg>;
  }
  
  export function FaPause(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" {...props}><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" /></svg>;
  }
  
  export function FaYoutube(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" {...props}><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>;
  }

 export function FaVolumeUp(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1.2em" {...props}><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" /></svg>;
}

export function BiVolumeMute(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1.2em" {...props}><path d="M21.707 20.293l-2.023-2.023c1.44-1.686 2.315-3.846 2.315-6.27 0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7 0 1.832-.629 3.543-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4c0-.369-.203-.708-.528-.882-.324-.174-.72-.154-1.026.05L7.727 6.313l-4.02-4.02L2.293 3.707l18 18L21.707 20.293zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832C12.612 20.943 12.806 21 13 21c.162 0 .324-.039.472-.118C13.797 20.708 14 20.369 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033-.061-.033-.123-.058-.19-.078-.064-.019-.126-.032-.192-.038C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223C2.451 7.554 2 8.222 2 9v6C2 16.103 2.897 17 4 17z" /></svg>;
}


 





  
  