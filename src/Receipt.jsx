import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const generatePDF = async () => {
    const doc = await PDFDocument.create();
    const page = doc.addPage([600, 400]);
    const { height } = page.getSize();
    page.drawText(`Receipt`, { x: 50, y: height - 50, size: 30, color: rgb(0, 0, 0) });
    page.drawText(`Name: ${name}`, { x: 50, y: height - 100, size: 20 });
    page.drawText(`Amount: $${amount}`, { x: 50, y: height - 150, size: 20 });

    const pdfBytes = await doc.save();
    saveAs(new Blob([pdfBytes], { type: 'application/pdf' }), 'receipt.pdf');
  };

  return (
    <div className={`transition-transform duration-500 ease-in-out transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4`}>
      <h1 className="text-2xl font-bold">Generate Receipt</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        onClick={generatePDF}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Generate PDF
      </button>
    </div>
  );
}

export default App;
