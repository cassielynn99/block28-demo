// useParams
import { useParams } from "react-router-dom";

const SingleUser = () => {
    console.log(useParams())
  const { id } = useParams();
  return <h1>Single User {id} </h1>;
};

export default SingleUser;
