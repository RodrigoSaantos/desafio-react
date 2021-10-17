import './styles.css'

function Table({ heading, children }) {
  return (
    <div className='table'>
      <div className='heading'>
        <p>{heading}</p>
      </div>
      { children }
    </div>
  )
}

export { Table };
