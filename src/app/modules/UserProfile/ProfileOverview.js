import React from "react";
import { ListsWidget14 } from '../../../_metronic/_partials/widgets';

export function ProfileOverview() {
  return (
    <div className="row" style={{backgroundColor: '#fff', borderRadius: 7}}>
      <div style={{paddingRight: 30, paddingLeft: 50, paddingBottom: 50, paddingTop: 30}} className="col-lg-6">
        <ListsWidget14 className="card-stretch gutter-b" />
      </div>
    </div>
  );
}
