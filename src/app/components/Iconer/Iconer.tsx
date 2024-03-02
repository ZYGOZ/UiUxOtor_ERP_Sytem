import React from "react";
import DashboardIcon from "../../../../public/icons/DashboardIcon";
import DashboardIconActive from "../../../../public/icons/DashboardIconActive";
import StaffIcon from "../../../../public/icons/StaffIcon";
import StaffIconActive from "../../../../public/icons/StaffIconActive";
import PayrollIcon from "../../../../public/icons/PayrollIcon";
import MemoIcon from "../../../../public/icons/MemoIcon";
import CircularsIcon from "../../../../public/icons/CircularsIcon";
import MaintenanceIcon from "../../../../public/icons/MaintenanceIcon";
import LogisticsIcon from "../../../../public/icons/LogisticsIcon";
import OfficeBudgetIcon from "../../../../public/icons/OfficeBudgetIcon";
import StocksIcon from "../../../../public/icons/StocksIcon";
import NotificationsIcon from "../../../../public/icons/NotificationsIcon";
import CapacityBuildingIcon from "../../../../public/icons/CapacityBuildingIcon";
import ProcurementsIcon from "../../../../public/icons/ProcurementsIcon";

interface IconerProps {
  iconName?: string;
  isActive?: boolean;
}

const Iconer: React.FC<IconerProps> = ({ iconName, isActive }) => {
  switch (iconName) {
    case "DashboardIcon": {
      if (!isActive) {
        return <DashboardIcon />;
      }
      return <DashboardIconActive />;
    }
    case "StaffIcon": {
      if (!isActive) {
        return <StaffIcon />;
      }
      return <StaffIconActive />;
    }
    case "PayrollIcon": {
      if (!isActive) {
        return <PayrollIcon />;
      }
      return <StaffIconActive />;
    }
    case "MemoIcon": {
      if (!isActive) {
        return <MemoIcon />;
      }
      return <StaffIconActive />;
    }
    case "CircularsIcon": {
      if (!isActive) {
        return <CircularsIcon />;
      }
      return <StaffIconActive />;
    }
    case "MaintenanceIcon": {
      if (!isActive) {
        return <MaintenanceIcon />;
      }
      return <StaffIconActive />;
    }
    case "LogisticsIcon": {
      if (!isActive) {
        return <LogisticsIcon />;
      }
      return <StaffIconActive />;
    }
    case "OfficeBudgetIcon": {
      if (!isActive) {
        return <OfficeBudgetIcon />;
      }
      return <StaffIconActive />;
    }
    case "StocksIcon": {
      if (!isActive) {
        return <StocksIcon />;
      }
      return <StaffIconActive />;
    }
    case "NotificationsIcon": {
      if (!isActive) {
        return <NotificationsIcon />;
      }
      return <StaffIconActive />;
    }
    case "CapacityBuildingIcon": {
      if (!isActive) {
        return <CapacityBuildingIcon />;
      }
      return <StaffIconActive />;
    }
    case "ProcurementsIcon": {
      if (!isActive) {
        return <ProcurementsIcon />;
      }
      return <StaffIconActive />;
    }
  }

  return <div></div>;
};

export default Iconer;
