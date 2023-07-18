import { useLocation } from "react-router-dom"

const Result = () => {

  const location = useLocation()

  return (
    <p>{`TODO: ${location.state.value}`}</p>
  )
}

export default Result
