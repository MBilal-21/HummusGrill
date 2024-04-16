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
    if ((pathnames[pathnames.length - 1] === "about"))
      setShowCurrentH("about us");
    else if ((pathnames[pathnames.length - 1] === "contact"))
      setShowCurrentH("contact us");
    else setShowCurrentH(pathnames[pathnames.length - 1]);
// set breadcrumbs
    if (
      location.pathname === "/" ||
      location.pathname === "/menu" ||
      location.pathname === "/signature-wrap"
    )
      setShowBc(false);
    else setShowBc(true);
  }, [location]);

  let breadcrumbPath = "";
  console.log(pathnames[1]);
  return (
    showBc && (
      <div className="breadcrumbs">
        <h2>{showCurrentH}</h2>
        <div className="breadcText">
          <Link to="/" className="breadlink">
            Home
          </Link>
          {pathnames.map((name, index) => {
            breadcrumbPath += `/${name}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <span key={breadcrumbPath}> / {name}</span>
            ) : (
              <span key={breadcrumbPath} className="breadlink">
                {" "}
                / <Link to={breadcrumbPath}>{name}</Link>
              </span>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Breadcrumbs;
