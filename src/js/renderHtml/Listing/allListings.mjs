
/**
 * Create Html for All Listing
 * @param {Object} listings
 */



export function createAllListingsHTML(listings) {
  const listingsContainer = document.getElementById("listingsContainer");

  // showing error message if there is no listings

  if (listings.length === 0) {
    return (listingsContainer.innerHTML = "No item found");
  }

  listingsContainer.innerHTML = "";

  listings.forEach(function (listing) {
   

    const { id, title, description, media, created, endsAt, _count, tags,seller} =
      listing; // destructuring

    let imgMedia = media;

    if (media.length === 0) {
      imgMedia = ["/images/no-image-2.jpg"];
    }

   let sellerName = seller.name;

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

    listingsContainer.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4 ">
                                        <div class="card h-100 border-0 p-2 listing-card">
                                            <a href="/singleListing.html?id=${id}"
                                                ><img
                                                src="${imgMedia}"
                                                class="card-img-top c-image" 
                                                alt="${title}"
                                            /></a>
                                            <div class="card-body bg-light">
                                                <h3 class="card-title pb-0">${title}</h3>
                                                <p class="card-text c-description">
                                                <strong>Description: </strong>${description}
                                                </p>
                                                <p class="card-text">
                                                <strong>Tags: </strong>${tags}
                                                </p>
                                                <p class="card-text"><strong>Seller:</strong>${sellerName}</p>
                                            </div>
                                            <div class="card-footer bg-light border-0 pt-0 mt-0">
                                                <hr />
                                                <p class="mb-0"><strong>Bids: </strong>${_count.bids}</p>
                                                <p class="mb-0">
                                                <strong>Created: </strong>${formattedCreatedDate}<span class="small text-muted"
                                                    >, ${formattedCreatedTime}</span
                                                >
                                                </p>
                                                <p class="mb-3">
                                                <strong>Ends at: </strong>${formattedEndDate}<span class="small text-muted"
                                                    >, ${formattedEndTime}</span
                                                >
                                                </p>
                                                 <a href="/singlelisting.html?id=${id}"class="btn btn-primary border border-primary c-link">
                                                            <strong>View Item</strong>
                                                        </a>
                                            </div>
                                        </div>
                                    </div>`;
  });
}
