import React from 'react'
import Progress from 'react-circle-progress-bar'

function ProgressBar() {
    return (
        <div>
            <Progress
                progress={50}
                strokeWidth={7}
                ballStrokeWidth={20}
                reduction={0.5}
                subtitle={'UV index'}
                transitionDuration={0.6}
                transitionTimingFunction={"ease-out"}
                gradient={[{ stop: 0.3, color: '#F8E36F' }, { stop: 1, color: '#FA9E42' }]}
            />
        </div>
    )
}

export default ProgressBar