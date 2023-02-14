export function createSingleListingHTML(listing) {
  const singleListingContainer = document.getElementById(
    "singleListingContainer"
  );

  const bidHistory = document.getElementById("bidHistory");

  const { title, description, media, bids, created, endsAt, seller, _count } =
    listing;

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

  singleListingContainer.innerHTML += ` <div class="row align-items-center g-5 py-5">
                                                <div class="col-10 col-sm-8 col-lg-6">
                                                    <img
                                                        src="${imgMedia}"
                                                        class="d-block mx-lg-auto img-fluid"
                                                        alt="${title}" 
                                                        style="height: 22rem; width: 50rem; object-fit: cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div class="col-12 col-md-6 d-flex flex-column">
                                                <div class="my-3">
                                                    <p class="h1">${title}</p>
                                                    <p class="lh-lg" id="item-Description">
                                                    ${description}
                                                    </p>
                                                </div>
                                                <p class="fs-5"><strong>Seller : </strong>${seller.name}</p>
                                                <p class="fs-5"><strong>Created : </strong>${formattedCreatedDate}<span class="small text-muted" >, ${formattedCreatedTime}</span ></p>
                                                <p class="fs-5"><strong>Ends at : </strong>${formattedEndDate}<span class="small text-muted" >, ${formattedEndTime}</span ></p>
                                                <p class="fs-5"><strong>Total Bids : </strong>${_count.bids}<span class="small text-muted" ></span ></p>
                                                <div class="row my-5">
                                                    <div class="col">
                                                    <h2 class="text-black text-end">Your bid</h2>
                                                    </div>
                                                    <div class="col">
                                                    <div class="form-floating me-lg-5 me-md-5">
                                                        <form id="bid-form">
                                                        <input
                                                            type="number"
                                                            name="bid-amount"
                                                            id="bid-amount"
                                                            class="form-control"
                                                            placeholder="Amount"
                                                            title="Please enter your bid here"
                                                            required=""
                                                        />
                                                        <label
                                                            class="was-validated"
                                                            for="bid-amount"
                                                            style="display: none"
                                                            >Amount</label
                                                        >
                                                        <button
                                                            type="submit"
                                                            class="btn bg-primary mt-2 px-3 py-2 text-white"
                                                            id="bid-button"
                                                        >
                                                            <strong>Place Your Bid</strong>
                                                        </button>
                                                        <p class="mt-3" id="error-message" style="display: none">
                                                            You do not have enough credits.
                                                        </p>
                                                        </form>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>`;

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
