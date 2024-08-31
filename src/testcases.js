const TestCases = [
  // 1. Normal Case with Typical Data
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 3 },
        { label: "02-Aug", x: 1, y: 5 },
        { label: "03-Aug", x: 2, y: 2 },
        { label: "04-Aug", x: 3, y: 4 },
        { label: "05-Aug", x: 4, y: 6 },
      ],
      color: "#1E90FF",
      category: "Regular Bookings",
    },
  ],

  // 2. Case with All Zeros
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 0 },
        { label: "02-Aug", x: 1, y: 0 },
        { label: "03-Aug", x: 2, y: 0 },
        { label: "04-Aug", x: 3, y: 0 },
        { label: "05-Aug", x: 4, y: 0 },
      ],
      color: "#FF4500",
      category: "Zero Bookings",
    },
  ],

  // 3. Case with All Same Values
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 4 },
        { label: "02-Aug", x: 1, y: 4 },
        { label: "03-Aug", x: 2, y: 4 },
        { label: "04-Aug", x: 3, y: 4 },
        { label: "05-Aug", x: 4, y: 4 },
      ],
      color: "#8A2BE2",
      category: "Constant Bookings",
    },
  ],

  // 4. Case with Increasing Values
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 1 },
        { label: "02-Aug", x: 1, y: 2 },
        { label: "03-Aug", x: 2, y: 3 },
        { label: "04-Aug", x: 3, y: 4 },
        { label: "05-Aug", x: 4, y: 5 },
      ],
      color: "#32CD32",
      category: "Rising Trend",
    },
  ],

  // 5. Case with Decreasing Values
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 5 },
        { label: "02-Aug", x: 1, y: 4 },
        { label: "03-Aug", x: 2, y: 3 },
        { label: "04-Aug", x: 3, y: 2 },
        { label: "05-Aug", x: 4, y: 1 },
      ],
      color: "#DC143C",
      category: "Declining Trend",
    },
  ],

  // 6. Case with Extreme High Values
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 100000 },
        { label: "02-Aug", x: 1, y: 200000 },
        { label: "03-Aug", x: 2, y: 300000 },
        { label: "04-Aug", x: 3, y: 400000 },
        { label: "05-Aug", x: 4, y: 500000 },
      ],
      color: "#FFD700",
      category: "High Volume Bookings",
    },
  ],

  // 7. Case with Very Small Non-Zero Values
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 1 },
        { label: "02-Aug", x: 1, y: 0 },
        { label: "03-Aug", x: 2, y: 3 },
        { label: "04-Aug", x: 3, y: 5 },
        { label: "05-Aug", x: 4, y: 4 },
      ],
      color: "#FF1493",
      category: "Agent 1",
    },
    {
      data: [
        { label: "01-Aug", x: 0, y: 1 },
        { label: "02-Aug", x: 1, y: 0 },
        { label: "03-Aug", x: 2, y: 3 },
        { label: "04-Aug", x: 3, y: 5 },
        { label: "05-Aug", x: 4, y: 4 },
      ],
      color: "#FF1430",
      category: "Agent 2",
    },
  ],

  // 8. Case with Sparse Data Points
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 10 },
        { label: "05-Aug", x: 4, y: 20 },
        { label: "10-Aug", x: 9, y: 30 },
      ],
      color: "#00CED1",
      category: "Sparse Data",
    },
  ],

  // 9. Mixed Values (Normal + High + Low)
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 1 },
        { label: "02-Aug", x: 1, y: 1000 },
        { label: "03-Aug", x: 2, y: 5 },
        { label: "04-Aug", x: 3, y: 500 },
        { label: "05-Aug", x: 4, y: 2 },
      ],
      color: "#FF8C00",
      category: "Mixed Values",
    },
  ],

  // 10. Multiple Series with Varying Patterns
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 3 },
        { label: "02-Aug", x: 1, y: 4 },
        { label: "03-Aug", x: 2, y: 3 },
        { label: "04-Aug", x: 3, y: 4 },
        { label: "05-Aug", x: 4, y: 3 },
      ],
      color: "#B22222",
      category: "Stable Series",
    },
    {
      data: [
        { label: "01-Aug", x: 0, y: 10 },
        { label: "02-Aug", x: 1, y: 20 },
        { label: "03-Aug", x: 2, y: 30 },
        { label: "04-Aug", x: 3, y: 40 },
        { label: "05-Aug", x: 4, y: 50 },
      ],
      color: "#2E8B57",
      category: "Increasing Series",
    },
  ],

  // 11. Extreme Case with Minimum and Maximum Values
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 1 },
        { label: "02-Aug", x: 1, y: 9999999 },
        { label: "03-Aug", x: 2, y: 123211 },
        { label: "04-Aug", x: 3, y: 9999999 },
        { label: "05-Aug", x: 4, y: 2322 },
      ],
      color: "#0000FF",
      category: "Extreme Values",
    },
  ],

  // 12. Extended X series
  [
    {
      data: [
        { label: "01-Aug", x: 0, y: 10 },
        { label: "02-Aug", x: 1, y: 15 },
        { label: "03-Aug", x: 2, y: 8 },
        { label: "04-Aug", x: 3, y: 12 },
        { label: "05-Aug", x: 4, y: 9 },
        { label: "06-Aug", x: 5, y: 14 },
        { label: "07-Aug", x: 6, y: 7 },
        { label: "08-Aug", x: 7, y: 11 },
        { label: "09-Aug", x: 8, y: 13 },
        { label: "10-Aug", x: 9, y: 6 },
        { label: "11-Aug", x: 10, y: 17 },
        { label: "12-Aug", x: 11, y: 10 },
        { label: "13-Aug", x: 12, y: 8 },
        { label: "14-Aug", x: 13, y: 13 },
        { label: "15-Aug", x: 14, y: 9 },
        { label: "16-Aug", x: 15, y: 11 },
        { label: "17-Aug", x: 16, y: 14 },
        { label: "18-Aug", x: 17, y: 12 },
        { label: "19-Aug", x: 18, y: 10 },
        { label: "20-Aug", x: 19, y: 15 },
      ],
      color: "#7B68EE",
      category: "Extended Data Series",
    },
  ],

  // 13. 30 days data
  [
    {
      data: [
        { "label": "01-Aug", "x": 0, "y": 75 },
        { "label": "02-Aug", "x": 1, "y": 88 },
        { "label": "03-Aug", "x": 2, "y": 47 },
        { "label": "04-Aug", "x": 3, "y": 52 },
        { "label": "05-Aug", "x": 4, "y": 94 },
        { "label": "06-Aug", "x": 5, "y": 68 },
        { "label": "07-Aug", "x": 6, "y": 23 },
        { "label": "08-Aug", "x": 7, "y": 10 },
        { "label": "09-Aug", "x": 8, "y": 35 },
        { "label": "10-Aug", "x": 9, "y": 59 },
        { "label": "11-Aug", "x": 10, "y": 45 },
        { "label": "12-Aug", "x": 11, "y": 88 },
        { "label": "13-Aug", "x": 12, "y": 95 },
        { "label": "14-Aug", "x": 13, "y": 71 },
        { "label": "15-Aug", "x": 14, "y": 39 },
        { "label": "16-Aug", "x": 15, "y": 55 },
        { "label": "17-Aug", "x": 16, "y": 17 },
        { "label": "18-Aug", "x": 17, "y": 66 },
        { "label": "19-Aug", "x": 18, "y": 99 },
        { "label": "20-Aug", "x": 19, "y": 38 },
        { "label": "21-Aug", "x": 20, "y": 80 },
        { "label": "22-Aug", "x": 21, "y": 60 },
        { "label": "23-Aug", "x": 22, "y": 41 },
        { "label": "24-Aug", "x": 23, "y": 92 },
        { "label": "25-Aug", "x": 24, "y": 85 },
        { "label": "26-Aug", "x": 25, "y": 73 },
        { "label": "27-Aug", "x": 26, "y": 26 },
        { "label": "28-Aug", "x": 27, "y": 54 },
        { "label": "29-Aug", "x": 28, "y": 77 },
        { "label": "30-Aug", "x": 29, "y": 48 }
      ],
      color: 'green',
      category: '30 days data'
    }
  ],
  
  // 90 days data
  [
    {
      data: [
        { "label": "01-Aug", "x": 0, "y": 21 },
        { "label": "02-Aug", "x": 1, "y": 55 },
        { "label": "03-Aug", "x": 2, "y": 84 },
        { "label": "04-Aug", "x": 3, "y": 37 },
        { "label": "05-Aug", "x": 4, "y": 66 },
        { "label": "06-Aug", "x": 5, "y": 29 },
        { "label": "07-Aug", "x": 6, "y": 80 },
        { "label": "08-Aug", "x": 7, "y": 97 },
        { "label": "09-Aug", "x": 8, "y": 18 },
        { "label": "10-Aug", "x": 9, "y": 14 },
        { "label": "11-Aug", "x": 10, "y": 77 },
        { "label": "12-Aug", "x": 11, "y": 85 },
        { "label": "13-Aug", "x": 12, "y": 63 },
        { "label": "14-Aug", "x": 13, "y": 45 },
        { "label": "15-Aug", "x": 14, "y": 53 },
        { "label": "16-Aug", "x": 15, "y": 92 },
        { "label": "17-Aug", "x": 16, "y": 71 },
        { "label": "18-Aug", "x": 17, "y": 28 },
        { "label": "19-Aug", "x": 18, "y": 41 },
        { "label": "20-Aug", "x": 19, "y": 36 },
        { "label": "21-Aug", "x": 20, "y": 79 },
        { "label": "22-Aug", "x": 21, "y": 54 },
        { "label": "23-Aug", "x": 22, "y": 67 },
        { "label": "24-Aug", "x": 23, "y": 73 },
        { "label": "25-Aug", "x": 24, "y": 82 },
        { "label": "26-Aug", "x": 25, "y": 30 },
        { "label": "27-Aug", "x": 26, "y": 99 },
        { "label": "28-Aug", "x": 27, "y": 23 },
        { "label": "29-Aug", "x": 28, "y": 64 },
        { "label": "30-Aug", "x": 29, "y": 15 },
        { "label": "31-Aug", "x": 30, "y": 46 },
        { "label": "01-Sep", "x": 31, "y": 75 },
        { "label": "02-Sep", "x": 32, "y": 22 },
        { "label": "03-Sep", "x": 33, "y": 47 },
        { "label": "04-Sep", "x": 34, "y": 11 },
        { "label": "05-Sep", "x": 35, "y": 88 },
        { "label": "06-Sep", "x": 36, "y": 90 },
        { "label": "07-Sep", "x": 37, "y": 20 },
        { "label": "08-Sep", "x": 38, "y": 58 },
        { "label": "09-Sep", "x": 39, "y": 99 },
        { "label": "10-Sep", "x": 40, "y": 13 },
        { "label": "11-Sep", "x": 41, "y": 53 },
        { "label": "12-Sep", "x": 42, "y": 71 },
        { "label": "13-Sep", "x": 43, "y": 64 },
        { "label": "14-Sep", "x": 44, "y": 38 },
        { "label": "15-Sep", "x": 45, "y": 29 },
        { "label": "16-Sep", "x": 46, "y": 67 },
        { "label": "17-Sep", "x": 47, "y": 18 },
        { "label": "18-Sep", "x": 48, "y": 40 },
        { "label": "19-Sep", "x": 49, "y": 89 },
        { "label": "20-Sep", "x": 50, "y": 72 },
        { "label": "21-Sep", "x": 51, "y": 31 },
        { "label": "22-Sep", "x": 52, "y": 97 },
        { "label": "23-Sep", "x": 53, "y": 52 },
        { "label": "24-Sep", "x": 54, "y": 19 },
        { "label": "25-Sep", "x": 55, "y": 27 },
        { "label": "26-Sep", "x": 56, "y": 74 },
        { "label": "27-Sep", "x": 57, "y": 86 },
        { "label": "28-Sep", "x": 58, "y": 65 },
        { "label": "29-Sep", "x": 59, "y": 42 },
        { "label": "30-Sep", "x": 60, "y": 79 },
        { "label": "01-Oct", "x": 61, "y": 51 },
        { "label": "02-Oct", "x": 62, "y": 85 },
        { "label": "03-Oct", "x": 63, "y": 60 },
        { "label": "04-Oct", "x": 64, "y": 71 },
        { "label": "05-Oct", "x": 65, "y": 43 },
        { "label": "06-Oct", "x": 66, "y": 28 },
        { "label": "07-Oct", "x": 67, "y": 90 },
        { "label": "08-Oct", "x": 68, "y": 63 },
        { "label": "09-Oct", "x": 69, "y": 49 },
        { "label": "10-Oct", "x": 70, "y": 76 },
        { "label": "11-Oct", "x": 71, "y": 12 },
        { "label": "12-Oct", "x": 72, "y": 83 },
        { "label": "13-Oct", "x": 73, "y": 21 },
        { "label": "14-Oct", "x": 74, "y": 32 },
        { "label": "15-Oct", "x": 75, "y": 70 },
        { "label": "16-Oct", "x": 76, "y": 95 },
        { "label": "17-Oct", "x": 77, "y": 53 },
        { "label": "18-Oct", "x": 78, "y": 35 },
        { "label": "19-Oct", "x": 79, "y": 91 },
        { "label": "20-Oct", "x": 80, "y": 44 },
        { "label": "21-Oct", "x": 81, "y": 56 },
        { "label": "22-Oct", "x": 82, "y": 26 },
        { "label": "23-Oct", "x": 83, "y": 65 },
        { "label": "24-Oct", "x": 84, "y": 72 },
        { "label": "25-Oct", "x": 85, "y": 88 },
        { "label": "26-Oct", "x": 86, "y": 14 },
        { "label": "27-Oct", "x": 87, "y": 93 },
        { "label": "28-Oct", "x": 88, "y": 78 },
        { "label": "29-Oct", "x": 89, "y": 67 }
      ],
      color: 'pink',
      category: '90 days data'      
    }
  ],

  // Multiple categories

  [
    {
      "data": [
        { "label": "01-Aug", "x": 0, "y": 150 },
        { "label": "02-Aug", "x": 1, "y": 220 },
        { "label": "03-Aug", "x": 2, "y": 310 },
        { "label": "04-Aug", "x": 3, "y": 280 },
        { "label": "05-Aug", "x": 4, "y": 370 },
        { "label": "06-Aug", "x": 5, "y": 450 },
        { "label": "07-Aug", "x": 6, "y": 400 }
      ],
      "color": "#FF6347",
      "category": "Category A"
    },
    {
      "data": [
        { "label": "01-Aug", "x": 0, "y": 120 },
        { "label": "02-Aug", "x": 1, "y": 180 },
        { "label": "03-Aug", "x": 2, "y": 160 },
        { "label": "04-Aug", "x": 3, "y": 240 },
        { "label": "05-Aug", "x": 4, "y": 300 },
        { "label": "06-Aug", "x": 5, "y": 250 },
        { "label": "07-Aug", "x": 6, "y": 310 }
      ],
      "color": "#4682B4",
      "category": "Category B"
    },
    {
      "data": [
        { "label": "01-Aug", "x": 0, "y": 500 },
        { "label": "02-Aug", "x": 1, "y": 470 },
        { "label": "03-Aug", "x": 2, "y": 530 },
        { "label": "04-Aug", "x": 3, "y": 510 },
        { "label": "05-Aug", "x": 4, "y": 550 },
        { "label": "06-Aug", "x": 5, "y": 580 },
        { "label": "07-Aug", "x": 6, "y": 600 }
      ],
      "color": "#32CD32",
      "category": "Category C"
    },
    {
      "data": [
        { "label": "01-Aug", "x": 0, "y": 230 },
        { "label": "02-Aug", "x": 1, "y": 290 },
        { "label": "03-Aug", "x": 2, "y": 310 },
        { "label": "04-Aug", "x": 3, "y": 370 },
        { "label": "05-Aug", "x": 4, "y": 420 },
        { "label": "06-Aug", "x": 5, "y": 410 },
        { "label": "07-Aug", "x": 6, "y": 450 }
      ],
      "color": "#FFD700",
      "category": "Category D"
    },
    {
      "data": [
        { "label": "01-Aug", "x": 0, "y": 110 },
        { "label": "02-Aug", "x": 1, "y": 160 },
        { "label": "03-Aug", "x": 2, "y": 190 },
        { "label": "04-Aug", "x": 3, "y": 130 },
        { "label": "05-Aug", "x": 4, "y": 200 },
        { "label": "06-Aug", "x": 5, "y": 250 },
        { "label": "07-Aug", "x": 6, "y": 220 }
      ],
      "color": "#9400D3",
      "category": "Category E"
    }
  ]
  
  
];

export default TestCases;
