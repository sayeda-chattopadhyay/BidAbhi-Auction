
import {listingsBaseURL} from "../constants.mjs"

import { load } from "../../storage/index.mjs";


// get all listings that matching with the tag

export async function getFashionlistings() {

  const qS = "?_tag=fashion"
 

 const url = `${listingsBaseURL}${qS}`;

 
  console.log("searchListing url:", url);

  const token = load("token");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
    // const json = await response.json();
    // console.log("fashion listing:", json)
  }

  throw new Error("Fetching listing failed");
}

// getFashionlistings()

