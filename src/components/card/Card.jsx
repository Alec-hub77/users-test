import { ButtonOutlined } from '../button/Button'
import './card.scss'

import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className="card">
        <div className="card__container">
            <div className="card__info">
                <div className="card__info-item">
                    <span>Name:</span>
                    {item.name}
                </div>
                <div className="card__info-item">
                    <span>City:</span>
                    {item.address.city}
                </div>
                <div className="card__info-item">
                    <span>Company:</span>
                    {item.company.name}
                </div>
            </div>
            <div className="card__btn">
            <Link to={`detail/${item.id}`}><ButtonOutlined>Details</ButtonOutlined></Link>
            </div>
        </div>
    </div>
  )
}

export default Card