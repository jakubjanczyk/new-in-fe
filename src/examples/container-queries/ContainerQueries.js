import './ContainerQueries.css'

export const ContainerQueries = () => {
  return (
      <div className="main">
        <div className="container container--small">
          <div className="item">I am in small container</div>
        </div>
        <div className="container container--large">
          <div className="item">I am in large container</div>
        </div>
        <div className="container container--another">
          <div className="item">I am in another container</div>
        </div>
      </div>
  )
}
