import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { menuItems } from "../../pages/documentation/data";
import "../../styles/components/_organismes/style.css";
import { useTranslation } from "react-i18next";

const LeftContainer = () => {
  const { t } = useTranslation();
  const [openItemId, setOpenItemId] = useState(null);

  const handleItemClick = (id: any) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="left-container">
      <ul>
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <li onClick={() => handleItemClick(item.id)}>
              {t(item.label)}
              {item.hasIcon &&
                (openItemId === item.id ? (
                  <FaAngleUp className="menu-icon" />
                ) : (
                  <FaAngleDown className="menu-icon" />
                ))}
            </li>
            {item.subItems && (
              <ul
                className={`sub-item-container ${
                  openItemId === item.id ? "expanded" : ""
                }`}
              >
                {item.subItems.map((subItem, index) => (
                  <li key={index} className="sub-item">
                    {t(subItem)}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default LeftContainer;
