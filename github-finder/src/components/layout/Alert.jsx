import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import {RiErrorWarningFill} from 'react-icons/ri'
function Alert() {
  const {alert} = useContext(AlertContext)

  return alert !== null && (
    <div className="flex justify-start items-center mb-4 space-x-2">
        {alert.type === 'error' && (
            <RiErrorWarningFill className='text-red-400 text-2xl'/>
        )}
        <p className=' flex-1 font-semibold text-white leading-8'><strong>{alert.msg}</strong></p>
    </div>
  )
}

export default Alert