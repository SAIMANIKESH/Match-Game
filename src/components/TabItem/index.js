import './index.css'

const TabItem = props => {
  const {tabItem, clickTabItem} = props
  const {id, thumbnailUrl} = tabItem

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  return (
    <li className="tab-item-list">
      <button
        type="button"
        onClick={onClickTabItem}
        className="tab-item-button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default TabItem
