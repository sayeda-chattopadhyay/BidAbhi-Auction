
 import {load} from "../../storage/index.mjs";

 import {renderBidButtonOrEditButtons} from "../../templates/profile/getSingleListingByProfile.mjs"



export function createSingleListingHTML(listing) {

 const profile = load("profile");

 const profileName = profile.name;

 console.log("ProfileName:",profileName);

  const singleListingContainer = document.getElementById(
    "singleListingContainer"
  );

  // const placeYourBidSection = document.querySelector("#place-your-bid-section")

  // console.log("placeYourBidSection",placeYourBidSection)

  // placeYourBidSection.style.display ="block"

  // const editDeleteBidBtnContainer = document.querySelector("#edit-delete-bid-btn-container")
  // console.log("editDeleteBidBtnContainer",editDeleteBidBtnContainer)


  const bidHistory = document.getElementById("bidHistory");

  const { id,title, description, media, bids, created, endsAt, seller, _count } =
    listing;

    const sellerName = seller.name

    console.log("SellerName:",sellerName);
    console.log("ProfileName:",profileName);


  let imgMedia = media;

  if (media.length === 0) {
    imgMedia = ["/images/no-image-2.jpg"];
  }


  const bidsHistory = bids;

  console.log(bidsHistory);

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

  singleListingContainer.innerHTML += `<div class="row align-items-center g-5 py-5">
  <div class="col-10 col-sm-8 col-lg-6">
      <img
          src="${imgMedia}"
          class="d-block mx-lg-auto img-fluid"
          alt="${title}" 
          style="height: 24rem; width: 50rem; object-fit: cover"
          loading="lazy"
      />
  </div>
  <div class="col-12 col-md-6 d-flex flex-column">
        <div class="my-3">
            <p class="h1">${title}</p>
            <p class="lh-lg fs-6" id="item-Description">
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
        <div class="">
        <div>${renderBidButtonOrEditButtons(profileName,sellerName,id)}</div>  
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






