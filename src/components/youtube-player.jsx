import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function YouTubePlayer({
    url,
    title = 'YouTube video',
    width = '100%',
    height = '420px',
}) {
    const frameStyle = {
        width,
        maxWidth: '100%',
        margin: '1rem 0 1.5rem',
        borderRadius: '12px',
        overflow: 'hidden',
    };

    const fallbackStyle = {
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f6f8fa',
        color: '#57606a',
        fontSize: '0.95rem',
        border: '1px solid #d0d7de',
    };

    return (
        <div style={frameStyle} aria-label={title}>
            <BrowserOnly fallback={<div style={fallbackStyle}>Loading video player...</div>}>
                {() => {
                    const reactPlayerModule = require('react-player/youtube');
                    const ReactPlayer = reactPlayerModule.default || reactPlayerModule;

                    return (
                        <ReactPlayer
                            url={url}
                            width="100%"
                            height={height}
                            controls
                            playsinline
                            config={{
                                youtube: {
                                    playerVars: { modestbranding: 1, rel: 0 },
                                },
                            }}
                        />
                    );
                }}
            </BrowserOnly>
        </div>
    );
}
