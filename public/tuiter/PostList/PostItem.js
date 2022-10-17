const PostSummaryItem = (post) => {
    return(`
          <article class="row border border-light p-2 rounded-top">
            <div class="col-1 wd-avatar img-fluid">
                <img src=${post.avatar} class="rounded-circle">
            </div>
            <section class="col-11 wd-tuiter-content ps-4">
              <div class="row wd-headings position-relative">
                <div class="wd-left-heading col-11">
                  <span class="wd-username fw-bold text-white small">${post.userName} 
                  <i class="fa-solid fa-circle-check ps-2"></i></span>
                  <span class="wd-user-handle small text-secondary">${post.handle}</span>
                  <span class="wd-time small text-secondary">- ${post.time}</span>
                </div>
                <div class="wd-right-heading float-end col-1"><i class="fa-solid fa-ellipsis"></i></div>
              </div>
              <p class="wd-message text-white small">${post.message}</p>
              <div class="wd-shared-content border border-light rounded-bottom rounded-top">
                <img src=${post.image} class="w-100 rounded-top border-bottom border-light">
                <div class="wd-content-text">
                  <h5 class="wd-content-title pt-2 small fw-bold">${post.contentTitle}</h5>
                  <div class="wd-content-snippet small text-secondary">${post.contentSnippet}</div>
                  <div>${sourceConstantOwner(post.contentOwner)}</div>
                  
                </div>
              </div>
              <div class="row wd-tuit-interactions pt-2 pb-2">
                <div class="wd-interaction-comment col-3 align-content-center text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-regular fa-comment pe-2 text-decoration-none text-secondary fa-1x"></i>${post.numComments}</a>
                </div>
                <div class="wd-interaction-retweet col-3 align-content-center text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-solid fa-retweet pe-2 text-decoration-none text-secondary fa-1x"></i>${post.numRetweets}</a>
                </div>
                <div class="wd-interaction-like col-3  text-decoration-none text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-solid fa-heart pe-2 text-secondary fa-1x"></i>${post.numLikes}</a>
                </div>
                <div class="wd-interaction-share col-3 text-decoration-none text-secondary">
                  <a href="#"><i class="fa-solid fa-arrow-up-from-bracket pe-2 text-secondary fa-1x"></i></a>
                </div>
            </div>
          </article>
 `);
}
export default PostSummaryItem;

const sourceConstantOwner = (owner) => {
    return (owner !== "" ? `
           <div class="wd-shared-link small text-secondary">
             <i class="fa-solid fa-link"></i>${owner}
           </div>` : `<div></div>`
    );
}