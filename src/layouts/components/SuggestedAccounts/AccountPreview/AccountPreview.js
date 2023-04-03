import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '../../../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4d481dab5b537aa3bd376fd2a9d1f496~c5_100x100.jpeg?x-expires=1680685200&x-signature=aP2gZCy1v%2FAUatQ%2BqLDNi0AKhAs%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>mahtikhoi</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Mạnh Tiến Khôi</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Follower</span>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Like</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
