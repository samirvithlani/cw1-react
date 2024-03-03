import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export const QrCodeDemo = () => {
    const [value, setValue] = useState("id i have");
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
  return (
    <div>
        <h1>QrCodeDemo</h1>
        <center>
                <br />
                <br />
         
                <br />
                <br />
                <br />
                {value && (
                    <QRCode
                        title="GeeksForGeeks"
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
                )}
            </center>
    </div>
  )
}
