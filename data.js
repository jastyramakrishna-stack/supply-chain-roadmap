const roadmapData = [
  {
    title: "Supply Chain Foundations",
    badge: "Start Here",
    content: {
      overview: `## What is it?\nSupply Chain Management (SCM) is the coordination of all activities involved in sourcing, procurement, production, and delivery of products from raw materials to the end customer.\n\n## Why it matters\nA well-managed supply chain reduces costs, improves service levels, and creates competitive advantage. Companies like Amazon and Walmart have built entire business models around supply chain excellence.\n\n## Key Concepts\n- Material flow: physical movement of goods from supplier to customer\n- Information flow: orders, forecasts, and tracking data\n- Financial flow: payments, credit terms, and invoices\n- Bullwhip Effect: small demand changes amplified upstream\n- OTIF: On Time In Full — the gold standard KPI\n\n## Key Metrics / KPIs\n- Perfect Order Rate\n- Cash-to-Cash Cycle Time\n- OTIF (On Time In Full)\n- Inventory Turnover`,
      topics: {
        "What is Supply Chain Management": `## What is it?\nSCM coordinates the flow of goods, services, information, and money from raw material suppliers through manufacturers, distributors, and retailers to the end consumer.\n\n## How it works\nEvery product you buy has passed through a supply chain. A smartphone involves 200+ suppliers across 40+ countries before reaching your hands. SCM ensures all these moving parts are synchronised.\n\n## Key Concepts\n- Upstream: suppliers and raw materials\n- Downstream: distributors and end customers\n- Tier 1/2/3 suppliers: direct and indirect supply base\n- Push vs Pull: make-to-stock vs make-to-order\n\n## Real-World Example\nApple's supply chain coordinates 200+ suppliers across 43 countries, shipping 200M+ iPhones annually. Their tight supplier management and demand forecasting keeps inventory lean while meeting global launch-day demand.\n\n## Key Takeaway\nA great product with a poor supply chain will always lose to a good product with a great supply chain.`,

        "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)": `## What is it?\nKPIs (Key Performance Indicators) are measurable values that track how effectively a supply chain is achieving its objectives.\n\n## How it works\nKPIs are tracked weekly or monthly and compared against targets. When a KPI misses target, it triggers root cause analysis and corrective action.\n\n## Key Concepts\n- OTIF: % of orders delivered On Time and In Full\n- Fill Rate: % of demand fulfilled from available stock\n- Inventory Turns: Cost of Goods Sold ÷ Average Inventory\n- Perfect Order Rate: orders with zero errors end-to-end\n\n## Real-World Example\nWalmart demands 98%+ OTIF from suppliers. Missing this triggers financial penalties and risks losing shelf space — making OTIF a critical operational metric for any FMCG supplier.\n\n## Key Takeaway\nWhat gets measured gets managed — the right KPIs align the entire supply chain toward customer service and cost efficiency.`
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
      overview: `## What is it?\nCore planning processes are the structured frameworks used to align supply with demand across the business — from high-level strategic planning down to day-to-day execution.\n\n## Why it matters\nWithout structured planning, businesses react to problems instead of preventing them. S&OP and IBP connect commercial ambition with operational reality.\n\n## Key Concepts\n- S&OP: Sales & Operations Planning — monthly balancing of demand and supply\n- IBP: Integrated Business Planning — S&OP plus financial reconciliation\n- MRP: Material Requirements Planning — what to make, buy, and when\n- MPS: Master Production Schedule — detailed production plan\n\n## Key Metrics / KPIs\n- Forecast Accuracy (MAPE)\n- Plan Attainment %\n- Inventory vs Target DOS\n- Capacity Utilisation %`,
      topics: {
        "Sales & Operations Planning (S&OP)": `## What is it?\nS&OP is a monthly business planning process that balances demand, supply, inventory, and financial plans to create one agreed operational plan for the business.\n\n## How it works\nS&OP runs in 5 steps: (1) Data gathering, (2) Demand review, (3) Supply review, (4) Pre-S&OP reconciliation, (5) Executive S&OP sign-off. Each step builds on the last.\n\n## Key Concepts\n- Consensus demand plan: one agreed forecast across sales, marketing, finance\n- Unconstrained vs constrained plan: what demand wants vs what supply can deliver\n- Gap analysis: identifying where supply cannot meet demand\n- Rolling horizon: typically 18-24 month planning window\n\n## Real-World Example\nUnilever runs monthly S&OP across 190 countries. Their process connects 400+ factories with commercial teams, resolving supply gaps 8 weeks before they become customer service issues.\n\n## Key Takeaway\nS&OP replaces reactive firefighting with proactive decision-making — aligning the whole business around one plan.`,

        "Material Requirements Planning (MRP)": `## What is it?\nMRP is a system that calculates what materials are needed, in what quantities, and when — based on the production schedule and bill of materials.\n\n## How it works\nMRP takes the Master Production Schedule, explodes it through the Bill of Materials, checks current inventory, and generates purchase orders and production orders for every component needed.\n\n## Key Concepts\n- BOM: Bill of Materials — recipe of all components in a product\n- Lead time offsetting: ordering back from when material is needed\n- Lot sizing: EOQ, fixed quantity, period order quantity\n- Net requirements = Gross requirements - On hand - On order\n\n## Real-World Example\nToyota uses MRP integrated with their Just-In-Time system. Components arrive within a 2-hour window of when they're needed on the production line — eliminating warehouse space while maintaining zero stockouts.\n\n## Key Takeaway\nMRP is the engine that translates a sales plan into purchase orders — without it, manufacturing runs on guesswork.`
      }
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
      overview: `## What is it?\nDemand forecasting is the process of estimating future customer demand using historical data, statistical methods, and market intelligence.\n\n## Why it matters\nAccurate forecasts reduce excess inventory, prevent stockouts, and improve customer service — directly impacting working capital and revenue.\n\n## Key Concepts\n- Qualitative: expert judgment, market research, Delphi method\n- Quantitative: statistical models using historical data\n- MAPE: Mean Absolute Percentage Error — primary accuracy metric\n- Bias: systematic over or under-forecasting\n- ABC/XYZ: segmenting items by value and demand variability\n\n## Key Metrics / KPIs\n- MAPE (Mean Absolute % Error)\n- Forecast Bias\n- WAPE (Weighted Absolute % Error)\n- Forecast Value Added (FVA)`,
      topics: {
        "Forecast Accuracy Metrics (MAPE, WAPE, Bias)": `## What is it?\nForecast accuracy metrics measure how close predictions are to actual demand — essential for improving forecasting processes and holding teams accountable.\n\n## How it works\nMetrics are calculated at SKU, category, and total level. They're reviewed monthly in the demand review meeting and used to identify where forecasting is weakest.\n\n## Key Concepts\n- MAPE = mean(|Actual - Forecast| / Actual) × 100\n- WAPE = sum(|Actual - Forecast|) / sum(Actual) × 100\n- Bias = mean(Forecast - Actual) — positive = over-forecast\n- MAD = Mean Absolute Deviation (in units, not %)\n\n## Real-World Example\nA CPG company discovered its sales team inflated forecasts by 18% on average to ensure supply availability. This created £4M of excess stock annually — fixed by separating the statistical forecast from the commercial input.\n\n## Key Takeaway\nForecast accuracy without bias measurement is incomplete — a forecast can be accurate on average but consistently wrong in one direction.`,

        "Demand Segmentation (ABC/XYZ)": `## What is it?\nABC/XYZ is a two-dimensional segmentation framework that classifies products by revenue contribution (ABC) and demand variability (XYZ) to apply differentiated planning strategies.\n\n## How it works\nABC ranks by revenue: A = top 80%, B = next 15%, C = bottom 5%. XYZ ranks by coefficient of variation: X = stable (CV<0.5), Y = variable (0.5-1.0), Z = erratic (CV>1.0).\n\n## Key Concepts\n- AX items: high value, stable — lean safety stock, frequent replenishment\n- AZ items: high value, erratic — higher safety stock, close monitoring\n- CZ items: low value, erratic — candidates for delisting\n- CV = Standard Deviation / Mean demand\n\n## Real-World Example\nA grocery retailer with 50,000 SKUs used ABC/XYZ to identify that 200 AX items drove 60% of revenue with predictable demand. Focusing forecasting effort on these 0.4% of SKUs improved overall service level by 3%.\n\n## Key Takeaway\nNot all SKUs deserve equal planning attention — ABC/XYZ tells you where to focus your time and safety stock investment.`
      }
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
      overview: `## What is it?\nForecasting models are mathematical and statistical techniques used to predict future demand from historical patterns, trends, and external signals.\n\n## Why it matters\nThe right model for the right product type can dramatically improve forecast accuracy — reducing both stockouts and excess inventory simultaneously.\n\n## Key Concepts\n- Moving Average: simple average of last N periods\n- Exponential Smoothing: weighted average favouring recent data\n- ARIMA: captures autocorrelation and trend in time series\n- ML models: XGBoost, Random Forest for complex patterns\n- Deep Learning: LSTM for sequential temporal patterns\n\n## Key Metrics / KPIs\n- MAPE by model type\n- Forecast Value Added vs naive benchmark\n- Model stability over time\n- Computational cost vs accuracy trade-off`,
      topics: {
        "ARIMA / SARIMA Models": `## What is it?\nARIMA (AutoRegressive Integrated Moving Average) is a statistical model that forecasts future values using a combination of past values, past errors, and differencing to handle trends.\n\n## How it works\nARIMA has three parameters: p (autoregressive order), d (differencing for stationarity), q (moving average order). SARIMA adds seasonal components (P, D, Q, s) for seasonal data.\n\n## Key Concepts\n- Stationarity: mean and variance must be constant over time\n- Differencing: subtracting consecutive values to remove trend\n- ACF/PACF plots: used to identify p and q parameters\n- AIC/BIC: information criteria for model selection\n\n## Real-World Example\nA beverage company used SARIMA(1,1,1)(1,1,0,52) to forecast weekly sales of a carbonated drink with strong summer seasonality. Forecast accuracy improved from 28% MAPE to 11% MAPE vs the previous moving average model.\n\n## Key Takeaway\nARIMA is the gold standard for univariate time series with clear trend and seasonality — but requires sufficient history and stable patterns to perform well.`,

        "Machine Learning Forecasting (XGBoost, Random Forest)": `## What is it?\nMachine learning forecasting uses algorithms that learn complex, non-linear relationships between demand and multiple input features — going far beyond what classical statistical models can capture.\n\n## How it works\nFeatures like price, promotions, weather, competitor activity, and economic indicators are fed alongside historical demand. The model learns which combinations of features drive demand changes.\n\n## Key Concepts\n- XGBoost: gradient boosted trees — fast, accurate, handles missing data\n- Random Forest: ensemble of decision trees — robust to outliers\n- Feature engineering: lag features, rolling averages, calendar effects\n- Cross-validation: time-series split to avoid data leakage\n\n## Real-World Example\nWalmart uses gradient-boosted trees trained on 400+ features including weather, local events, competitor promotions, and social trends to forecast demand for 100M+ SKU-location combinations weekly — achieving 15% better accuracy than statistical baselines.\n\n## Key Takeaway\nML forecasting shines when demand is driven by many external factors — but requires clean data, careful feature engineering, and ongoing model maintenance.`
      }
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
      overview: `## What is it?\nForecasting parameters are the inputs and settings that configure how a forecasting model generates predictions — getting these right is as important as choosing the right model.\n\n## Why it matters\nWrong parameters produce systematically biased forecasts. A correct model with wrong inputs will consistently over or under-predict, leading to stock imbalances across thousands of SKUs.\n\n## Key Concepts\n- History length: how many periods of data to include\n- Smoothing factors: how much weight to give recent vs old data\n- Lead time: supplier delivery time affects when to order\n- Service level: target fill rate determines safety stock multiplier\n- MOQ: minimum order quantity constrains replenishment\n\n## Key Metrics / KPIs\n- Parameter optimisation frequency\n- Forecast accuracy by parameter set\n- Safety stock investment vs service level achieved`,
      topics: {
        "Safety Stock Parameters": `## What is it?\nSafety stock parameters define how much buffer inventory to hold to protect against demand variability and supply uncertainty.\n\n## How it works\nSafety Stock = Z × σ_demand × √Lead Time. The Z-score is set by the target service level (e.g. 95% = 1.65, 99% = 2.33). Higher service levels require exponentially more safety stock.\n\n## Key Concepts\n- Z-score: statistical multiplier based on service level target\n- Demand standard deviation (σ): variability of daily/weekly demand\n- Lead time variability: uncertainty in supplier delivery time\n- Review period: how often inventory is checked and ordered\n\n## Real-World Example\nA pharma distributor targeting 99.5% service level (Z=2.58) on critical medicines with σ=50 units/day and 4-day lead time holds 2.58 × 50 × √4 = 258 units of safety stock per SKU.\n\n## Key Takeaway\nSafety stock is insurance — the right level balances service level targets against the working capital cost of holding excess inventory.`,

        "Lead Time & Lead Time Variability": `## What is it?\nLead time is the time between placing a purchase order and receiving the goods. Lead time variability is the uncertainty around that average — both directly drive safety stock requirements.\n\n## How it works\nIf average lead time is 10 days but it ranges from 7-14 days, the variability (standard deviation) must be included in safety stock calculations. Higher variability = more buffer needed.\n\n## Key Concepts\n- Supplier lead time: time from PO to warehouse receipt\n- Manufacturing lead time: time to produce the goods\n- Total replenishment lead time: combined procurement + manufacturing\n- Lead time variability: σ of lead time across historical orders\n\n## Real-World Example\nA retailer importing from Asia had average lead times of 45 days with ±12 days variability due to port congestion. Factoring in variability increased their safety stock by 40% — but reduced stockouts by 85%.\n\n## Key Takeaway\nPlanning to average lead time is dangerous — it's the variability that creates stockouts, not the average.`
      }
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
      overview: `## What is it?\nReplenishment planning determines when and how much to order to maintain optimal inventory levels — balancing service level targets against inventory holding costs.\n\n## Why it matters\nPoor replenishment leads to either stockouts (lost sales, unhappy customers) or overstock (tied-up capital, write-offs). Getting it right is the core operational challenge of supply chain.\n\n## Key Concepts\n- ROP: Reorder Point — inventory level that triggers an order\n- EOQ: Economic Order Quantity — optimal order size\n- Safety Stock: buffer against demand and supply variability\n- Min-Max: simple upper/lower inventory boundary system\n- MEIO: Multi-Echelon Inventory Optimisation across the network\n\n## Key Metrics / KPIs\n- Days of Supply (DOS)\n- Fill Rate & Service Level %\n- Inventory Turns\n- Stock Cover vs Target`,
      topics: {
        "Economic Order Quantity (EOQ)": `## What is it?\nEOQ is the order quantity that minimises the total cost of ordering and holding inventory — finding the sweet spot between ordering too often (high order cost) and ordering too much (high holding cost).\n\n## How it works\nEOQ = √(2 × D × S ÷ H) where D = annual demand, S = cost per order, H = annual holding cost per unit. As order size increases, holding cost rises but ordering frequency (and cost) falls.\n\n## Key Concepts\n- Ordering cost: admin, freight, receiving cost per order\n- Holding cost: typically 20-30% of unit value per year\n- Trade-off point: EOQ is where ordering cost = holding cost\n- Assumptions: constant demand, fixed costs, no stockouts\n\n## Real-World Example\nA distributor was ordering 500 units of a fastener at a time. EOQ analysis revealed 200 units was optimal — reducing annual holding cost by £12,000 with no impact on service levels or order frequency costs.\n\n## Key Takeaway\nEOQ is simple but powerful — even approximate inputs give a far better answer than gut-feel ordering quantities.`,

        "Safety Stock Calculation": `## What is it?\nSafety stock is buffer inventory held to protect against unexpected demand spikes and supply delays — the difference between a stockout and a satisfied customer.\n\n## How it works\nSafety Stock = Z × √(Lead Time × σ²_demand + Demand² × σ²_LT). For simpler calculation: SS = Z × σ_demand × √Lead Time when lead time variability is low.\n\n## Key Concepts\n- Service level → Z-score: 90%=1.28, 95%=1.65, 99%=2.33, 99.9%=3.09\n- Demand variability (σ): standard deviation of daily demand\n- Lead time variability: standard deviation of replenishment lead time\n- Cycle stock vs safety stock: average order ÷ 2 vs buffer\n\n## Real-World Example\nAmazon targets 99.9% availability on Prime items. For a product with σ=20 units/day and 2-day lead time: SS = 3.09 × 20 × √2 = 87 units. This tiny buffer prevents stockouts on millions of daily transactions.\n\n## Key Takeaway\nSafety stock is not waste — it's the calculated cost of the service level promise you've made to your customers.`
      }
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
      overview: `## What is it?\nSupply chain tools and systems are the software platforms that enable planning, execution, visibility, and analytics across the end-to-end supply chain.\n\n## Why it matters\nManual spreadsheet-based planning breaks down at scale. Modern systems process millions of data points to generate optimal plans in minutes — impossible by hand.\n\n## Key Concepts\n- ERP: Enterprise Resource Planning — backbone system (SAP, Oracle)\n- APS: Advanced Planning System — optimised supply/demand planning\n- WMS: Warehouse Management System — warehouse operations\n- TMS: Transportation Management System — freight and routing\n- BI Tools: Power BI, Tableau — analytics and dashboards\n\n## Key Metrics / KPIs\n- System adoption rate\n- Data accuracy %\n- Planning cycle time\n- User productivity improvement`,
      topics: {
        "ERP Systems (SAP MM/PP/SD, Oracle SCM)": `## What is it?\nERP (Enterprise Resource Planning) systems are integrated software platforms that manage all core business processes — finance, procurement, production, sales, and logistics — in a single system.\n\n## How it works\nAll transactions flow through the ERP in real time. A sales order in SD triggers inventory check in MM, creates a production order in PP, and generates a delivery in logistics — all automatically.\n\n## Key Concepts\n- SAP MM: Materials Management — purchasing and inventory\n- SAP PP: Production Planning — MRP and shop floor\n- SAP SD: Sales & Distribution — order management\n- Master data: material master, vendor master, BOM — foundation of everything\n\n## Real-World Example\nNestle's SAP implementation across 80 countries standardised 900 business processes and reduced the number of ERP systems from 80 to 1 — enabling global supply chain visibility and shared services.\n\n## Key Takeaway\nAn ERP is only as good as its master data — garbage in, garbage out applies more here than anywhere else in supply chain.`,

        "Advanced Planning Systems (SAP APO, IBP, Blue Yonder)": `## What is it?\nAdvanced Planning Systems (APS) sit on top of ERP to provide sophisticated demand forecasting, supply planning, and optimisation capabilities that standard ERP cannot deliver.\n\n## How it works\nAPS pulls data from ERP, runs complex optimisation algorithms across the full supply network, and pushes back optimised plans — covering demand sensing, inventory optimisation, and production scheduling.\n\n## Key Concepts\n- SAP IBP: Integrated Business Planning — demand, supply, S&OP\n- Blue Yonder (JDA): demand and fulfilment planning\n- Kinaxis RapidResponse: concurrent planning and scenario analysis\n- O9 Solutions: connected planning platform\n\n## Real-World Example\nP&G implemented SAP APO across their global supply chain, reducing planning cycle time from 3 weeks to 3 days and improving forecast accuracy by 20% — freeing planners from data crunching to focus on exception management.\n\n## Key Takeaway\nAPS transforms supply chain planning from a manual, spreadsheet-driven process into an automated, optimised engine — but requires clean ERP data to function effectively.`
      }
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
      overview: `## What is it?\nSupply chain analytics and optimisation uses mathematical modelling, data science, and algorithms to find the best possible solutions to complex supply chain problems.\n\n## Why it matters\nOptimisation can find solutions that are mathematically proven to be optimal — reducing costs, improving service, and eliminating waste in ways that human intuition alone cannot achieve.\n\n## Key Concepts\n- Linear Programming: optimise an objective subject to constraints\n- Network Optimisation: optimal facility locations and flows\n- Simulation: model uncertainty and test scenarios\n- Routing Optimisation: TSP, VRP for delivery efficiency\n- Cost-to-Serve: true cost of serving each customer\n\n## Key Metrics / KPIs\n- Cost reduction achieved\n- Service level improvement\n- Network efficiency score\n- Routing cost per delivery`,
      topics: {
        "Linear Programming (LP)": `## What is it?\nLinear Programming is a mathematical optimisation technique that finds the best outcome (maximum profit or minimum cost) subject to a set of linear constraints.\n\n## How it works\nDefine an objective function (minimise cost), decision variables (how much to produce/ship), and constraints (capacity, demand, budget). The LP solver finds the optimal combination mathematically.\n\n## Key Concepts\n- Objective function: what you're minimising or maximising\n- Decision variables: what you're deciding (quantities, flows)\n- Constraints: limits on resources, capacity, demand\n- Feasible region: all solutions that satisfy constraints\n- Simplex method: algorithm that finds the optimal vertex\n\n## Real-World Example\nFedEx uses LP to optimise package routing across their 650+ aircraft daily. The model assigns packages to flights minimising total cost while meeting delivery time guarantees — processing 15M+ packages per day.\n\n## Key Takeaway\nLP turns complex multi-variable decisions into mathematically optimal solutions — essential for any supply chain problem with clear objectives and measurable constraints.`,

        "Routing Optimization (TSP, VRP)": `## What is it?\nRouting optimisation finds the most efficient routes for vehicles to deliver goods — minimising distance, time, cost, or emissions while meeting customer delivery windows.\n\n## How it works\nTSP (Travelling Salesman Problem) finds the shortest route visiting all locations once. VRP (Vehicle Routing Problem) extends this to multiple vehicles with capacity and time window constraints.\n\n## Key Concepts\n- TSP: single vehicle, visit all nodes, return to start\n- CVRP: Capacitated VRP — each vehicle has weight/volume limit\n- VRPTW: VRP with Time Windows — customers have delivery slots\n- Heuristics: Clarke-Wright savings, nearest neighbour algorithms\n\n## Real-World Example\nUPS's ORION routing system saves 100M miles annually by optimising routes for 55,000 drivers. The system avoids left turns where possible — saving 10M gallons of fuel and 100,000 metric tons of CO2 per year.\n\n## Key Takeaway\nRouting optimisation is one of the highest-ROI applications in logistics — even a 5% improvement in route efficiency compounds across thousands of vehicles and millions of deliveries.`
      }
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
      overview: `## What is it?\nModern supply chain leverages emerging technologies — AI, IoT, blockchain, digital twins, and robotics — to create faster, smarter, more resilient, and more sustainable supply chains.\n\n## Why it matters\nThe supply chains of 2030 will look nothing like those of 2010. Companies that adopt these technologies early will have structural cost and service advantages that are very difficult to compete with.\n\n## Key Concepts\n- AI/ML: demand sensing, autonomous planning, predictive maintenance\n- Digital Twin: real-time virtual replica for simulation\n- IoT: end-to-end visibility through connected sensors\n- Blockchain: immutable traceability across the supply network\n- Robotics: automated picking, packing, and movement in warehouses\n\n## Key Metrics / KPIs\n- Automation rate %\n- Visibility coverage %\n- Digital twin simulation accuracy\n- Sustainability: Scope 3 emissions reduction`,
      topics: {
        "AI & Machine Learning in Supply Chain": `## What is it?\nAI and ML in supply chain encompasses the use of algorithms that learn from data to automate decisions, improve forecasts, detect anomalies, and optimise operations across the end-to-end supply chain.\n\n## How it works\nML models are trained on historical supply chain data — demand history, supplier performance, logistics costs, weather — and continuously updated as new data arrives. They generate predictions and recommendations that planners act on.\n\n## Key Concepts\n- Demand sensing: using real-time signals (POS, social, weather) to update forecasts\n- Autonomous replenishment: ML-triggered purchase orders without human intervention\n- Supplier risk prediction: identifying at-risk suppliers before disruption\n- Dynamic pricing: real-time price optimisation based on demand signals\n\n## Real-World Example\nAmazon's anticipatory shipping model uses ML to pre-position products in regional fulfilment centres before orders are placed — reducing last-mile delivery time by up to 40% and cutting logistics costs significantly.\n\n## Key Takeaway\nAI doesn't replace supply chain planners — it eliminates routine decisions so planners can focus on exceptions, strategy, and the 20% of decisions that drive 80% of value.`,

        "Digital Twins": `## What is it?\nA digital twin is a real-time virtual replica of the physical supply chain — used for simulation, scenario planning, disruption response, and continuous optimisation without touching the live operation.\n\n## How it works\nSensors, ERP data, and IoT feeds update the digital model in real time. Planners run what-if scenarios — port closure, supplier failure, demand spike — and see the full downstream impact before committing to a response.\n\n## Key Concepts\n- Real-time synchronisation: model reflects actual state at all times\n- Scenario simulation: test decisions before implementing\n- Prescriptive analytics: model recommends optimal response\n- Network modelling: full supply chain from supplier to customer\n\n## Real-World Example\nUnilever built a digital twin of its global supply chain in 2022. When a key port closed, it ran 1,000 rerouting scenarios in minutes and selected the optimal alternative — saving an estimated $50M in disruption costs compared to manual decision-making.\n\n## Key Takeaway\nA digital twin turns supply chain management from reactive to proactive — you can see the future impact of today's decisions before you make them.`
      }
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
      overview: `## What is it?\nIndustry knowledge covers the unique supply chain characteristics, challenges, and best practices across different sectors — from FMCG and retail to pharma, automotive, and e-commerce.\n\n## Why it matters\nEvery industry has different demand patterns, regulatory requirements, lead times, and customer expectations. A supply chain professional who understands their industry context is far more effective than one applying generic frameworks.\n\n## Key Concepts\n- FMCG: high volume, short shelf life, promotional volatility\n- Pharma: cold chain, serialisation, regulatory compliance\n- Automotive: JIT, Tier 1/2/3 supplier networks, long lead times\n- E-commerce: same-day delivery expectations, high return rates\n- Retail: seasonal demand, space constraints, planogram compliance\n\n## Key Metrics / KPIs\n- Industry-specific service level benchmarks\n- Regulatory compliance rate\n- Category fill rate\n- Time-to-market for new products`,
      topics: {
        "Pharma & Cold Chain Logistics": `## What is it?\nPharma supply chain covers the specialised storage, handling, and distribution of pharmaceutical products — many of which require strict temperature control (cold chain) and full regulatory traceability.\n\n## How it works\nTemperature-sensitive products (vaccines, biologics) must be maintained between 2-8°C from manufacturer to patient. Every temperature excursion must be documented and assessed for product impact.\n\n## Key Concepts\n- Cold chain: maintaining required temperature throughout the supply chain\n- Serialisation: unique identifier on every pack for track-and-trace\n- GDP: Good Distribution Practice — regulatory standard for pharma logistics\n- Quarantine management: holding stock pending quality release\n\n## Real-World Example\nPfizer's COVID-19 vaccine required storage at -70°C — colder than Antarctica. They developed custom thermal shippers and a global cold chain network in under 12 months, delivering 3 billion doses across 170+ countries.\n\n## Key Takeaway\nIn pharma supply chain, a quality failure is not a commercial problem — it's a patient safety issue, making compliance and traceability non-negotiable.`,

        "E-commerce Fulfillment": `## What is it?\nE-commerce fulfillment covers the end-to-end process of receiving, storing, picking, packing, shipping, and returning online orders — optimised for speed, cost, and customer experience.\n\n## How it works\nWhen a customer places an order, the WMS identifies the optimal warehouse location, directs a picker (human or robot) to retrieve the item, packs it, generates a shipping label, and hands off to a carrier — all within hours.\n\n## Key Concepts\n- Same-day / next-day: the new baseline customer expectation\n- Micro-fulfilment centres: small urban warehouses for fast last-mile\n- Returns management: 20-30% return rates in fashion e-commerce\n- Click & collect: store as fulfilment node\n\n## Real-World Example\nAmazon's fulfilment network processes 1.6M+ orders per day using 750,000+ robots across 1,000+ fulfilment centres. Their Prime promise of 1-2 day delivery is only possible through pre-positioning inventory based on ML demand predictions.\n\n## Key Takeaway\nE-commerce fulfilment is won or lost on speed and accuracy — the last mile is the most expensive and most visible part of the customer experience.`
      }
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
      overview: `## What is it?\nCapstone projects are hands-on applied challenges that integrate everything learned across the roadmap — building real supply chain solutions from scratch.\n\n## Why it matters\nEmployers hire for demonstrated skills, not just knowledge. A portfolio of completed capstone projects proves you can apply supply chain concepts to real problems — the difference between a candidate and a practitioner.\n\n## Key Concepts\n- End-to-end thinking: connecting demand through to supply and delivery\n- Data-driven decisions: using real datasets to validate recommendations\n- Tool proficiency: Python, SQL, Excel, Power BI in a supply chain context\n- Storytelling: presenting findings to a non-technical audience\n\n## Key Metrics / KPIs\n- Project complexity and scope\n- Business impact quantified (£ savings, % improvement)\n- Tool and technique diversity\n- Presentation quality`,
      topics: {
        "Build a Demand Forecasting Model": `## What is it?\nBuild an end-to-end demand forecasting model — from raw data cleaning through model selection, training, validation, and presenting results with accuracy metrics and business recommendations.\n\n## How it works\nStart with a real retail or supply chain dataset (Kaggle has several). Clean the data, explore demand patterns, test multiple models (MA, Exponential Smoothing, ARIMA, XGBoost), compare accuracy, and present the best approach.\n\n## Key Concepts\n- Data cleaning: handling missing values, outliers, and data gaps\n- Train/test split: time-series cross-validation approach\n- Model comparison: MAPE, MASE, bias across model types\n- Feature engineering: lag features, rolling averages, calendar effects\n\n## Real-World Example\nM5 Competition (Kaggle, 2020): 5,000+ data scientists forecasted Walmart sales across 42,840 products and 10 stores over 28 days. Winners used LightGBM with extensive feature engineering — now a benchmark dataset for supply chain ML.\n\n## Key Takeaway\nA completed forecasting model with documented methodology and results is one of the most compelling portfolio pieces a supply chain analyst can present.`,

        "Design a Replenishment Strategy for 100 SKUs": `## What is it?\nDesign and implement a complete replenishment strategy for a portfolio of 100 SKUs — covering segmentation, safety stock calculation, reorder points, and order quantities.\n\n## How it works\nSegment SKUs using ABC/XYZ. For each segment, calculate safety stock using demand variability and lead time data. Set reorder points and EOQ. Simulate the strategy and measure service level vs inventory investment.\n\n## Key Concepts\n- ABC/XYZ segmentation: differentiated policies by value and variability\n- Safety stock formula: Z × σ × √LT for each SKU\n- ROP = Average demand × Lead time + Safety stock\n- EOQ calculation for each segment\n\n## Real-World Example\nA wholesaler with 8,000 SKUs applied this approach and reduced safety stock investment by 22% while improving service level from 94% to 97.5% — by reallocating buffer from low-value stable items to high-value erratic ones.\n\n## Key Takeaway\nA rigorous replenishment strategy built on data — not gut feel — is one of the fastest ways to simultaneously improve service and reduce working capital.`
      }
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
