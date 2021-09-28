import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const News = (props) => {
    // console.log(props);
    const { title, description, urlToImage, url } = props.news;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={urlToImage} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                            <br />
                            <a target='_blank' rel="noreferrer" href={url} ><Button>Click here</Button></a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default News;