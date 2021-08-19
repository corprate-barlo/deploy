/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu4,
} from "../../../../_metronic/_partials/dropdowns";

export function ProfileCard() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    console.log('user :>> ', user);
    return () => { };
  }, [user]);

  return (
    <>
      {user && (
        <div
          className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
          id="kt_profile_aside"
        >
          <div className="card card-custom card-stretch">
            <div className="card-body pt-4">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: `url(${user.pic})` }}
                  ></div>
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                  >
                    {user.firstname} {user.lastname}
                  </a>
                  <div className="text-muted">{user.occupation}</div>
                </div>
              </div>
              <div style={{ marginTop: 10 }}>
                <div className="userItemC">
                  <div className="itemBox" >
                    <p className="itemText" >
                      Өдөрт дунджаар цээжилсэн дундаж хугацаа
                    </p>
                    <h5 className="h3class">42 минут</h5>
                  </div>
                  <div className="itemBox" >
                    <p className="itemText" >
                      Бүх багцын үгсээс нийт цээжилсэн тоо
                    </p>
                    <h5 className="h3class">42 минут</h5>
                  </div>
                </div>
                <div className="userItemC">
                  <div className="itemBox" >
                    <p className="itemText" >
                      Тасралтгүй таны үг цээжилж буй хоног
                    </p>
                    <h5 className="h3class">42 минут</h5>
                  </div>
                  <div className="itemBox" >
                    <p className="itemText" >
                      Дунджаар өдөрт цээжилсэн үгсийн тоо
                    </p>
                    <h5 className="h3class">42 минут</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
