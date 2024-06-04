import Thumbnail from "./Thumbnail"

const MemesGallery = ({ gallery, setCurIndex }) => {

    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold">Memes gallery</h2>
            <ul className="grid grid-cols-thumb-gal auto-rows-fr gap-2">
                {gallery.length
                    ? gallery.map((image, idx) => (
                    <li key={image.id}>
                        <Thumbnail  image={image} idx={idx} setCurIndex={setCurIndex} />
                    </li>
                    )
                )
                : <p>No images</p>
                }
            </ul>
        </div>
    )
}

export default MemesGallery