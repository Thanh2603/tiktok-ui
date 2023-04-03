import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

function AccoutItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                // Để tương tác đc bên trong tippy
                interactive
                // visible
                offset={[-30, 0]}
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4d481dab5b537aa3bd376fd2a9d1f496~c5_100x100.jpeg?x-expires=1680685200&x-signature=aP2gZCy1v%2FAUatQ%2BqLDNi0AKhAs%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>mahtikhoi</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Mạnh Tiến Khôi</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccoutItem.propTypes = {};

export default AccoutItem;
