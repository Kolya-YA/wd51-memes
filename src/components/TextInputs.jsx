import { toJpeg } from "html-to-image"
import { useCallback } from "react"

const TextInputs = ({ texts, setTexts, memeRef }) => {

    const handleText = ({ target }) => {
        setTexts({ ...texts, [target.name]: target.value })
    }

    const handleSave = useCallback(async (e) => {
        e.preventDefault()
        console.log("memeRef", memeRef.current)
        if (memeRef.current === null) return

        try {
            const dataUrl = await toJpeg(memeRef.current, { quality: 0.81 })
            const link = document.createElement("a")
            link.download = "meme.jpg"
            link.href = dataUrl
            link.click()
            
        } catch (error) {
            console.error('Error HtmlToImage', error)
        }

    }, [memeRef])


    return (
        <div>
            <h2>Text inputs</h2>
            <form onSubmit={handleSave}>
                <label>
                    Top text:
                    <input type="text" name="topText" onChange={handleText} value={texts?.topTexts} />
                </label>
                <label>
                    Bottom text:
                    <input type="text" name="bottomText" onChange={handleText} value={texts?.bottomTexts} />
                </label>
                <button>Save meme</button>
            </form>
        </div>
    )
}

export default TextInputs