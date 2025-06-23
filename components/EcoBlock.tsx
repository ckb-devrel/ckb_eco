"use client";
import Link from "next/link";
import React from "react";
import isMobile from "is-mobile";
import { FaGlobe } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface EcoProp {
  item: {
    img: string;
    name: string;
    tag: string[];
    link?: string;
    xlink?: string;
    rgbpp: boolean;
    desc: string;
  };
  index: number;
}

const EcoBlock: React.FC<EcoProp> = ({ item, index }) => {
  const is_mobile = isMobile();

  return (
    <>
      {is_mobile ? (
        <div key={index} className="eco-item-m">
          <div className="eco-logo">
            <img src={item.img} className="eco-img" />
            <div>
              {" "}
              {item.link&&<Link href={item.link}>
                <FaGlobe size={14} />
              </Link>}
              {item.xlink&&<Link href={item.xlink}>
                <FaSquareXTwitter size={14} />
              </Link>}
            </div>
          </div>
          <div className="eco-info">
            <div className="eco-title">
              <h5>{item.name}</h5>
              {item.rgbpp ? (
                <img src="images/rgbpp_t.png" className="rgbpp" />
              ) : (
                <img src="images/rgbpp_f.png" className="rgbpp" />
              )}
            </div>
            <div className="tags">
              {item.tag.map((tag, tIndex) => {
                return <span key={tIndex}>{tag}</span>;
              })}
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      ) : (
        <div key={index} className="eco-item">
          {item.rgbpp ? (
            <img src="images/rgbpp_t.png" className="rgbpp" />
          ) : (
            <img src="images/rgbpp_f.png" className="rgbpp" />
          )}
          <div className="eco-logo">
            <img src={item.img} className="eco-img" />
          </div>
          <div className="eco-title">
            <h5>{item.name}</h5>
            <span>
              {" "}
              {item.link&&<Link href={item.link}>
                <FaGlobe size={14} />
              </Link>}
              {item.xlink&&<Link href={item.xlink}>
                <FaSquareXTwitter size={14} />
              </Link>}
            </span>
          </div>
          <div className="tags">
            {item.tag.map((tag, tIndex) => {
              return <span key={tIndex}>{tag}</span>;
            })}
          </div>
          <p>{item.desc}</p>
        </div>
      )}
    </>
  );
};

export default EcoBlock;
