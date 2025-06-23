
import React from "react";
import isMobile from "is-mobile";
const IndexTitle3 = (): React.ReactElement => {
  const mobile = isMobile();

  return (
    <>
      {mobile ? (
        <>The Role of CKB <br /> in the Bitcoin Ecosystem</>
      ) : (
        <>
         The Role of CKB in the Bitcoin Ecosystem
        </>
      )}
    </>
  );
};

export default IndexTitle3;
