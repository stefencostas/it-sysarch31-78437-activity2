import './App.css'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Student from './Student';
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import pic5 from './assets/pic5.png'

const App = () => {
  const students = [
    {
      name: 'Jane Virginia',
      email: 'jvirginia@gmail.com',
      photo: pic1
    },
    {
      name: 'Xerxes Slay',
      email: 'xerxesslay@gmail.com',
      photo: pic2
    },
    {
      name: 'Boss Dale',
      email: 'dalebossing@gmail.com',
      photo: pic3
    },
    {
      name: 'Lebron James',
      email: 'lbj23@gmail.com',
      photo: pic4
    },
    {
      name:'Stefy Boo',
      email: 'stefyboo@gmail.com',
      photo: pic5
    }
  ];

  return (
    <div>
      <Header />
      <div className="students">
        {students.map((student) => (
          <Student key={student.email} student={student} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;