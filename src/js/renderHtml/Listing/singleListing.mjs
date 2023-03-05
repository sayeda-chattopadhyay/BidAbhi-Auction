
 /**
 * Create Html for Single Listing
 * @param {Object} listing
 */
  
  // import { load } from "../../storage/index.mjs";

 

export function createSingleListingHTML(listing) {

  // const token = load("token");


  const singleListingContainer = document.getElementById(
    "singleListingContainer"
  );


  const bidHistory = document.getElementById("bidHistory");

  const { title, description, media, bids, created, endsAt, seller, _count } =
    listing;

    const sellerName = seller.name;
   

  let imgMedia = media;

  if (media.length === 0) {
    imgMedia = ["/images/no-image-2.jpg"];
  }


  const bidsHistory = bids;

 

  const formattedCreatedDate = new Date(created).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });

  const formattedCreatedTime = new Date(created).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedEndDate = new Date(endsAt).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });

  const formattedEndTime = new Date(created).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  singleListingContainer.innerHTML += `<div class="row align-items-center justify-content-cente g-5 py-5">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 single-listing-imgage">
      <img
          src="${imgMedia}"
          class="d-block mx-lg-auto single-imgage"
          alt="${title}" 
          loading="lazy"
      />
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-md-6 col-lg-6 d-flex flex-column">
        <div class="my-3">
            <p class="h1">${title}</p>
            <p class="lh-lg fs-6 c-description" id="item-Description">
            <strong>Description:
            ${description}
            </strong>
            </p>
        </div>
          <hr>
        <div>
          <p class="fs-5"><strong>Seller : </strong>${sellerName}</p>
          <p class="fs-5"><strong>Created : </strong>${formattedCreatedDate}<span class="small text-muted" >, ${formattedCreatedTime}</span ></p>
          <p class="fs-5"><strong>Ends at : </strong>${formattedEndDate}<span class="small text-muted" >, ${formattedEndTime}</span ></p>
          <p class="fs-5"><strong>Total Bids : </strong>${_count.bids}<span class="small text-muted" ></span ></p>
        </div>  
        <hr>
        <div class="my-3">

        </div>  
    </div>
</div> `;




  bidsHistory.forEach(function (bid) {
    const { amount, bidderName, created } = bid;

    const formattedCreatedDate = new Date(created).toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    });

    const formattedCreatedTime = new Date(created).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
   
    bidHistory.innerHTML += ` <li class="card mb-3" style="max-width: 540px">
                                <div class="row g-0"> 
                                    <div class="col-md-8">
                                        <div class="card-body">
                                                <h5 class="card-title"><span>Bidder Name:</span> ${bidderName}</h5>
                                                <p class="card-text">
                                                    <small class="text-muted"><strong>Date:</strong> ${formattedCreatedDate}</small>
                                                </p>
                                                <p class="card-text">
                                                    <small class="text-muted"><strong>Time:</strong> ${formattedCreatedTime}</small>
                                                </p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="col-md-4 p-4 bg-info">
                                    <p class="card-text">Bid amount :<strong> ${amount}</strong></p> 
                                    </div>
                                </div>
                              </li> `;
  });
  

}


