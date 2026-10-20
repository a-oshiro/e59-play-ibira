import { createRoot } from 'react-dom/client';
import PlayIbira from './designs/PlayIbira';

// No <StrictMode>: its double-mounting would re-run the prototype's timers and the totem's speech.
createRoot(document.getElementById('root')).render(<PlayIbira />);
