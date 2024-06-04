const Thumbnail = ({ image, setCurIndex, idx }) => {

    const handleClick = (e) => {
        setCurIndex(e.currentTarget.getAttribute('data-idx'))
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const tUrl = (fUrl) => {
        const sPos = fUrl.lastIndexOf('/')
        const sUrl = fUrl.substring(0, sPos)
        const eUrl = fUrl.substring(sPos + 1)
        return `${sUrl}/4/${eUrl}`.replace('.png', '.jpg')
    }

    return (
        <button onClick={handleClick} data-idx={idx}
            className=" bg-cyan-50 rounded shadow min-w-full min-h-full p-2 grid place-content-center "
        >
            <img src={tUrl(image.url)} alt={image.name} loading="lazy" />
        </button>
  )
}

export default Thumbnail