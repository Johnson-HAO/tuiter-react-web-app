const PostSummaryItem = (post) => {
    return(`
     <div class="list-group-item m-0 pt-2 position-relative">
       <div class="col-9 float-left d-inline-block">
         <div class="text-secondary small">${post.topic}</div>
           <span class="fw-bold small">${post.userName}
             <i class="fa-solid fa-circle-check ps-2 small"></i></span>
             <span class="text-secondary small"> - ${post.time}</span>
             <p class="small fw-bold">${post.title}</p>
         </div>
         <div class="col-3 wd-post-img float-end mt-2">
           <img src=${post.image} class="float-end rounded mt-2" alt="react js logo" height="70px" width="80px">
       </div>
     </div>
 `);
}
export default PostSummaryItem;

