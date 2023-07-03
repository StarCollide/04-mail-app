import {List, Input, Divider,Badge} from 'antd';
import data from './mail-data.json';

const { Search } = Input;

export const MailList = () => {
  return (
    <>
      <b>inbox</b><Badge count={2} />
      <Divider/>
      <List
        header={
          <Search placeholder="Search" enterButton />
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={() => console.log(item.isReaded)}>
            <List.Item.Meta
              title={<a href="">{item.from}</a>}
              description={item.subject}                      
            />
          </List.Item>
        )}
      />
    </>
  )
}