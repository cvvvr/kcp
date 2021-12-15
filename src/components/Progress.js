import './style/Progress.css'

export default function Progress(props) {
  const pCount = props.pCount;
  if (pCount === 2) {
    return (
      <div className='progress'>
        <TwoProgress></TwoProgress>
      </div>
    )
  } else {
    return <FourProgress></FourProgress>
  }


}

function TwoProgress(props) {
  return (
    <div className='twoProgress'>
      <div className='player'>
        <div className='avatarName'>
          <div className='avatar'>

          </div>
          <div className='name'>

          </div>
        </div>
        <div className='count'>
            5
        </div>
      </div>
      <div className='player'>
        <div className='count'>
          5
        </div>
        <div className='avatarName'>
          <div className='avatar'>

          </div>
          <div className='name'>

          </div>
        </div>
      </div>
    </div>
  )
}

function FourProgress(props) {
  return (
    <div>
      <h1>FourProgress</h1>
    </div>
  )
}