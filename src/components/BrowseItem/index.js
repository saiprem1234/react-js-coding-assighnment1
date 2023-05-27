import './index.css'

const BrowseItem = props => {
  const {history, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history
  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="list">
      <div className="list-items">
        <p className="time">{timeAccessed}</p>
        <div className="card">
          <div>
            <img className="domain-img" src={logoUrl} alt="domain logo" />
          </div>
          <div className="title-card">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          data-testid="delete"
          onClick={onDelete}
          className="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowseItem
