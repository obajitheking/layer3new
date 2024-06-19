import { notification } from 'antd';
import { INotification } from '@/common/types/interface';

export const openNotification = ({ type, message, description }: INotification): void => {
    notification[type]({
        className: 'font-primary antialiased',
        description,
        duration: 5,
        message,
    });
};
