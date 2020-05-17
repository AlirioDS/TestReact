import React from 'react'
import Swal from 'sweetalert2'

const Colors = ({ colors, loading }) => {

  const copyClipboard = (color) => {
    let copyCode = document.createElement('textarea')
    copyCode.innerText = color
    document.body.appendChild(copyCode)
    copyCode.select()
    document.execCommand('copy')
    copyCode.remove()

    Swal.fire({
      text: "Color Copiado en Portapapeles",
      icon: "success",
      background: color
    })
  }

  if(loading) {
    return (
      <React.Fragment>
        <div className="col-md-12 col-sm-12 p-1">
          <div className="text-center">
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Cargando...
            </button>
          </div>
        </div>
      </React.Fragment>  
    )
  }

  return (
    <React.Fragment>
      {colors.map(color => (
        <div 
          className="col-md-4 col-sm-6 p-1 hvr-shrink"
          key={color.id}
          onClick={copyClipboard.bind(this, color.color)}
          >
          <div style={{backgroundColor: color.color }} className="card cs-card" >
            <div className="card-body cs-body">
              <div className="align-self-start pl-2">
                <p className="card-title">{ color.year }</p>
              </div>
              <p className="card-title text-center pt-3">{ color.name }</p>
              <h5 className="card-title text-center pb-3">{ color.color }</h5>
              <div className="align-items-end">
                <p className="card-title text-right mb-0 pr-3">{ color.pantone_value }</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Colors

