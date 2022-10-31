import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity/config";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { searchQuery } from "../utils/data";
const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null);
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;
  return <div>Feed</div>;
};

export default Feed;