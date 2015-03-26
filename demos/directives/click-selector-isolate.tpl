<ul class="media-list well">
  <li ng-repeat="item in list"
      ng-click="select(item)"
      ng-class="{active: item === selected}"
      class="media">
    <div class="media-left">
      <img ng-src="/_assets/{{item.avatar}}" class="media-object">
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{item.name}}</h4>
    </div>
  </li>
</ul>
