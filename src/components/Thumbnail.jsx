const Thumbnail = ({ image, setCurIndex, idx }) => {

    const handleClick = (e) => {
        setCurIndex(e.currentTarget.getAttribute('data-idx'))
    }

    const tUrl = (fUrl) => {
        const sPos = fUrl.lastIndexOf('/')
        const sUrl = fUrl.substring(0, sPos)
        const eUrl = fUrl.substring(sPos + 1)
        return `${sUrl}/4/${eUrl}`.replace('.png', '.jpg')
    }

    return (
        <button onClick={handleClick} data-idx={idx}>
            <img src={tUrl(image.url)} alt={image.name} loading="lazy" />
        </button>
  )
}

export default Thumbnail