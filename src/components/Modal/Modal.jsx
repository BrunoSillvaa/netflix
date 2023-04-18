import './Modal.css'

export default ({showModal, setShowModal}) => {
  return (
  <div className={`modal-container ${showModal && "show-modal"}`}>
    <form className="modal">
      <span onClick={() => setShowModal(false)}>x</span>
      <h2>Login</h2>
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='Password' />
      <button type="submit">Entrar</button>
    </form>
  </div>
  )
}