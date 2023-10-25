// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
import { Avatar, Badge,} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons';

const CartWidget = () => {
    return (
        <>
            <Badge count={5}>
                <Avatar shape="circle" size="medium" icon={<ShoppingCartOutlined />} />
            </Badge>
        </>
    )
}

export default CartWidget