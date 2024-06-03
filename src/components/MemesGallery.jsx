import Thumbnail from "./Thumbnail"

const MemesGallery = ({ gallery, setCurIndex }) => {

    return (
        <div>
            <h2>Memes gallery</h2>
            {gallery.length
                ? gallery.map((image, idx) => (
                    <Thumbnail key={image.id} image={image} idx={idx} setCurIndex={setCurIndex} />)
                )
                : <p>No images</p>
            }
        </div>
    )
}

export default MemesGallery