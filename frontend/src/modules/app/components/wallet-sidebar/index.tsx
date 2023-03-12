import { useButtonConnectPhantomWallet } from '@modules/auth/components/button-connect-phantom-wallet/use-button-connect-phantom-wallet';
import { LoginStatus, selectLoginData } from '@modules/auth/redux/login/slice';
import React from 'react';
import { useSelector } from 'react-redux';

const WalletSidebar = (props: any) => {
    const { isMenuOpen, onMenuToggle = () => {} } = props;
    const loginData = useSelector(selectLoginData);
    const { handleOnClicked } = useButtonConnectPhantomWallet();

    const walletSidebarRef = React.useRef(null);

    const NoteLoginedOptions = () => {
        return (
            <li>
                <a
                    href="#"
                    className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                    onClick={handleOnClicked}
                >
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                        style={{ fill: '#aaa', marginTop: '2px', marginRight: '4px' }}
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
                    </svg> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-white transition-colors group-hover:fill-white group-focus:fill-white"
                        style={{ fill: '#aaa', marginTop: '4px', marginRight: '0px' }}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                    </svg>
                    <span
                        className="mt-1 font-display text-sm text-jacarta-700 dark:text-white"
                        style={{ color: '#aaa' }}
                    >
                        Connect wallet
                    </span>
                </a>
            </li>
        );
    };

    const WalletBalanceFrame = () => {
        return (
            <li>
                <div>
                <div
                    style={{
                        margin: '20px 10px 0',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid rgb(53, 56, 64)',
                            borderRadius: '10px 10px 0px 0px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ margin: '10px 0' }}>
                            <p
                                style={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    color: 'rgb(138, 147, 155)',
                                    marginBottom: '6px',
                                    textAlign: 'center',
                                }}
                            >
                                Total balance
                            </p>
                            <h4
                                style={{
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    color: 'rgb(255, 255, 255)',
                                    marginTop: '0px',
                                    textAlign: 'center',
                                }}
                            >
                                ${(loginData?.balances && Math.floor(parseInt(loginData?.balances?.['SOL'])) * 18.11) || '0.00'} USD
                            </h4>
                        </div>
                    </div>
                    <button
                        style={{
                            width: '100%',
                            borderRadius: '0px 0px 10px 10px',
                            display: 'inline-flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '22px',
                            letterSpacing: '0.01em',
                            padding: '17px 24px',
                            backgroundColor: 'rgb(32, 129, 226)',
                            border: '1px solid transparent',
                            color: 'rgb(255, 255, 255)',
                            appearance: 'button',
                            cursor: 'pointer',
                            margin: 0,
                        }}
                    >
                        Add Funds
                    </button>
                </div>

                <div style={{
                    margin: '20px 10px 0'
                }}>
                    <ul style={{
                        border: '1px solid rgb(53, 56, 64)',
                        borderRadius: '10px',
                        margin: 0,
                        padding: '20px',
                        listStyleType: 'none'
                    }}>
                        <li style={{
                            border: 'none',
                            overflow: 'hidden',
                            color: 'rgb(53, 56, 64) !important',
                            width: '100%',
                            fontWeight: 600,
                            textAlign: 'left',
                        }}>
                            <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 397.7 311.7"
                                style={{ height: '15px', width: '15px', marginRight: '10px' }}
                                xmlSpace="preserve"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html: '\n\t.st0{fill:url(#SVGID_1_);}\n\t.st1{fill:url(#SVGID_2_);}\n\t.st2{fill:url(#SVGID_3_);}\n',
                                    }}
                                />
                                <linearGradient
                                    id="SVGID_1_"
                                    gradientUnits="userSpaceOnUse"
                                    x1="360.8791"
                                    y1="351.4553"
                                    x2="141.213"
                                    y2="-69.2936"
                                    gradientTransform="matrix(1 0 0 -1 0 314)"
                                >
                                    <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                                    <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
                                </linearGradient>
                                <path
                                    className="st0"
                                    d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
                                />
                                <linearGradient
                                    id="SVGID_2_"
                                    gradientUnits="userSpaceOnUse"
                                    x1="264.8291"
                                    y1="401.6014"
                                    x2="45.163"
                                    y2="-19.1475"
                                    gradientTransform="matrix(1 0 0 -1 0 314)"
                                >
                                    <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                                    <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
                                </linearGradient>
                                <path
                                    className="st1"
                                    d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
                                />
                                <linearGradient
                                    id="SVGID_3_"
                                    gradientUnits="userSpaceOnUse"
                                    x1="312.5484"
                                    y1="376.688"
                                    x2="92.8822"
                                    y2="-44.061"
                                    gradientTransform="matrix(1 0 0 -1 0 314)"
                                >
                                    <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                                    <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
                                </linearGradient>
                                <path
                                    className="st2"
                                    d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4  c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
                                />
                            </svg>
                            <span className="text-lg font-bold text-green" style={{color: '#fff',}}>{loginData?.balances?.['SOL'] || '0'} SOL</span>
                        </div>
                        </li>
                    </ul>
                </div>
                </div>
            </li>
        );
    };
    
    const handleClickOutside = (event: any) => {
        console.log('handleClickOutside: ', isMenuOpen);

        // @ts-ignore
        if (walletSidebarRef.current && !walletSidebarRef.current?.contains(event.target)) {
            console.log('You clicked outside of me!');
            // onMenuToggle()
        }
    }

    React.useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [walletSidebarRef]);

    return (
        <div ref={walletSidebarRef} className={`sidebar-menu${isMenuOpen === true ? ' open' : ''}`}>
            <div
                style={{
                    height: '72px',
                    padding: '20px',
                    borderBottom: '1px solid rgb(53, 70, 64)',
                    justifyContent: 'space-between',
                    display: 'flex',
                }}
            >
                <span
                    style={{
                        fontWeight: 600,
                        fontSize: '16px',
                        display: 'flex',
                        color: 'rgb(229, 232, 235)',
                    }}
                >
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-white transition-colors group-hover:fill-white group-focus:fill-white"
                        style={{ marginTop: '4px', marginRight: '12px' }}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                    </svg> */}
                    <span>My wallet</span>
                </span>

                {loginData.walletAddress && <span style={{color: '#ffffff88'}}>{loginData.walletAddress.substring(0, 6)}...</span>}
            </div>
            <ul className="vertical menu">
                {
                    loginData.loginStatus === LoginStatus.LoggedIn
                        ? <WalletBalanceFrame />
                        : <NoteLoginedOptions />
                }
            </ul>
        </div>
    );
};

export default WalletSidebar;
