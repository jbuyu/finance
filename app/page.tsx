'use client'

import CalculateReturnsForm from '@/components/Forms/CalculateReturnsForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Button, Input, Label, Select } from 'shadcn';

const Home = () => {
  const [formData, setFormData] = useState({
    principal: 1000,
    annualInterest1: 10,
    annualInterest2: 12,
    monthlyDeposit: 100,
    investmentPeriod: 12, // months or years
    periodType: 'monthly', // "monthly" or "yearly"
  });
  const [graphData, setGraphData] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateYields = () => {
    const { principal, annualInterest1, annualInterest2, monthlyDeposit, investmentPeriod, periodType } = formData;
    const period = periodType === 'monthly' ? investmentPeriod * 12 : investmentPeriod;

    let product1Data = [];
    let product2Data = [];
    let balance1 = Number(principal);
    let balance2 = Number(principal);

    for (let i = 1; i <= period; i++) {
      balance1 += balance1 * (annualInterest1 / 100) / 12 + Number(monthlyDeposit);
      balance2 += balance2 * (annualInterest2 / 100) / 12 + Number(monthlyDeposit);

      product1Data.push({ month: i, balance: balance1 });
      product2Data.push({ month: i, balance: balance2 });
    }

    const data = product1Data.map((_, index) => ({
      month: index + 1,
      product1: product1Data[index].balance.toFixed(2),
      product2: product2Data[index].balance.toFixed(2),
    }));

    setGraphData(data);
  };

  return (
    <div className="p-4">
      <div className='flex justify-end ' >

      <CalculateReturnsForm/>
      </div>

      {/* Input Form */}
      {/* <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Principal Amount</Label>
          <Input type="number" name="principal" value={formData.principal} onChange={handleInputChange} />
        </div>
        <div>
          <Label>Annual Interest 1 (%)</Label>
          <Input type="number" name="annualInterest1" value={formData.annualInterest1} onChange={handleInputChange} />
        </div>
        <div>
          <Label>Annual Interest 2 (%)</Label>
          <Input type="number" name="annualInterest2" value={formData.annualInterest2} onChange={handleInputChange} />
        </div>
        <div>
          <Label>Monthly Additional Deposit</Label>
          <Input type="number" name="monthlyDeposit" value={formData.monthlyDeposit} onChange={handleInputChange} />
        </div>
        <div>
          <Label>Investment Period</Label>
          <Input type="number" name="investmentPeriod" value={formData.investmentPeriod} onChange={handleInputChange} />
        </div>
        <div>
          <Label>Period Type</Label>
          <Select name="periodType" value={formData.periodType} onChange={handleInputChange}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </div>
      </div> */}

      {/* <Button onClick={calculateYields} className="mt-4">Compare Yields</Button> */}

      {/* Chart */}
      {graphData.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="product1" stroke="#8884d8" name="Product 1" />
            <Line type="monotone" dataKey="product2" stroke="#82ca9d" name="Product 2" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Home;
