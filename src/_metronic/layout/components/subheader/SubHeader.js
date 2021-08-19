/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useLayoutEffect, useEffect } from "react";
import objectPath from "object-path";
import { useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { QuickActions } from "./components/QuickActions";
import { BreadCrumbs } from "./components/BreadCrumbs";
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from "../../_core/MetronicSubheader";
import { useHtmlClassService } from "../../_core/MetronicLayout";

export function SubHeader() {
  const uiService = useHtmlClassService();
  const location = useLocation();
  const subheader = useSubheader();

  const layoutProps = useMemo(() => {
    return {
      config: uiService.config,
      subheaderFixed: objectPath.get(uiService.config, "subheader.fixed"),
      subheaderMobileToggle: objectPath.get(
        uiService.config,
        "subheader.mobile-toggle"
      ),
      subheaderCssClasses: uiService.getClasses("subheader", true),
      subheaderContainerCssClasses: uiService.getClasses(
        "subheader_container",
        true
      ),
    };
  }, [uiService]);

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle("kt_aside_menu", location.pathname);
    const header = getBreadcrumbsAndTitle("kt_header_menu", location.pathname);
    const breadcrumbs =
      aside && aside.breadcrumbs.length > 0
        ? aside.breadcrumbs
        : header.breadcrumbs;
    subheader.setBreadcrumbs(breadcrumbs);
    subheader.setTitle(
      aside && aside.title && aside.title.length > 0
        ? aside.title
        : header.title
    );
    // eslint-disable-next-line
  }, [location.pathname]);

  // Do not remove this useEffect, need from update title/breadcrumbs outside (from the page)
  useEffect(() => { }, [subheader]);

  return (
    <div style={{ flex: 1}}>
      <h1 className="barlo" >  Barlo users</h1>
      <div className="myContainer">
        <div
          className="packImg"
          style={{
            backgroundImage: `url('${toAbsoluteUrl(
              "/media/pack_img/pink.png"
            )}')`,
          }}>
          <p className="myText">Идэвхитэй<br/> багцууд</p>
        </div>
        <div 
        className="packImg"
         style={{
          backgroundImage: `url('${toAbsoluteUrl(
            "/media/pack_img/orange.png"
          )}')`,
        }}>
          <p className="myText">Идэвхитэй<br/> нийтлэлүүд</p>
        </div>
        <div
          className="packImg"
        style={{
          backgroundImage: `url('${toAbsoluteUrl(
            "/media/pack_img/purple.png"
          )}')`,
        }}>
          <p className="myText">Идэвхитэй<br/> гишүүд</p>
        </div>
        <div
        className="packImg"
         style={{
          backgroundImage: `url('${toAbsoluteUrl(
            "/media/pack_img/green.png"
          )}')`,
        }}>
          <p className="myText">Идэвхитэй<br/> багцууд</p>
        </div>
      </div>
    </div>
  );
}
