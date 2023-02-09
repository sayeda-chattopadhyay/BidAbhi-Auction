export function createSingleListingHTML(listing) {
  const singleListingContainer = document.getElementById(
    "singleListingContainer"
  );

  singleListingContainer.innerHTML += ` <div class="row align-items-center g-5 py-5">
                                                <div class="col-10 col-sm-8 col-lg-6">
                                                    <img
                                                        src="${listing.media}"
                                                        class="d-block mx-lg-auto img-fluid"
                                                        alt="${listing.title}" 
                                                        style="height: 22rem; width: 50rem; object-fit: cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div class="col-12 col-md-6 d-flex flex-column">
                                                <div class="my-3">
                                                    <p class="h1">${listing.title}</p>
                                                    <p class="lh-lg" id="item-Description">
                                                    ${listing.description}
                                                    </p>
                                                </div>
                                                <p class="fs-5"><strong>Id : </strong>${listing.id}</p>
                                                <p class="fs-5"><strong>Tags : </strong>${listing.tags}</p>
                                                <p class="fs-5"><strong>Owner : </strong>${listing.seller.name}</p>
                                                <p class="fs-5"><strong>Created : </strong>${listing.created}</p>
                                                <p class="fs-5"><strong>Ends at : </strong>${listing.endsAt}</p>
                                                <p class="fs-5"><strong>Total Bids : </strong>${listing._count}</p>
                                                <p class="fs-5"><strong>Highest Bid : </strong></p>
                                                <p class="fs-5"><strong>Current Winner : </strong>Name</p>
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
}
