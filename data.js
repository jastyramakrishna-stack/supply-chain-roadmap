const roadmapData = [
  {
    title: "Supply Chain Foundations",
    badge: "Start Here",
    content: {
      overview: `## What is it?\nSupply Chain Management (SCM) coordinates all activities involved in sourcing, procurement, production, and delivery of products — from raw materials to the end customer.\n\n## Why it matters\nA well-managed supply chain reduces costs, improves service levels, and creates competitive advantage. Companies like Amazon and Walmart have built entire business models around supply chain excellence.\n\n## Key Concepts\n- Material flow: physical movement of goods from supplier to customer\n- Information flow: orders, forecasts, and tracking data\n- Financial flow: payments, credit terms, and invoices\n- Bullwhip Effect: small demand changes amplified upstream\n- OTIF: On Time In Full — the gold standard KPI\n\n## Key Metrics / KPIs\n- Perfect Order Rate\n- Cash-to-Cash Cycle Time\n- OTIF (On Time In Full)\n- Inventory Turnover`,
      topics: {
        "What is Supply Chain Management": `## What is it?\nSCM coordinates the flow of goods, services, information, and money from raw material suppliers through manufacturers, distributors, and retailers to the end consumer.\n\n## How it works\nEvery product you buy has passed through a supply chain. A smartphone involves 200+ suppliers across 40+ countries. SCM ensures all these moving parts are synchronised efficiently and cost-effectively.\n\n## Key Concepts\n- Upstream: suppliers and raw materials\n- Downstream: distributors and end customers\n- Tier 1/2/3 suppliers: direct and indirect supply base\n- Push vs Pull: make-to-stock vs make-to-order\n- Five flows: material, information, financial, risk, relationship\n\n## Real-World Example\nApple coordinates 200+ suppliers across 43 countries, shipping 200M+ iPhones annually. Their tight supplier management and demand forecasting keeps inventory lean while meeting global launch-day demand simultaneously across 60+ countries.\n\n## Key Takeaway\nA great product with a poor supply chain will always lose to a good product with a great supply chain.`,

        "Logistics & Distribution Basics": `## What is it?\nLogistics is the process of planning, implementing, and controlling the efficient movement and storage of goods from point of origin to point of consumption.\n\n## How it works\nLogistics covers inbound (raw materials to factory) and outbound (finished goods to customer) flows. Distribution networks determine how goods move from warehouses to end customers through various channels and modes.\n\n## Key Concepts\n- 3PL: Third-Party Logistics — outsourced logistics providers\n- Last mile: the final delivery leg to the customer — most expensive\n- Cross-docking: direct transfer from inbound to outbound without storage\n- Hub and spoke: central hub distributes to regional spokes\n- Distribution centre vs warehouse: flow-through vs storage operation\n\n## Real-World Example\nDHL operates in 220+ countries with 400,000 employees and 30,000 vehicles. Their hub-and-spoke model routes 1.6 billion shipments annually through 450+ air hubs — making them the world's most connected logistics network.\n\n## Key Takeaway\nLogistics is the last touchpoint with the customer — poor last-mile delivery destroys brand reputation regardless of how good the product is.`,

        "Procurement & Sourcing Fundamentals": `## What is it?\nProcurement is the process of finding, agreeing terms, and acquiring goods and services needed by the organisation. Sourcing is the strategic identification and selection of suppliers.\n\n## How it works\nProcurement follows a cycle: identify need → market analysis → supplier selection → negotiation → contracting → ordering → receiving → payment. Strategic sourcing adds category management and long-term supplier development.\n\n## Key Concepts\n- Category management: grouping spend by type for strategic leverage\n- TCO: Total Cost of Ownership — price plus all associated costs\n- RFQ/RFP: Request for Quotation / Proposal — formal supplier bids\n- Preferred supplier list: pre-approved vendors for faster procurement\n- Maverick spend: purchasing outside approved contracts — destroys savings\n\n## Real-World Example\nNestle spends $15B+ annually on direct materials. Their global procurement team uses category strategies across 12 commodity groups — cocoa, dairy, packaging — achieving 3-5% cost savings annually through volume leverage and supplier partnerships.\n\n## Key Takeaway\nProcurement is not just about buying cheaply — it's about securing supply, managing risk, and building supplier relationships that create long-term competitive advantage.`,

        "Inventory Management Essentials": `## What is it?\nInventory management is the process of ordering, storing, and controlling stock to ensure the right quantity of the right product is available at the right time and place.\n\n## How it works\nInventory sits at every node — raw materials, WIP, finished goods. Managing it involves balancing the cost of holding stock (capital, storage, obsolescence) against the cost of running out (lost sales, emergency freight).\n\n## Key Concepts\n- Cycle stock: average inventory from regular replenishment (order qty ÷ 2)\n- Safety stock: buffer against demand and supply variability\n- Dead stock: unsellable inventory — pure write-off risk\n- ABC analysis: classify items by value to prioritise management effort\n- FIFO / FEFO: First In First Out / First Expired First Out rotation rules\n\n## Real-World Example\nZara holds just 6 days of finished goods inventory vs the industry average of 52 days. By producing small batches and replenishing stores twice weekly based on actual sales, they avoid markdowns and achieve 85%+ full-price sell-through.\n\n## Key Takeaway\nInventory is the most visible symptom of supply chain health — too much means poor planning, too little means poor execution.`,

        "Demand Planning Basics": `## What is it?\nDemand planning forecasts customer demand to ensure products are available when and where needed — the starting point of every supply chain plan and the foundation of everything downstream.\n\n## How it works\nPlanners analyse historical sales, market intelligence, promotions, and seasonality to build a statistical baseline forecast. This is reviewed with commercial teams to incorporate market knowledge before being used to drive replenishment and production.\n\n## Key Concepts\n- Baseline forecast: statistical prediction from historical demand data\n- Uplift: additional demand from promotions, new listings, price changes\n- Consensus forecast: agreed single number after commercial review\n- Demand sensing: using real-time POS data to update short-horizon forecasts\n- Unconstrained demand: what customers want — before supply limits apply\n\n## Real-World Example\nP&G uses AI-powered demand sensing ingesting POS data from 500,000+ retail locations daily. This updates their 1-4 week forecast in real time, reducing short-term forecast error by 20% and preventing both stockouts and overproduction simultaneously.\n\n## Key Takeaway\nEverything in supply chain starts with the demand plan — an inaccurate forecast creates a cascade of wrong decisions across procurement, production, and logistics.`,

        "Replenishment Planning Basics": `## What is it?\nReplenishment planning determines when to order and how much to order to maintain optimal stock levels — translating the demand plan into purchase orders and production instructions.\n\n## How it works\nWhen inventory falls to the Reorder Point, a replenishment order is triggered. The order quantity is calculated based on demand rate, lead time, and service level targets. In modern ERP systems, this process is fully automated.\n\n## Key Concepts\n- Reorder Point (ROP): stock level that triggers a new order\n- Order quantity: EOQ, fixed quantity, or min-max boundaries\n- Lead time: time from order placement to receipt at warehouse\n- Review period: how often inventory levels are checked\n- Continuous vs periodic review: real-time vs scheduled replenishment check\n\n## Real-World Example\nAmazon's automated replenishment processes 400M+ SKU-location combinations daily, triggering purchase orders to 300,000+ suppliers without human intervention — maintaining 99.9% in-stock rates on Prime items across 1M+ products.\n\n## Key Takeaway\nGood replenishment is invisible — products always available without excess stock. Poor replenishment is very visible — empty shelves or overflowing warehouses.`,

        "Warehouse Operations Overview": `## What is it?\nWarehouse operations cover all activities involved in receiving, storing, picking, packing, and shipping goods — the physical execution hub where supply chain planning becomes customer reality.\n\n## How it works\nGoods arrive (inbound), are checked and put away in optimal locations (storage), then picked and packed when customer orders arrive (outbound). A WMS directs all activities to maximise efficiency and inventory accuracy.\n\n## Key Concepts\n- Slotting: placing fast-moving items closest to dispatch to minimise travel\n- Pick path optimisation: minimising picker travel time per order\n- Goods-to-person: automated systems bring items to stationary pickers\n- RFID / barcode scanning: real-time inventory tracking at item level\n- Cycle counting: continuous partial inventory counts vs disruptive annual stocktake\n\n## Real-World Example\nAmazon uses 750,000+ Kiva robots to bring shelves to human pickers — reducing picker travel time by 75%, increasing storage density by 50%, and enabling 24/7 operation processing 1.6M+ orders daily with 99.9% accuracy.\n\n## Key Takeaway\nWarehouse efficiency directly impacts customer experience — order accuracy, delivery speed, and fulfilment cost are all determined by how well the warehouse operation is designed and run.`,

        "Transportation Modes & Networks": `## What is it?\nTransportation modes are the methods of moving goods — road, rail, air, ocean, and pipeline. Network design determines which modes to use between which nodes to optimise cost, speed, and carbon footprint.\n\n## How it works\nMode selection depends on distance, urgency, volume, and cost. Ocean freight is cheapest for long distances but slowest (25-35 days Asia-Europe). Air freight is fastest but 5-10x more expensive. Road is most flexible for last-mile delivery.\n\n## Key Concepts\n- Intermodal: combining modes in one shipment (ship + rail + truck)\n- FTL vs LTL: Full Truck Load vs Less Than Truck Load\n- Freight forwarder: agent managing international shipping complexity\n- Incoterms: international rules defining who pays freight and bears risk\n- Carbon: air = 50x more CO2 than ocean per tonne-km — mode choice is a sustainability decision\n\n## Real-World Example\nIKEA ships 70% of goods by ocean freight, designing flat-pack furniture to maximise container utilisation (5x more items per container than assembled). This reduces their logistics cost to under 5% of product price — a structural cost advantage over competitors shipping assembled furniture.\n\n## Key Takeaway\nMode selection is a cost-service-sustainability trade-off — the cheapest mode that meets the delivery promise and emissions targets is always the right choice.`,

        "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)": `## What is it?\nKPIs are measurable values tracking how effectively a supply chain achieves its objectives across service, cost, cash, and quality dimensions — the scoreboard of supply chain performance.\n\n## How it works\nKPIs are tracked weekly or monthly against targets and industry benchmarks. When a KPI misses target it triggers root cause analysis and corrective action plans. Leading KPIs predict future performance; lagging KPIs measure what already happened.\n\n## Key Concepts\n- OTIF: % of orders delivered On Time and In Full — the customer service KPI\n- Fill Rate: % of demand fulfilled immediately from available stock\n- Inventory Turns: Cost of Goods Sold ÷ Average Inventory Value\n- Perfect Order Rate: % of orders with zero errors — on time, in full, damage-free, correct invoice\n- Cash-to-Cash Cycle: days from paying suppliers to receiving customer payment\n\n## Real-World Example\nWalmart demands 98%+ OTIF from all suppliers, with 3% invoice penalties for misses. For a £10M annual supplier, a 1% OTIF shortfall costs £30,000 in direct penalties — making supply chain performance a board-level commercial issue, not just an operational metric.\n\n## Key Takeaway\nWhat gets measured gets managed — the right KPIs align the entire supply chain toward customer service and cost efficiency simultaneously, and make performance everyone's shared responsibility.`
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
