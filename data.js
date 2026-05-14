const roadmapData = [
  {
    title: "Supply Chain Foundations",
    badge: "Start Here",
    content: {
      overview: `## What is it?\nSupply Chain Management (SCM) coordinates all activities involved in sourcing, procurement, production, and delivery of products — from raw materials to the end customer.\n\n## Why it matters\nA well-managed supply chain reduces costs, improves service levels, and creates competitive advantage. Companies like Amazon and Walmart have built entire business models around supply chain excellence.\n\n## Key Concepts\n- Material flow: physical movement of goods from supplier to customer\n- Information flow: orders, forecasts, and tracking data\n- Financial flow: payments, credit terms, and invoices\n- Bullwhip Effect: small demand changes amplified upstream\n- OTIF: On Time In Full — the gold standard KPI\n\n## Key Metrics / KPIs\n- Perfect Order Rate\n- Cash-to-Cash Cycle Time\n- OTIF (On Time In Full)\n- Inventory Turnover`,
      topics: {
        "What is Supply Chain Management": `## What is it?
SCM coordinates the flow of goods, information, and money from raw materials to the end customer across a network of suppliers, manufacturers, and distributors.

## Why it matters
A well-run supply chain reduces costs, improves availability, and creates competitive advantage — Amazon and Walmart have built entire business models around supply chain excellence.

## Key takeaway
A great product with a poor supply chain will always lose to a good product with a great one.`,

        "Logistics & Distribution Basics": `## What is it?
Logistics covers the planning, movement, and storage of goods — inbound from suppliers, internally between sites, and outbound to customers — through a network of distribution centres and transport links.

## Why it matters
Logistics typically represents 5–15% of a product's total cost, making it one of the highest-leverage levers for both profitability and customer service.

## Key takeaway
Without reliable logistics, every upstream plan — sourcing, production, forecasting — ultimately fails at the point of customer delivery.`,

        "Procurement & Sourcing Fundamentals": `## What is it?
Procurement is the process of buying goods and services from external suppliers; sourcing is the strategic discipline of identifying, evaluating, and selecting the right suppliers for long-term value.

## Why it matters
Procurement spend typically represents 40–80% of a company's revenue, making supplier selection and negotiation one of the most impactful financial levers in any business.

## Key takeaway
The best procurement teams don't just negotiate the lowest price — they secure the right quality, reliability, and innovation from partners who help the business win.`,

        "Inventory Management Essentials": `## What is it?
Inventory management controls what stock to hold, how much, and where — balancing the cost of holding excess stock against the risk of running out and losing sales.

## Why it matters
Inventory directly ties up working capital — every unit on the shelf is cash that could be deployed elsewhere, making optimisation a direct lever on both profit and cash flow.

## Key takeaway
Zara holds just 6–8 days of stock vs the industry average of 52+ days — proof that inventory management is a source of competitive advantage, not just an operational necessity.`,

        "Demand Planning Basics": `## What is it?
Demand planning uses historical data, market intelligence, and commercial inputs to forecast future customer demand — the starting point for every supply, production, and inventory decision.

## Why it matters
A 10% improvement in forecast accuracy typically delivers 5–15% reduction in inventory and 2–3% improvement in service levels — directly impacting working capital and customer satisfaction.

## Key takeaway
Every supply chain decision downstream — what to make, buy, stock, and ship — is only as good as the demand forecast it's built on.`,

        "Replenishment Planning Basics": `## What is it?
Replenishment planning determines when to order more stock and how much to order — triggering purchase orders automatically when inventory falls to a calculated reorder point.

## Why it matters
Poor replenishment is the root cause of both stockouts (lost revenue) and overstock (wasted capital) — the two most costly inventory failures in any supply chain.

## Key takeaway
P&G's VMI programme with Walmart reduced Walmart's inventory by 30% while improving P&G's forecast accuracy by 40% — showing that smart replenishment benefits both sides of the supply chain.`,

        "Warehouse Operations Overview": `## What is it?
Warehouse operations cover receiving, put-away, storage, picking, packing, and despatch — the physical engine room that converts supply plans into actual customer deliveries.

## Why it matters
Pick accuracy, throughput speed, and cost per order are the metrics that directly determine whether customer promises are kept — and whether the operation is profitable at scale.

## Key takeaway
Amazon's random-storage model combined with 750,000+ robots achieves 1.6M+ orders per day at 99.9% accuracy — proving warehouse design is a strategic, not just operational, decision.`,

        "Transportation Modes & Networks": `## What is it?
Transportation modes — road, ocean, air, and rail — each offer different trade-offs of cost, speed, capacity, and carbon footprint, and most supply chains use multiple modes across different lanes.

## Why it matters
Mode selection is one of the biggest cost levers in logistics — switching 10% of shipments from air to ocean can reduce freight cost on those lanes by up to 80%.

## Key takeaway
IKEA's flat-pack design triples container utilisation versus assembled furniture — turning packaging into a logistics cost reduction and a transport sustainability strategy simultaneously.`,

        "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)": `## What is it?
Supply chain KPIs — OTIF, fill rate, inventory turns, and perfect order rate — are the measurable numbers that track whether the supply chain is delivering on its service, cost, and efficiency commitments.

## Why it matters
Walmart penalises suppliers 3% of invoice value for missing 98.5% OTIF — making KPI performance a direct P&L issue, not just an operational metric.

## Key takeaway
What gets measured gets managed — the right KPI set aligns the entire supply chain organisation around the outcomes that matter to the business and its customers.`
      }
    },
    items: [
      "What is Supply Chain Management",
      "Logistics & Distribution Basics",
      "Procurement & Sourcing Fundamentals",
      "Inventory Management Essentials",
      "Demand Planning Basics",
      "Replenishment Planning Basics",
      "Warehouse Operations Overview",
      "Transportation Modes & Networks",
      "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)"
    ]
  },

  {
    title: "Core Planning Processes",
    badge: "Core",
    content: {
      overview: `## What is it?\nCore planning processes are structured frameworks aligning supply with demand — from high-level S&OP down to day-to-day MRP execution.\n\n## Why it matters\nWithout structured planning, businesses react to problems instead of preventing them.\n\n## Key Concepts\n- S&OP: monthly demand/supply balance\n- IBP: S&OP plus financial reconciliation\n- MRP: what to make, buy, and when\n- MPS: detailed production schedule\n\n## Key Metrics / KPIs\n- Forecast Accuracy\n- Plan Attainment %\n- Inventory vs Target DOS\n- Capacity Utilisation %`,
      topics: {}
    },
    items: [
      "Plan → Source → Make → Deliver → Return",
      "Sales & Operations Planning (S&OP)",
      "Integrated Business Planning (IBP)",
      "Master Production Scheduling (MPS)",
      "Material Requirements Planning (MRP)",
      "Capacity Planning",
      "Order Management & Fulfillment",
      "Supplier Relationship Management"
    ]
  },

  {
    title: "Forecasting Fundamentals",
    badge: "Analytical",
    content: {
      overview: `## What is it?\nDemand forecasting estimates future customer demand using historical data, statistical methods, and market intelligence.\n\n## Why it matters\nAccurate forecasts reduce excess inventory, prevent stockouts, and improve customer service.\n\n## Key Concepts\n- Qualitative: expert judgment and market research\n- Quantitative: statistical models from historical data\n- MAPE: Mean Absolute Percentage Error\n- Bias: systematic over or under-forecasting\n\n## Key Metrics / KPIs\n- MAPE\n- Forecast Bias\n- WAPE\n- Forecast Value Added (FVA)`,
      topics: {}
    },
    items: [
      "Qualitative Forecasting (Judgmental, Delphi)",
      "Time Series Forecasting",
      "Causal Forecasting",
      "Short-Term vs Long-Term Forecasting",
      "Forecast Accuracy Metrics (MAPE, WAPE, Bias)",
      "Forecast Error Analysis",
      "Seasonality & Trend Identification",
      "Demand Segmentation (ABC/XYZ)"
    ]
  },

  {
    title: "Forecasting Models",
    badge: "Analytical",
    content: {
      overview: `## What is it?\nForecasting models are mathematical techniques predicting future demand from historical patterns and external signals.\n\n## Why it matters\nThe right model for the right product type dramatically improves forecast accuracy.\n\n## Key Concepts\n- Moving Average: simple average of last N periods\n- Exponential Smoothing: weighted average favouring recent data\n- ARIMA: captures autocorrelation and trend\n- ML models: XGBoost, Random Forest\n\n## Key Metrics / KPIs\n- MAPE by model type\n- Forecast Value Added vs naive\n- Model stability over time`,
      topics: {}
    },
    items: [
      "Moving Average Models",
      "Exponential Smoothing (SES, DES, TES)",
      "ARIMA / SARIMA Models",
      "Croston's Method (Intermittent Demand)",
      "Regression Models",
      "Machine Learning Forecasting (XGBoost, Random Forest)",
      "Deep Learning Forecasting (LSTM, Transformers)",
      "Probabilistic Forecasting"
    ]
  },

  {
    title: "Forecasting Parameters (Required Inputs)",
    badge: "Analytical",
    content: {
      overview: `## What is it?\nForecasting parameters are inputs and settings configuring how forecasting models generate predictions.\n\n## Why it matters\nWrong parameters produce systematically biased forecasts across thousands of SKUs.\n\n## Key Concepts\n- History length: periods of data to include\n- Service level: target fill rate drives safety stock\n- Lead time: affects replenishment timing\n- MOQ: minimum order quantity constrains options\n\n## Key Metrics / KPIs\n- Forecast accuracy by parameter segment\n- Safety stock investment vs service level\n- Working capital impact`,
      topics: {}
    },
    items: [
      "Historical Demand Data",
      "Lead Time & Lead Time Variability",
      "Service Level Targets",
      "Seasonality Index",
      "Trend Coefficients",
      "Safety Stock Parameters",
      "Reorder Point Inputs",
      "Minimum Order Quantity (MOQ)",
      "Supplier Lead Time Reliability",
      "Demand Variability (Standard Deviation)",
      "Forecast Error Metrics (MAD, MSE, RMSE)",
      "Lifecycle Stage (New, Mature, Decline)"
    ]
  },

  {
    title: "Replenishment Planning",
    badge: "Operations",
    content: {
      overview: `## What is it?\nReplenishment planning determines when and how much to order to maintain optimal inventory levels.\n\n## Why it matters\nPoor replenishment leads to stockouts or overstock — the two most expensive outcomes in supply chain.\n\n## Key Concepts\n- ROP: Reorder Point — triggers an order\n- EOQ: Economic Order Quantity — optimal size\n- Safety Stock: buffer against variability\n- Min-Max: simple boundary system\n\n## Key Metrics / KPIs\n- Days of Supply (DOS)\n- Fill Rate %\n- Inventory Turns\n- Stock Cover vs Target`,
      topics: {}
    },
    items: [
      "Reorder Point (ROP) Method",
      "Min-Max Planning",
      "Periodic Review Systems",
      "Continuous Review Systems",
      "Safety Stock Calculation",
      "Economic Order Quantity (EOQ)",
      "Multi-Echelon Inventory Optimization (MEIO)",
      "Distribution Requirements Planning (DRP)"
    ]
  },

  {
    title: "Tools & Systems",
    badge: "Core",
    content: {
      overview: `## What is it?\nSupply chain tools and systems are software platforms enabling planning, execution, visibility, and analytics.\n\n## Why it matters\nManual planning breaks down at scale — modern systems process millions of data points in minutes.\n\n## Key Concepts\n- ERP: backbone system (SAP, Oracle)\n- APS: optimised supply/demand planning\n- WMS: warehouse operations\n- TMS: freight and routing\n\n## Key Metrics / KPIs\n- System adoption rate\n- Data accuracy %\n- Planning cycle time reduction`,
      topics: {}
    },
    items: [
      "ERP Systems (SAP MM/PP/SD, Oracle SCM)",
      "Advanced Planning Systems (SAP APO, IBP, Blue Yonder)",
      "Warehouse Management Systems (WMS)",
      "Transportation Management Systems (TMS)",
      "Inventory Optimization Tools",
      "Forecasting Tools (Forecast Pro, SAP IBP, Anaplan)",
      "Power BI / Tableau for Analytics",
      "Excel Advanced (Pivot, Solver, VBA)"
    ]
  },

  {
    title: "Analytics & Optimization",
    badge: "Data",
    content: {
      overview: `## What is it?\nSupply chain analytics uses mathematical modelling and algorithms to find optimal solutions to complex problems.\n\n## Why it matters\nOptimisation finds mathematically proven solutions — reducing costs in ways human intuition cannot achieve.\n\n## Key Concepts\n- Linear Programming: optimise subject to constraints\n- Network Optimisation: optimal facility locations\n- Simulation: model uncertainty risk-free\n- Routing Optimisation: TSP, VRP\n\n## Key Metrics / KPIs\n- Cost reduction achieved\n- Service level improvement\n- Network efficiency score`,
      topics: {}
    },
    items: [
      "Linear Programming (LP)",
      "Mixed Integer Programming (MIP)",
      "Network Optimization Models",
      "Simulation Models (Arena, AnyLogic)",
      "Cost-to-Serve Modeling",
      "Scenario Planning & Sensitivity Analysis",
      "Routing Optimization (TSP, VRP)",
      "Inventory Optimization Algorithms"
    ]
  },

  {
    title: "Modern Supply Chain",
    badge: "Digital",
    content: {
      overview: `## What is it?\nModern supply chain leverages AI, IoT, blockchain, digital twins, and robotics to create faster, smarter, more resilient supply chains.\n\n## Why it matters\nEarly adopters gain structural cost and service advantages very difficult to compete with.\n\n## Key Concepts\n- AI/ML: autonomous planning and demand sensing\n- Digital Twin: real-time virtual replica\n- IoT: end-to-end sensor visibility\n- Blockchain: immutable traceability\n\n## Key Metrics / KPIs\n- Automation rate %\n- Visibility coverage %\n- Scope 3 emissions reduction`,
      topics: {}
    },
    items: [
      "AI & Machine Learning in Supply Chain",
      "Digital Twins",
      "Control Towers & Real-Time Visibility",
      "IoT in Logistics",
      "Blockchain for Traceability",
      "Autonomous Planning Systems",
      "Robotics & Automation in Warehousing",
      "Sustainability & Green Supply Chain"
    ]
  },

  {
    title: "Industry Knowledge",
    badge: "Advanced",
    content: {
      overview: `## What is it?\nIndustry knowledge covers unique supply chain characteristics, challenges, and best practices across different sectors.\n\n## Why it matters\nEvery industry has different demand patterns, regulations, and customer expectations.\n\n## Key Concepts\n- FMCG: high volume, short shelf life, promotions\n- Pharma: cold chain, serialisation, compliance\n- Automotive: JIT, Tier networks, long lead times\n- E-commerce: same-day expectations, returns\n\n## Key Metrics / KPIs\n- Industry service level benchmarks\n- Regulatory compliance rate\n- Category fill rate`,
      topics: {}
    },
    items: [
      "Retail Supply Chain",
      "E-commerce Fulfillment",
      "Manufacturing Supply Chain",
      "Pharma & Cold Chain Logistics",
      "FMCG Supply Chain",
      "Automotive Supply Chain",
      "Global Trade Compliance",
      "Incoterms & Customs Documentation"
    ]
  },

  {
    title: "Capstone Projects",
    badge: "Advanced",
    content: {
      overview: `## What is it?\nCapstone projects are hands-on challenges integrating everything learned — building real supply chain solutions for your portfolio.\n\n## Why it matters\nEmployers hire for demonstrated skills — a portfolio of completed projects proves you can apply supply chain concepts to real problems.\n\n## Key Concepts\n- End-to-end thinking: demand through to delivery\n- Data-driven decisions: validate with real datasets\n- Tool proficiency: Python, SQL, Excel, Power BI\n- Storytelling: present findings to non-technical audiences\n\n## Key Metrics / KPIs\n- Project complexity and scope\n- Business impact quantified\n- Tool diversity demonstrated`,
      topics: {}
    },
    items: [
      "Build a Demand Forecasting Model",
      "Design a Replenishment Strategy for 100 SKUs",
      "Optimize a Transportation Network",
      "Create a Multi-Echelon Inventory Model",
      "Develop a Supplier Scorecard",
      "Build a Digital Twin for a Warehouse",
      "Analyze Cost-to-Serve for a Product Portfolio",
      "Automate Purchase Order Replenishment"
    ]
  }
];
