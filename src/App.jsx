import { useEffect, useState, useRef } from 'react'
import NewMeme from './components/NewMeme'
import TextInputs from './components/TextInputs'
import LoadImage from './components/LoadImage'
import MemesGallery from './components/MemesGallery'


function App() {
  const [texts, setTexts] = useState({})
  const [gallery, setGallery] = useState([])
  const [curIndex, setCurIndex] = useState(-1)
  const [curImage, setCurImage] = useState(null)

  const memeRef = useRef(null)

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setGallery(data.data.memes)
    }
    
    fetchMemes()
  }, [])

  useEffect(() => {
      const rndIndex = Math.floor(Math.random() * gallery.length)
      setCurIndex(rndIndex)
  }, [gallery])


  useEffect(() => {
    if (curIndex < 0) return
    setCurImage(gallery[curIndex])

  }, [curIndex, gallery])

  const changeIndex = btnName => {
    setCurIndex(ci => {
      if (btnName === 'next') {
        return (ci + 1) % gallery.length
      } else if (btnName === 'prev') {
        return (ci - 1 + gallery.length) % gallery.length
      } else {
        return Math.floor(Math.random() * gallery.length)
      }
    })
  }

  return (
    <>
      <h1 className="center text-3xl font-bold text-cyan-700 my-8">Meme generator</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        <TextInputs texts={texts} setTexts={setTexts} memeRef={memeRef} />
        <NewMeme texts={texts} curImage={curImage} changeIndex={changeIndex} memeRef={memeRef} />
      </div>
      <LoadImage />
      <MemesGallery gallery={gallery} setCurIndex={setCurIndex} />
    </>
  )
}

export default App;