interface iProgressBar {
    progress: number
    filled?: string
    height?: string
}

export const ProgressBar = ({ progress, filled="#039855", height='8px' }: iProgressBar) => {

    return (
        <div className="w-full bg-[#F2F4F7] rounded-[4px] overflow-hidden" style={{height: height}}>
            <div className="h-full rounded-[4px] transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: filled }}>

            </div>
        </div>
    )
}