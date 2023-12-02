import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/beenow011")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <div className="flex justify-center">
        <a href="https://github.com/beenow011">
          <img
            src={data.avatar_url}
            alt=""
            className="m-3 w-32 h-32 rounded-full ring-2 ring-blue-500 hover:ring-blue-900"
          />
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubFetchApi = async () => {
  const Response = await fetch("https://api.github.com/users/beenow011");
  return Response.json();
};
