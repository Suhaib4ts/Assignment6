import React from 'react';
import SMButton from './components/SMButton';
import INPUT from './components/input';
import Select from './components/select';
import Table from './components/table';
import Switch from './components/Switch';
import CustomDatePicker from './components/DatePicker';
import { useState } from 'react';
import './App.css';


function App() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const changeDate = (date: string) => {
    setSelectedDate(date);
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
