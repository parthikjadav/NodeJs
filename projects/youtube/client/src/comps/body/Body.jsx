import React, { useEffect, useState } from "react";
import "../../css/App.css";
import axios from "axios";

const Body = () => {
  const [videoData, setvideoData] = useState([])
  const api_key = "AIzaSyDhWarhH7NP3xyG2KPY3oNV-I7rLBZOQrQ"
  const URL = "https://www.googleapis.com/youtube/v3/videos?"
  const chennle = "https://www.googleapis.com/youtube/v3/channels"
  const getVideo = async () => {
    const options = {
      key: api_key,
      part: "snippet",
      chart: "mostPopular", // Corrected "chrt" to "chart"
      maxResults: 100,
      regionCode: "US"
    };

    try {
      const response = await axios.get(URL + new URLSearchParams(options));
      // console.log(response.data, "tyjtur")


      response.data.items.map((val) => getChennleIcon(val))

    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };



  const getChennleIcon = async (data) => {
    try {
      const response = await axios.get(chennle, {
        params: {
          key: api_key,
          part: "snippet",
          id: data.snippet.channelId,
        }
      });
      data.channelThumbnail = response.data.items[0].snippet.thumbnails.high.url;
      console.log(data, "data")

      setvideoData((val) => {
        return val.concat(data)
      })


    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };
  // console.log(videoData, "videoDatthudrta")

  useEffect(() => {
    getVideo()
  }, [])
  return <div className="w-[95vw] h-[100vh] flex flex-wrap main-body mt-[56px] pt-3 pl-3">

    {
      videoData.map((val) =>
        <div className="video">
          <div className="thumbnail-container ">
            <img src={val.snippet.thumbnails.high.url} className="thumbnail" />
          </div>
          <div className="footer-area-video flex pt-3">
            <img src={val.channelThumbnail} className="w-[36px] h-[36px] rounded-full object-cover" />
            <h4 className="text-[16px] font-[600] ml-3">Jetha का Phone देखकर क्यों डर गया Bhide?  | Taarak Mehta Ka Ooltah</h4>
          </div>
        </div>
      )
    }
  </div>;
};

export default Body;
