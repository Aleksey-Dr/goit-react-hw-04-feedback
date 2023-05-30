import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './Notification.module.css'

const Notification = ({ notification }) => {
    return (<p className={clsx(css.notification)}>{notification}</p>);
};

Notification.propTypes = {
    notification: PropTypes.string.isRequired,
};

export default Notification;