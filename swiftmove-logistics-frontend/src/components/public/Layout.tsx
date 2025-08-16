import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginComponent from '../../pages/Login';
import RegisterComponent from '../../pages/Register';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  // Determine which prop to pass based on the child component
  const isLoginPage = (children as React.ReactElement)?.type === LoginComponent;
  const isRegisterPage = (children as React.ReactElement)?.type === RegisterComponent;

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header showRegisterOnly={isLoginPage} showLoginOnly={isRegisterPage} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
