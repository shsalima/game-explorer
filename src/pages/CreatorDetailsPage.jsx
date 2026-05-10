import CreatorAbout from "../components/DetailsCreator/CreatorAbout";
import CreatorProfileCard from "../components/DetailsCreator/CreatorProfileCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FailError from "../components/global/FailError";
export default function CreatorDetailsPage() {
  const [creator, setCreator] = useState(null);
  const { id } = useParams();

  const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //   const getData = async () => {
  //     const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

  // useEffect(() => {
  //     try {
  //       const response = await axios.get(
  //         `${VITE_API_URL}/creators/${id}?key=${VITE_API_KEY}`,
  //       );
  //       // console.log("res ", response.data);
  //       setCreator(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);
  console.log(`${VITE_API_URL}/creators/${id}?key=${VITE_API_KEY}`);

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/creators/${id}?key=${VITE_API_KEY}`)
      .then((res) => {
        setCreator(res.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // console.log("tttt", creator);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <FailError />;
  }
  return (
    <div className="creator-detail-layout">
      <CreatorProfileCard creator={creator} />
      <CreatorAbout creator={creator} />
    </div>
  );
}
