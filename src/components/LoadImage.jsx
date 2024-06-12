const LoadImage = ({ handleNewImage }) => {

    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold">Load image</h2>
            <p>Not ready. Stay tuned.</p>
            <label className="my-4 block">Load image for new meme (jpg, png): 
                <input
                    type="file" name="newImgMeme"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleNewImage}
                    className="
                    block w-full mt-2 p-2 border border-gray-300 rounded-md
                    text-sm text-stone-500
                    file:mr-5 file:py-1 file:px-2 file:border file:bg-white 
                    file:rounded-md file:cursor-pointer
                    "
                />
            </label>
        </div>
    )
}

export default LoadImage