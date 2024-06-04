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
            <h2 className="mb-4 text-2xl font-semibold">Write your new meme</h2>
            <form onSubmit={handleSave}>
                <label className="my-4 block">
                    Top text
                    <input type="text" name="topText" onChange={handleText} value={texts?.topTexts}
                        className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
                        />
                </label>
                <label className="block">
                    Bottom text
                    <input type="text" name="bottomText" onChange={handleText} value={texts?.bottomTexts}
                        className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <button className="my-4 px-4 py-2 text-white bg-cyan-700 rounded shadow-md">
                    Save meme
                </button>
            </form>
        </div>
    )
}

export default TextInputs