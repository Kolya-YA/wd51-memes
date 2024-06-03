const NewMeme = ({ texts, curImage, changeIndex, memeRef }) => {
    const btns = [['←', 'prev'], ['↔', 'rnd'], ['→', 'next']]

    const handleBtn = ({target}) => {
        changeIndex(target.name)
    }

    return (
        <div>
            <h2>New Meme</h2>
            <div ref={memeRef}>
                <p>{ texts?.topText }</p>
                <img src={curImage?.url} alt={curImage?.name} />
                <p>{ texts?.bottomText }</p>
            </div>
            <div>
                {btns.map(btn => (
                    <button key={btn[1]} onClick={handleBtn} name={btn[1]} type="button">{btn[0]}</button>
                ))}
            </div>
        </div>
    )
}

export default NewMeme