import {Layout} from 'antd';
import { MailList } from './Components/MailsList';
import { MailContent } from './Components/MailContent';

const {Content, Sider } = Layout;


  
export const MailApp = () => {
    return (
        <>
            <Layout>
                <Sider theme="light" width={400}>
                    <MailList/>
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <MailContent/>
                </Content>
            </Layout>
        </>
    )
}