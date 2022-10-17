import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row pt-1">
              <div class="col-10 position-relative">
                <i class="fa-solid fa-magnifying-glass text-muted position-absolute p-2 m-1"></i>
                <input class="ps-5 form-control rounded-pill p-2" type="text" placeholder="Search Tuiter" aria-label="Search Tuiter">
              </div>
              <div class="col-2">
                <a href="explore_settings.html"><i class="fa-solid fa-gear fa-2x pt-1"></i></a>
              </div>
            </div>
            <ul class="nav mb-2 nav-tabs pt-2">
              <li class="nav-item">
                <a class="nav-link active px-md-2" href="#">For You</a>
              </li>
              <li class="nav-item pe-md-0 me-md-0">
                <a class="nav-link px-md-2 px-sm-1" href="#">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-md-2 px-sm-1" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-md-2 px-sm-1" href="#">Sports</a>
              </li>
              <li class="nav-item d-sm-none d-md-block">
                <a class="nav-link px-md-2" href="#">Entertainment</a>
              </li>
           </ul>
           <div class="position-relative">
             <img src="../../images/starship.jpg" class="w-100" alt="SpaceX Starship">
             <h2 class="text-light fw-bold position-absolute bottom-0 ps-2">SpaceX's Starship</h2>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;