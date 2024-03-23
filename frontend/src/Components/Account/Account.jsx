import React, { useState } from 'react';

import EditProfile from './EditProfile';
import OrderHistory from './OrderHistory';

import '../styles/Account.css';

function Account(){
  const [activeTab, setActiveTab] = useState('editProfile');
  

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="account-page">
      <div className="sidebar">
        <button
          className={activeTab === 'editProfile' ? 'active' : ''}
          onClick={() => handleTabChange('editProfile')}>
          Edit Profile
        </button>
        <button
          className={activeTab === 'orderHistory' ? 'active' : ''}
          onClick={() => handleTabChange('orderHistory')}>
          Order History
        </button>
        <button>
          Logout
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'editProfile' && (
          <EditProfile/>
        )}
        {activeTab === 'orderHistory' && (
          <OrderHistory/>
        )}
      </div>
    </div>
  );
};

export default Account;
