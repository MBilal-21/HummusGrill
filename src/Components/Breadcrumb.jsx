// Breadcrumbs.jsx

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [showBc, setShowBc] = useState(true);
  const [showCurrentH, setShowCurrentH] = useState("");
  useEffect(() => {
    // set heading
   
    if (pathnames[0] === "create-meal")
      setShowCurrentH("Create Meal");
    else if (location.pathname.startsWith("/view-ordered-history"))
      setShowCurrentH("view ordered history");
    else if (location.pathname.startsWith("/checkout"))
      setShowCurrentH("Thankyou");
    else setShowCurrentH(pathnames[pathnames.length - 1]);
    // set breadcrumbs
    if (
      location.pathname === "/" ||
      location.pathname.startsWith("/menu") ||
      location.pathname === "/signature-wrap"
    )
      setShowBc(false);
    else setShowBc(true);
  }, [location]);

  let breadcrumbPath = "";
  return (
    showBc && (
      <div className="breadcrumbs">
        <h2>{showCurrentH}</h2>
        <div className="breadcText">
          <Link to="/" className="breadlink">
            Home
          </Link>
          {pathnames.map((name, index) => {
            // breadcrumbPath += `/${name}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <span key={index}> / {name}</span>
            ) : (
              <span key={index}>
                {" "}
                /{" "}
                <span>
                  {name}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Breadcrumbs;
