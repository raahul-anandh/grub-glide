import { Card, Image, Button } from 'react-bootstrap';

export default function FoodCard({image, title, description, price, buttonText}){
    return(
        <Card className='foodCard'>
            <Card.Img variant="side" src={image} alt={title}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className='card-info'>
                    <span>{price}</span>
                    <Button variant="primary">{buttonText}</Button>
                </div>
            </Card.Body>
        </Card>
    )
}