import './index.css'

const AppItem = props => {
  const {appItem, isActive, clickAppItem} = props
  const {tabId, displayText} = appItem

  const coloredText = isActive ? 'colored-text' : ''

  const onClickAppItem = () => {
    clickAppItem(tabId)
  }

  return (
    <li className="app-item-list">
      <button
        type="button"
        onClick={onClickAppItem}
        className={`app-item-button ${coloredText}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default AppItem
