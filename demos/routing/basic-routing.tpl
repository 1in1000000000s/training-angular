<div class="col-sm-5">
  <a ui-sref="homepage" class="btn btn-info"><i class="glyphicon glyphicon-chevron-left"></i> back</a>
  <click-selector list="data.artists" selected="data.selected"></click-selector>
</div>

<div class="col-sm-7">
  <pre class="well">{{data | json}}</pre>
</div>
