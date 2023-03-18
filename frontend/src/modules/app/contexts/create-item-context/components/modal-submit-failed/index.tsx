export const ModalSubmitFailed = () => {
    return (
        <div
            className="modal fade"
            id="modalSubmitFailed"
            tabIndex={-1}
            aria-labelledby="addLevelsLabel"
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog max-w-2xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Found Similar Content !</h5>
                    </div>
                    <div
                        className="modal-body p-6"
                        style={{ display: 'flex', flexDirection: 'column', color: 'white' }}
                    >
                        <p className="mb-3">
                            Your content is <span className="text-accent">72% similar</span> to <span className="text-accent">The Paradise</span> by <b>yeungblueape</b> submitted on{' '}
                            <b>23 Feb 2023</b>
                        </p>
                        <div style={{ display: 'flex' }}>
                            <img
                                style={{ flex: 2 }}
                                src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvODA4MjgyL2ltYWdlL3Y2RWppeHM0NWpnVS9wZXhlbHNhcnlha3JhdG9zNzY0Njg0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9fX0=?t=1674461282763"
                            />
                            <div className="pl-4" style={{ flex: 1 }}>
                                <p className="modal-title">The Paradise</p>
                                <p>yeungblueape</p>
                                <p>23 Feb 2023</p>
                                <p className="text-accent">Similarity: 72%</p>
                            </div>
                        </div>

                        <div className="mt-3 mb-3">
                            Please review the similar content and make sure your content is original.
                            If you need support please contact us.
                        </div>

                        <div className="flex items-center justify-between mt-4" style={{gap: 10}}>
                            <button
                                type="button"
                                className="flex-1 h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-dark:bg-jacarta hover:border-transparent hover:bg-accent dark:bg-accent-700"
                            >
                                Details
                            </button>
                            <button
                                type="button"
                                className="flex-1 h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-dark:bg-jacarta hover:border-transparent hover:bg-accent dark:bg-accent-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
