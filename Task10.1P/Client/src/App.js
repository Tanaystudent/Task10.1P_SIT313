import React from 'react';
import Header from './Header';
import HeaderImage from './HeaderImage';
import './App.css'; // You can define your CSS styles in this file
import SubHeading from './SubHeading';
import Button from './Button';
import SignupForm from './SignupForm';
import CardList from './CardList';
import Footer from './Footer';
import FooterText from './FooterText';
import CardListT from './CardListT';
const App = () => {
  const headerImage = 'https://source.unsplash.com/random/?university'; // Replace with your Unsplash image URL

  return (
    <div className="app">
      <Header />
      <HeaderImage imageUrl={headerImage} />
      <SubHeading text="Featured Articles" />
      <CardList/>
      <br/>
      <Button text="See more articles"/>
      <br/>
      <SubHeading text="Featured Tutorials" />
      <CardListT/>
      <br/>
      <Button text="See more tutorials"/>
      <br/>
      <SignupForm />
      <Button text="Subscribe"/>
      <br/>
      <Footer />
      <FooterText/>
    </div>
  );
};

export default App;


