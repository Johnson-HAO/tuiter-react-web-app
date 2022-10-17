const WhoToFollowListItem = (who) => {
    return(`
   <div class ="list-group-item position-relative">
     <img class="wd-profile-logo rounded-circle float-left align-middle" src=${who.avatarIcon} 
     height="45px", width="45px">
     <div class="float-right d-inline-block align-middle ps-2">
      <span class="fw-bold medium">${who.userName}<i class="fa-solid fa-circle-check ps-2"></i></span>
      <div class="wd-handle medium">@${who.handle}</div>
    </div>
    <div class="float-end align-middle pt-1">
      <button type="button" class="btn btn-primary rounded-pill">Follow</button>
    </div>
   </div>
 `);
}
export default WhoToFollowListItem;