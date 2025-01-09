import { useState } from 'react';
import padData from './pads';

export default function Pad() {
    const [pads, setPads] = useState(padData);

    function toggle(id) {
        setPads(prevPads =>
            prevPads.map(pad =>
                pad.id === id ? { ...pad, on: !pad.on } : pad // Toggle the 'on' attribute for the clicked button
            )
        );
    }

    const buttonElements = pads.map(pad => (
        <button
            key={pad.id}
            style={{ backgroundColor: pad.color }}
            onClick={() => toggle(pad.id)} // Pass the button's id to the toggle function
            className={pad.on ? 'on' : ''}
        >
            {pad.label}
        </button>
    ));

    return <>{buttonElements}</>;
}
