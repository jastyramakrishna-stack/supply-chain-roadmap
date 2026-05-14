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
      topics: {
        "Plan → Source → Make → Deliver → Return": `## What is it?
The SCOR model defines five universal supply chain processes — Plan, Source, Make, Deliver, Return — providing a standard framework for describing, benchmarking, and improving any supply chain.

## Why it matters
Cisco used SCOR to redesign their supply chain after a $2.2B inventory write-down, cutting supply chain costs by $500M annually and improving OTIF from 70% to 95%.

## Key takeaway
SCOR gives every team a common language — turning vague improvement ambitions into specific, measurable process changes.`,

        "Sales & Operations Planning (S&OP)": `## What is it?
S&OP is a monthly business planning process balancing demand, supply, inventory, and financial plans — producing one agreed operational plan that drives all decisions across the business.

## Why it matters
Unilever runs S&OP across 190 countries, resolving supply gaps 8 weeks before they become customer service failures and avoiding £200M+ of annual disruption cost.

## Key takeaway
S&OP replaces reactive firefighting with proactive decision-making — it is the heartbeat of a well-run supply chain.`,

        "Integrated Business Planning (IBP)": `## What is it?
IBP extends S&OP by fully integrating financial planning, strategic initiatives, and portfolio management — connecting the supply plan directly to the P&L and balance sheet.

## Why it matters
GSK implemented IBP across 47 manufacturing sites, reducing working capital by £400M and improving forecast accuracy from 60% to 85% MAPE.

## Key takeaway
IBP elevates supply chain planning from an operational activity to a strategic business process that drives financial performance.`,

        "Master Production Scheduling (MPS)": `## What is it?
The MPS specifies exactly what to produce, in what quantities, and when — translating the S&OP into a feasible production programme that respects capacity and material constraints.

## Why it matters
Boeing's MPS for the 737 MAX coordinates 367 major suppliers and 600,000+ parts — today's schedule drives purchase orders for components assembled six months later.

## Key takeaway
The MPS is the bridge between commercial ambition and manufacturing reality — without it, customer commitments are made without checking if they can be kept.`,

        "Material Requirements Planning (MRP)": `## What is it?
MRP calculates what materials are needed, in what quantities, and when — by exploding the production schedule through the Bill of Materials and netting off current inventory and open orders.

## Why it matters
Toyota's MRP system is so precise that components arrive at the assembly line within a 2-hour window of when they're needed — eliminating on-site warehousing and saving billions in inventory costs.

## Key takeaway
MRP is the engine that translates a sales plan into purchase orders — without it, procurement and production run on guesswork.`,

        "Capacity Planning": `## What is it?
Capacity planning ensures that manufacturing, warehousing, and logistics resources are sufficient to meet the production plan — identifying bottlenecks before they cause missed deliveries.

## Why it matters
During the 2021 chip shortage, TSMC's capacity allocation decisions determined which entire industries could build products — making their capacity plan one of the most consequential in global supply chain history.

## Key takeaway
Capacity planning is the reality check of supply chain — where optimistic sales plans meet the hard constraints of machines, people, and time.`,

        "Order Management & Fulfillment": `## What is it?
Order management covers the end-to-end process from receiving a customer order to delivery — including order capture, stock allocation, picking, packing, shipping, and tracking.

## Why it matters
Amazon processes 1.6M+ orders per day with 99.9%+ accuracy, automatically selecting the optimal fulfilment centre, carrier, and route for each order while guaranteeing Prime delivery windows.

## Key takeaway
Order management is where supply chain performance becomes visible to the customer — every failure directly impacts satisfaction and loyalty.`,

        "Supplier Relationship Management": `## What is it?
SRM is the systematic approach to segmenting, evaluating, developing, and managing suppliers — going beyond transactional purchasing to strategic partnership with key supply base members.

## Why it matters
Apple's SRM team works with TSMC 3–5 years ahead of product launches, pre-paying billions in capacity and co-investing in equipment — creating a relationship so deep TSMC prioritises Apple above all others.

## Key takeaway
The best supply chains treat key suppliers as an extension of their own organisation — investing in the relationship creates innovation and resilience that pure transactional buying never can.`
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
      overview: `## What is it?\nDemand forecasting estimates future customer demand using historical data, statistical methods, and market intelligence.\n\n## Why it matters\nAccurate forecasts reduce excess inventory, prevent stockouts, and improve customer service.\n\n## Key Concepts\n- Qualitative: expert judgment and market research\n- Quantitative: statistical models from historical data\n- MAPE: Mean Absolute Percentage Error\n- Bias: systematic over or under-forecasting\n\n## Key Metrics / KPIs\n- MAPE\n- Forecast Bias\n- WAPE\n- Forecast Value Added (FVA)`,
      topics: {
        "Qualitative Forecasting (Judgmental, Delphi)": `## What is it?
Qualitative forecasting uses expert judgment, market research, and structured consensus methods (like Delphi) to predict demand when historical data is limited or unreliable — essential for new products and disrupted markets.

## Why it matters
When Apple launched the original iPhone in 2007, there was no historical data — Steve Jobs used expert judgment to target 10 million units in year one, validating the qualitative approach for genuinely novel products.

## Key takeaway
Qualitative methods are not inferior to statistical ones — for new products or market disruptions, expert judgment is often the only viable forecasting approach.`,

        "Time Series Forecasting": `## What is it?
Time series forecasting uses patterns in historical demand — trend, seasonality, and cyclicality — to project future values, assuming the past is a reliable guide to the future.

## Why it matters
Coca-Cola uses time series to predict consistent 30–40% summer volume uplifts, setting production targets 12 weeks in advance and eliminating both seasonal shortages and post-summer overstock.

## Key takeaway
Time series forecasting works best when history repeats — stable products with clear seasonal patterns are the ideal candidates.`,

        "Causal Forecasting": `## What is it?
Causal forecasting predicts demand by modelling its relationship with external drivers — price, promotions, weather, and economic indicators — quantifying exactly how each factor moves volume.

## Why it matters
Heineken's causal model shows a 1°C temperature increase drives +2.3% beer demand and a 10% promotional price cut drives +18% volume — enabling precise production planning around weather and events.

## Key takeaway
Causal forecasting turns external market intelligence into quantified planning inputs — the bridge between qualitative knowledge and planning system requirements.`,

        "Short-Term vs Long-Term Forecasting": `## What is it?
Short-term forecasts (days to weeks) drive operational decisions like replenishment and production scheduling, while long-term forecasts (months to years) inform strategic decisions like capacity investment and network design.

## Why it matters
Airbus forecasts aircraft demand 20 years ahead to justify billion-dollar factory investments, while managing 6-month rolling production schedules for current orders — two entirely different forecasting disciplines running in parallel.

## Key takeaway
Match your method to your decision horizon — long-term strategic forecasts used for short-term operational decisions are one of the most common and costly planning errors.`,

        "Forecast Accuracy Metrics (MAPE, WAPE, Bias)": `## What is it?
Forecast accuracy metrics — MAPE, WAPE, and Bias — measure how close demand predictions are to actual demand, providing the feedback loop needed to improve forecasting and identify systematic errors.

## Why it matters
A CPG company found sales team overrides worsened forecast accuracy by 8% MAPE, adding £4M of excess stock annually — only revealed when FVA (Forecast Value Added) analysis was applied to measure the impact of manual adjustments.

## Key takeaway
MAPE without bias is incomplete — a forecast can look accurate on average but consistently over-predict, invisibly inflating inventory across the entire network.`,

        "Forecast Error Analysis": `## What is it?
Forecast error analysis systematically investigates why forecasts deviate from actual demand — decomposing errors by product, customer, and time period to identify fixable root causes versus irreducible random noise.

## Why it matters
Unilever's tracking signal dashboard automatically escalates any SKU where cumulative error exceeds ±4 for two consecutive months — catching model drift before it creates stock imbalances across 50,000 SKUs.

## Key takeaway
The value of error analysis is not measuring failure — it's identifying systematic, fixable errors that once corrected permanently improve accuracy across thousands of SKUs.`,

        "Seasonality & Trend Identification": `## What is it?
Seasonality quantifies regular, predictable demand fluctuations within a year (e.g. Christmas, summer peaks), while trend captures the long-run growth or decline direction — both must be modelled to forecast accurately.

## Why it matters
Cadbury's Easter egg seasonality index reaches 8.2× average weekly demand in March/April, driving a January–February production run that builds 6 months of seasonal stock without post-Easter write-offs worth millions.

## Key takeaway
Failing to model seasonality correctly creates systematic stockouts at peak and costly overstock off-peak — the same preventable mistake repeated every single year.`,

        "Demand Segmentation (ABC/XYZ)": `## What is it?
ABC/XYZ classifies products by revenue contribution (A=top 80%, B=next 15%, C=bottom 5%) and demand variability (X=stable, Y=variable, Z=erratic) — enabling differentiated forecasting and inventory strategies per segment.

## Why it matters
A grocery retailer with 50,000 SKUs found that focusing forecasting effort on just 200 AX items (0.4% of the range) improved overall service level by 3% while reducing total inventory by £8M.

## Key takeaway
Not all SKUs deserve equal planning attention — ABC/XYZ tells you exactly where to invest your time, models, and safety stock budget for maximum return.`
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
