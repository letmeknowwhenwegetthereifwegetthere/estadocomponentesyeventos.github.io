const mensajes = (props) => {
    const { tipo, mensaje } = props
    return(
        <div className={ `alert ${ tipo === 'exito' ? 'alert-success' : 'alert-danger'}`}>{ mensaje }</div>
    )
};

export default mensajes;