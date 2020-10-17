import React from 'react'
import { Dialog } from '@material-ui/core'
import ReactPlayer from 'react-player'

export default function ModalPopup(props) {
    return (
        <Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
            {
                props.src ?
                    <img style={{ height: "100%", width: "100%" }} src={props.src} alt="media" />
                    :
                    props.videoUrl ?
                        <ReactPlayer url={props.videoUrl} playing style={{ maxHeight: "100%", maxWidth: "100%" }} />
                        : null
            }
        </Dialog>
    )
}
