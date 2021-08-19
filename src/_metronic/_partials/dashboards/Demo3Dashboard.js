import React from "react";
import {
  MixedWidget4,
  BaseTablesWidget1,
  BaseTablesWidget2,
  BaseTablesWidget6,
  StatsWidget11,
  StatsWidget10,
  ListsWidget8,
  ListsWidget10,
  ListsWidget14,
  AdvanceTablesWidget9,
} from "../widgets";
// import firebase from './firebase.config';
import Firebase from './firebase.config';
export function Demo3Dashboard() {

  const [blogs, setBlogs] = React.useState([])

  // const ref = firebase.firestore().collection('testfirebase-f276f');

  React.useEffect(() => {
    console.log('My use effect called');

    fetchBlogs();

  }, []);

  const fetchBlogs = async () => {

    const firebase = new Firebase();
    firebase.db
       .collection("tempData")
       .get()
       .then(async querySnapshot => {
         // do something here
         await console.log('querySnapshot :>> ', querySnapshot);
       });
  }

  return (
    <>
      {/* begin::Dashboard */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-xl-4">
          <MixedWidget4 className="gutter-b card-stretch" />
        </div>
        <div className="col-xl-8">
          <BaseTablesWidget6 className="gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-xl-4">
          <div className="row">
            <div className="col-xl-12">
              <StatsWidget11
                className="gutter-b"
                symbolShape="circle"
                baseColor="danger"
              />
            </div>
            <div className="col-xl-12">
              <StatsWidget10
                className="gutter-b"
                symbolShape="circle"
                baseColor="info"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <ListsWidget14 className="gutter-b card-stretch" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row">
        <div className="col-lg-12 col-xxl-12">
          <AdvanceTablesWidget9 className="card-stretch gutter-b" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-xl-6">
          <ListsWidget10 className="card-stretch gutter-b" />
        </div>
        <div className="col-xl-6">
          <BaseTablesWidget1 className="card-stretch gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-lg-4">
          <ListsWidget8 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-8">
          <BaseTablesWidget2 className="card-stretch gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* end::Dashboard */}
    </>
  );
}
