<ul class="media-list well">
  <li ng-repeat="artist in data.artists"
      ng-click="select(artist)"
      ng-class="{active: artist === data.selected}"
      class="media">
    <div class="media-left">
      <img ng-src="assets/{{artist.avatar}}" class="media-object">
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{artist.name}}</h4>
    </div>
  </li>
</ul>
