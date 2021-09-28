import { Toast } from "react-bootstrap"


const Alert = ({ closeAlert, show, text }) => {

  const style = { zIndex: 9999, position: 'fixed', bottom: 38, right: 17, width: 300 }

  return (
    <Toast autohide delay={3000} show={show} onClose={closeAlert} style={style}>
      <Toast.Header closeButton={false} >

        <strong className="mr-auto">Mensaje del sistema</strong>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  )
}


export default Alert