import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Footer from './components/Footer';
import GameClassifier from './components/GameClassifier';
import Header from './components/Header';
import ReportingSystem from './components/ReportingSystem';
import ResponsibleGaming from './components/ResponsibleGaming';
import SafetyFeatures from './components/SafetyFeatures';
import UserDashboard from './components/UserDashboard';

const App = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const renderContent = () => {
    switch(currentTab) {
      case 'dashboard':
        return <UserDashboard />;
      case 'classifier':
        return <GameClassifier />;
      case 'safety':
        return <SafetyFeatures />;
      case 'responsible':
        return <ResponsibleGaming />;
      case 'report':
        return <ReportingSystem />;
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <motion.main 
        className="container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={tabVariants}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.main>
      <Footer />
    </div>
  );
};

export default App;