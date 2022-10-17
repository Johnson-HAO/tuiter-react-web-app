const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item ${isActive("Home", active)}" href="../HomeScreen/index.html">
       <i class="fas fa-home"></i> Home</a>
     <a class="list-group-item active ${isActive("Explore", active)}" href="../explore/index.html">
       <i class="fas fa-hashtag"></i> Explore</a>
     <a class="list-group-item ${isActive("Notifications", active)}" href="/">
       <i class="fas fa-bell"></i> Notifications</a>
     <a class="list-group-item ${isActive("Messages", active)}" href="/">
       <i class="fas fa-envelope"></i> Messages</a>
     <a class="list-group-item ${isActive("Bookmarks", active)}" href="/">
       <i class="fas fa-bookmark"></i> Bookmarks</a>
     <a class="list-group-item ${isActive("List", active)}" href="/">
       <i class="fas fa-list"></i> Lists</a>
     <a class="list-group-item " href="/">
       <i class="fas fa-user ${isActive("Profile", active)}"></i> Profile</a>
     <a class="list-group-item" href="/">
       <i class="fas fa-circle"></i> More</a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

const isActive = (navTab, active) => {
    return (navTab === active ? `active` : null)
}
