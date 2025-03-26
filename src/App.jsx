import { useState } from 'react'

const articlesList = ['Metaverso: Realtà?', 'Chip: La Rivoluzione', 'Auto: Guida Autonoma', 'Spazio: Nuove Frontiere', 'Robot: Vita Quotidiana', 'Dati: Il Nuovo Oro']

export default function App() {


  const [article, setArticles] = useState(articlesList)

  return (
    <>
      <div className="container">

        <h1 className='text-center my-5'>Articoli</h1>

        <ul className="list-group">
          {article.map((title, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}



