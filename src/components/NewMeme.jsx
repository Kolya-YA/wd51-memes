const NewMeme = ({ texts, curImage, changeIndex, memeRef }) => {
    const btns = [['←', 'prev'], ['↔', 'rnd'], ['→', 'next']]

    const handleBtn = ({target}) => {
        changeIndex(target.name)
    }

    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold">New Meme</h2>
            <div ref={memeRef}
                className="grid [grid-template-areas:'meme'] justify-center
                    relative isolate
                    p-4 bg-cyan-50 rounded-md"
            >
                <p className="[grid-area:meme] absolute inset-x-0 top-0 z-10 h-12
                    bg-white/70 grid place-content-center font-mono text-xl text-cyan-700 font-bold
                 ">
                    {texts?.topText}
                </p>
                <img src={curImage?.url} alt={curImage?.name}
                    className="[grid-area:meme]"
                />
                <p className="[grid-area:meme] absolute inset-x-0 bottom-0 z-10 h-12
                    bg-white/70 grid place-content-center font-mono text-xl text-cyan-700 font-bold
                ">
                    {texts?.bottomText}
                </p>
            </div>
            <div className="my-4 flex gap-8 justify-center text-3xl font-semibold">
                {btns.map(btn => (
                    <button key={btn[1]} onClick={handleBtn} name={btn[1]} type="button"
                        className="px-6 py-2 text-white bg-cyan-700 rounded shadow-md">
                        {btn[0]}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default NewMeme