import { Button, Tag, Col, Row, Card, Divider } from 'antd';
import data from './mail-data.json';

const info = data[0]
export const MailContent = () =>{
    return (
        <>
            <Row justify={'center'} align={'middle'}>
                <Col lg={15}>
                        <Button type="primary" danger>Delete</Button>
                        <Button>Spam</Button>
                </Col>
                <Col lg={8}>
                    <Button type='primary'>mark as unread</Button>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                    <h3>{info.from}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <b>Tags </b>
                <Tag>business</Tag>
                <Tag>inbox</Tag>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card>
                    <p>{info.body}</p>
                </Card>
                </Col>
            </Row>
            <Row justify={"end"}>
                <Button type='primary'>Replay</Button>
            </Row>
        </>
    )
}