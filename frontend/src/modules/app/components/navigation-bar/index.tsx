import { ButtonConnectPhantomWallet } from '@modules/auth/components';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const NavigationBar = () => {
    return (
        <div id={styles['navigation-bar']}>
            <Link href={'/'} className={styles['logo']}>
                <Image src="" alt="" />
            </Link>

            <div className={styles['button-connect-placeholder']}>
                <ButtonConnectPhantomWallet />
            </div>
        </div>
    );
};

export { NavigationBar };
