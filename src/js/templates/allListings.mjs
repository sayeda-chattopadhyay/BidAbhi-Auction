export function createAllListingsHTML(listings) {
  const listingsContainer = document.getElementById("listingsContainer");

  //   console.log(listings);

  listingsContainer.innerHTML = "";

  listings.forEach(function (listing) {
    // console.log(listing);

    const { id, title, description, media, created, endsAt, _count, tags } =
      listing; // destructuring

    let imgMedia = media;

    if (media.length === 0) {
      imgMedia = ["/images/no-image-2.jpg"];
    }

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

    listingsContainer.innerHTML += `<div class="col p-3">
                                        <div class="card h-100 border-0 p-2">
                                            <a href="/singleListing.html?id=${id}"
                                                ><img
                                                src="${imgMedia}"
                                                class="card-img-top"
                                                style="height: 22rem; object-fit: cover"
                                                alt="${title}"
                                            /></a>
                                            <div class="card-body bg-light">
                                                <h3 class="card-title pb-0">${title}</h3>
                                                <p class="card-text">
                                                <strong>Description: </strong>${description}
                                                </p>
                                                <p class="card-text">
                                                <strong>Tags: </strong>${tags}
                                                </p>
                                                <p class="card-text"><strong>Owner: </strong>Owner name</p>
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
                                                 <a href="/singleListing.html?id=${id}"class="btn btn-primary" style="width: 50%">
                                                            <strong>View Item</strong>
                                                        </a>
                                            </div>
                                        </div>
                                    </div>`;
  });
}
