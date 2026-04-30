
import React, { useState } from 'react';

export default function InteractiveCheckbox({ label }: { label: React.ReactNode }) {
    const [checked, setChecked] = useState(false);

    return (
        <label style={{ display: 'block' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            {label}
        </label>
    );
}
