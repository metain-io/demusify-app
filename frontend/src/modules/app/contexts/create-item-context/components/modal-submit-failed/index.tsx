export const ModalSubmitFailed = () => {
    return (
        <div className="modal fade" id="modalSubmitFailed" tabIndex={-1} aria-labelledby="addLevelsLabel" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered" style={{maxWidth: 360}}>
                <div className="modal-content" style={{width: '100%'}}>
                    <div className="modal-body p-6" style={{display: 'flex', flexDirection: 'column'}}>
                        <p>Your content is 72% similar to <b>The Paradise</b> by <b>greatapesong</b> submitted on <b>23 Feb 2023</b></p>
                        <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvODA4MjgyL2ltYWdlL3Y2RWppeHM0NWpnVS9wZXhlbHNhcnlha3JhdG9zNzY0Njg0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9fX0=?t=1674461282763" />
                    </div>

                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    );
};
