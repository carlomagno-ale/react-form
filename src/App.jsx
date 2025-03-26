import { useState } from 'react'

const articleList = ['Metaverso: Realtà?', 'Chip: La Rivoluzione', 'Auto: Guida Autonoma', 'Spazio: Nuove Frontiere', 'Robot: Vita Quotidiana', 'Dati: Il Nuovo Oro']

export default function App() {

  const [newArticle, setNewArticle] = useState('')
  const [articles, setArticles] = useState(articleList)

  function handleFormSubmit() {

    setArticles([newArticle, ...articles])
    setNewArticle('')

  }

  return (
    <>
      <div className="container">

        <h1 className='text-center my-5'>Articoli</h1>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            name="new_article"
            id="new_article"
            placeholder="Scrivi il titolo del tuo articolo"
            value={newArticle}
            onChange={e => setNewArticle(e.target.value)}
          />
          <div className='d-flex justify-content-start my-2'>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>

        <ul className="list-group">
          {articles.map((title) => (
            <li key={`${title}`}
              className="list-group-item d-flex justify-content-between align-items-center">
              {title}
            </li>
          ))}

        </ul>

        <div className='row my-5'>
          {articles.map((title) => (
            <div className='col-4 mt-2'>
              <div className="card" style={{ width: '15rem' }}>
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/200.jpg"
                  alt="random"
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}



