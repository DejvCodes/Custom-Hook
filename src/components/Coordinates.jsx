import useFetch from "./useFetch"

const apiURL = "http://api.open-notify.org/iss-now.json"

const Coordinates = () => {
  const {data, loading} = useFetch(apiURL)

  return <>
    <div>{loading ? "loading..." : 
      <div>
        <h2>Zeměpisná délka</h2>
        <p>{data.iss_position.longitude}</p>
        <h2>Zeměpisná šířka</h2>
        <p>{data.iss_position.latitude}</p>
      </div>
      }
    </div>
  </>
}

export default Coordinates