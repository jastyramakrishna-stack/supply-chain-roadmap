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
      topics: {
        "Moving Average Models": `## What is it?
Moving Average models forecast demand by averaging actual demand over a fixed number of past periods — simple, transparent, and effective as a baseline for stable, low-variability products.

## Why it matters
A food manufacturer using 4-week SMA across 800 stable ambient SKUs achieves 91% forecast accuracy at SKU-week level — sufficient for fully automated replenishment without any planner intervention.

## Key takeaway
Moving averages are the benchmark every supply chain should beat — if a more complex method doesn't outperform a simple MA, the added complexity isn't justified.`,

        "Exponential Smoothing (SES, DES, TES)": `## What is it?
Exponential Smoothing gives exponentially decreasing weight to older data — SES for stable demand, DES (Holt's) adding trend correction, and TES (Holt-Winters) adding both trend and seasonal components.

## Why it matters
Amazon uses Holt-Winters as its baseline across millions of SKUs — for seasonal products like sunscreen, TES outperforms simple moving average by 15–20% MAPE by capturing both growth trend and summer uplift simultaneously.

## Key takeaway
Exponential smoothing is the workhorse of operational forecasting — fast to compute, easy to explain, and surprisingly accurate for the majority of stable to moderately seasonal products.`,

        "ARIMA / SARIMA Models": `## What is it?
ARIMA combines past values, differencing for stationarity, and past forecast errors to model time series; SARIMA extends this with seasonal parameters — the statistical gold standard for univariate demand forecasting.

## Why it matters
A beverage company switched from moving average to SARIMA on weekly sales data, improving forecast accuracy from 28% MAPE to 11% MAPE — reducing safety stock by 35% while maintaining the same service level.

## Key takeaway
ARIMA delivers when history has clear patterns — but requires sufficient data history, stable demand, and statistical expertise to implement and maintain correctly.`,

        "Croston's Method (Intermittent Demand)": `## What is it?
Croston's method separately forecasts the average demand size and the average interval between sales using exponential smoothing — specifically designed for intermittent demand with many zero-demand periods.

## Why it matters
An automotive parts distributor switching from moving average to Croston's on 60% of intermittent SKUs reduced forecast error by 40% and cut obsolete stock write-offs by £2M annually.

## Key takeaway
Using standard forecasting methods on intermittent demand produces wildly inaccurate results — Croston's is the specialist tool that makes slow-moving and spare-parts inventory manageable.`,

        "Regression Models": `## What is it?
Regression models demand as a function of external drivers — price, promotions, weather, economic indicators — quantifying exactly how much each variable moves demand volume.

## Why it matters
Heineken's regression model quantifies that a 10% promotional price cut drives +18% volume and a 1°C temperature increase drives +2.3% beer demand — enabling precise production planning around events and weather forecasts.

## Key takeaway
Regression turns qualitative market knowledge into quantified forecast inputs — the bridge between commercial intelligence and planning system requirements.`,

        "Machine Learning Forecasting (XGBoost, Random Forest)": `## What is it?
ML forecasting uses algorithms that learn complex, non-linear relationships between demand and hundreds of features — price, promotions, weather, competitor activity — capturing patterns that classical statistics cannot model.

## Why it matters
Walmart uses gradient-boosted trees trained on 400+ features for 100M+ SKU-location combinations weekly, achieving 15–20% better MAPE than statistical baselines — representing billions in reduced inventory and prevented lost sales.

## Key takeaway
ML forecasting excels when demand is driven by many interacting external factors — but requires clean data, skilled data scientists, and ongoing model maintenance to sustain its accuracy.`,

        "Deep Learning Forecasting (LSTM, Transformers)": `## What is it?
Deep learning forecasting uses neural networks — LSTMs and Temporal Fusion Transformers — to learn complex temporal patterns across long demand sequences that shallower models consistently miss.

## Why it matters
Amazon's DeepAR model, trained globally across all SKUs simultaneously, outperformed per-SKU statistical models by 25% MAPE — particularly on new products with limited history by learning patterns shared across similar products.

## Key takeaway
Deep learning delivers its greatest value at scale — millions of SKUs, rich feature data, and engineering capability to train and maintain neural models in production.`,

        "Probabilistic Forecasting": `## What is it?
Probabilistic forecasting produces a range of demand outcomes with associated probabilities — rather than a single point estimate — enabling risk-informed inventory decisions based on the full distribution of possible futures.

## Why it matters
Amazon holds inventory at the P85 demand quantile at each fulfilment centre — ensuring 85% probability of no stockout while consciously optimising the cost of the remaining 15% risk rather than blindly chasing a point forecast.

## Key takeaway
Probabilistic forecasting changes the question from "what will demand be?" to "what is the range of outcomes and what does each cost?" — enabling genuinely risk-informed inventory decisions.`
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
      overview: `## What is it?\nForecasting parameters are inputs and settings configuring how forecasting models generate predictions.\n\n## Why it matters\nWrong parameters produce systematically biased forecasts across thousands of SKUs.\n\n## Key Concepts\n- History length: periods of data to include\n- Service level: target fill rate drives safety stock\n- Lead time: affects replenishment timing\n- MOQ: minimum order quantity constrains options\n\n## Key Metrics / KPIs\n- Forecast accuracy by parameter segment\n- Safety stock investment vs service level\n- Working capital impact`,
      topics: {
        "Historical Demand Data": `## What is it?
Historical demand data is the foundation of all quantitative forecasting — the record of past customer demand used to identify patterns, fit models, and generate predictions for future periods.

## Why it matters
A retailer whose system was trained on shipment data (not POS sales) found it systematically under-forecast during stockout periods — switching to POS data improved MAPE by 12% across 3,000 SKUs overnight.

## Key takeaway
Garbage in, garbage out — data quality is the single biggest determinant of forecast accuracy, more important than any model complexity or algorithmic sophistication.`,

        "Lead Time & Lead Time Variability": `## What is it?
Lead time is the time between placing an order and receiving goods; lead time variability is the uncertainty around that average — both must be quantified to calculate accurate safety stock requirements.

## Why it matters
A UK retailer with 45-day average lead times and ±12 days variability found that factoring in variability (not just the average) increased safety stock by 40% — but reduced stockouts by 85% and eliminated £1.2M in annual emergency air freight costs.

## Key takeaway
It is the variability in lead time that creates stockouts, not the average — ignoring it is one of the most common and costly safety stock calculation errors.`,

        "Service Level Targets": `## What is it?
Service level targets define the probability of fulfilling customer demand from available stock — expressed as a Z-score in safety stock calculations and the primary commercial driver of inventory investment decisions.

## Why it matters
Amazon Prime targets 99.9% availability, requiring Z=3.09 in safety stock formulas — for a product with σ=20 units/day and a 2-day lead time, that means holding 87 units of safety stock per SKU across millions of products.

## Key takeaway
Service level targets are commercial commitments expressed as numbers — differentiating targets by SKU importance is the key to optimising the cost-service trade-off across the portfolio.`,

        "Seasonality Index": `## What is it?
A seasonality index is a multiplier quantifying how demand in a specific period compares to the annual average — enabling forecasting systems to automatically scale predictions up or down for recurring seasonal patterns.

## Why it matters
Cadbury's Easter egg seasonality index reaches 8.2× average weekly demand in March/April, driving a January–February production run that pre-builds 6 months of seasonal stock without post-Easter write-offs worth millions.

## Key takeaway
Seasonality indices prevent forecasting systems from being perpetually surprised by the same recurring demand patterns — the same preventable mistake repeated year after year.`,

        "Trend Coefficients": `## What is it?
Trend coefficients quantify the rate at which underlying demand is growing or declining over time — essential for projecting forecasts beyond the historical period without systematically over or under-predicting.

## Why it matters
A consumer electronics brand failed to damp a 3.2% weekly growth trend for long-horizon forecasting, producing a 40% over-forecast for 2021 and creating £8M of excess stock when growth plateaued — corrected by adding trend damping.

## Key takeaway
Trend is the most dangerous forecasting parameter to get wrong for long horizons — small systematic errors compound over months into massive over or under-production.`,

        "Safety Stock Parameters": `## What is it?
Safety stock parameters — service level Z-score, demand standard deviation, and lead time — are the inputs to SS = Z × σ × √LT, the formula that converts uncertainty into the physical inventory buffer protecting against stockouts.

## Why it matters
A pharma distributor recalculating safety stock parameters quarterly (vs annually) identified 30% of SKUs where actual demand variability had materially changed — right-sizing safety stock saved £1.8M in working capital while maintaining service levels.

## Key takeaway
Safety stock parameters are not set-and-forget — stale inputs silently create either stockouts or excess inventory across the entire portfolio as demand patterns evolve.`,

        "Reorder Point Inputs": `## What is it?
Reorder Point inputs — average daily demand, lead time, and safety stock — feed the formula ROP = (D × LT) + SS, which determines the exact inventory level at which a new purchase order must be triggered.

## Why it matters
A distributor recalculating ROPs annually found 35% of SKUs had significantly changed demand patterns since the last update — causing 420 stockouts and £600K in lost margin, fixed by moving to monthly automated recalculation.

## Key takeaway
A ROP correct 12 months ago may be dangerously wrong today — automated, frequent recalculation is essential for any business with dynamic demand or variable supplier lead times.`,

        "Minimum Order Quantity (MOQ)": `## What is it?
MOQ is the smallest quantity a supplier will produce or sell in a single order — a constraint that directly impacts how much inventory must be held and how frequently replenishment can occur regardless of EOQ.

## Why it matters
A fashion retailer negotiating MOQ from 5,000 to 1,500 units (accepting a 10% price premium) reduced markdown losses by £4M annually — proving that reducing MOQ often delivers more value than negotiating lower unit prices.

## Key takeaway
MOQ is the most overlooked inventory planning constraint — reducing it through supplier negotiation often delivers more value than months of demand forecasting improvement.`,

        "Supplier Lead Time Reliability": `## What is it?
Supplier lead time reliability measures how consistently a supplier delivers within the agreed lead time — quantified as On-Time Delivery % and lead time standard deviation, both direct inputs to safety stock calculations.

## Why it matters
A manufacturer's analysis showed their backup supplier (75% OTD, σLT=5 days) required 3× more safety stock than their primary supplier (95% OTD, σLT=2 days) — making the working capital cost of poor reliability explicitly visible for the first time.

## Key takeaway
A less reliable supplier is not just an operational headache — it is a quantifiable working capital cost that should directly inform sourcing and dual-supply strategy decisions.`,

        "Demand Variability (Standard Deviation)": `## What is it?
Demand variability, measured by standard deviation (σ), quantifies how much actual demand fluctuates around the average — the primary driver of safety stock requirements and the single biggest determinant of inventory investment across the portfolio.

## Why it matters
A grocery supplier found one key account drove 80% of demand variability through irregular ordering patterns — implementing a weekly ordering schedule reduced that SKU's σ by 45%, cutting safety stock by £400K and stockouts by 60% simultaneously.

## Key takeaway
Reducing demand variability at source through collaboration and ordering discipline is more powerful than increasing safety stock to cope with it after the fact.`,

        "Forecast Error Metrics (MAD, MSE, RMSE)": `## What is it?
MAD, MSE, and RMSE measure forecast error in absolute or squared units — MAD is most operationally useful because it directly converts into safety stock via SS = Z × 1.25 × MAD without needing demand distribution assumptions.

## Why it matters
A consumer goods company used MAD=850 units (weekly) to set safety stock at 1.65 × 850 = 1,403 units for 95% service level — directly translating forecast error into a specific physical inventory number that finance could cost and challenge.

## Key takeaway
MAD is the bridge between statistical accuracy measurement and physical inventory decisions — the metric that connects the forecast team to the warehouse.`,

        "Lifecycle Stage (New, Mature, Decline)": `## What is it?
Product lifecycle stage — introduction, growth, maturity, decline — determines the appropriate forecasting method, safety stock level, and inventory exit strategy, because demand behaviour is fundamentally different at each stage.

## Why it matters
Apple manages iPhone lifecycle with precision, ramping down safety stock on the current model 6 months before a new launch while simultaneously allocating production capacity to the replacement — minimising write-off and launch stockout risk across a £50B+ annual product transition.

## Key takeaway
Applying a mature-product forecasting strategy to a new or declining product is one of the most common and costly supply chain mistakes — lifecycle stage must always drive method selection.`
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
      overview: `## What is it?\nReplenishment planning determines when and how much to order to maintain optimal inventory levels.\n\n## Why it matters\nPoor replenishment leads to stockouts or overstock — the two most expensive outcomes in supply chain.\n\n## Key Concepts\n- ROP: Reorder Point — triggers an order\n- EOQ: Economic Order Quantity — optimal size\n- Safety Stock: buffer against variability\n- Min-Max: simple boundary system\n\n## Key Metrics / KPIs\n- Days of Supply (DOS)\n- Fill Rate %\n- Inventory Turns\n- Stock Cover vs Target`,
      topics: {
        "Reorder Point (ROP) Method": `## What is it?
The Reorder Point is the inventory level at which a new replenishment order must be placed — calculated as ROP = (Average daily demand × Lead time) + Safety stock — ensuring stock never runs out during the replenishment cycle.

## Why it matters
A medical distributor using automated ROP triggers for 5,000 SKUs maintains 99% availability on surgical supplies without manual intervention — orders fire automatically the moment stock hits the calculated threshold.

## Key takeaway
Get the ROP right and inventory runs itself; get it wrong and planners spend every day firefighting stockouts and expediting emergency orders.`,

        "Min-Max Planning": `## What is it?
Min-Max sets two inventory boundaries — a minimum level that triggers an order and a maximum level to order up to — providing a simple, rule-based replenishment system that is transparent and easy to operate at scale.

## Why it matters
A hospital pharmacy uses Min-Max for 800 drug SKUs, with the system scanning all items below minimum every morning and generating purchase orders automatically — freeing pharmacists entirely from manual stock management.

## Key takeaway
Min-Max is the right tool for simple, stable environments where transparency and operational ease outweigh the marginal gains of more sophisticated optimisation approaches.`,

        "Periodic Review Systems": `## What is it?
In periodic review, inventory is checked and orders placed at fixed time intervals (weekly, monthly) rather than continuously — trading some additional safety stock cost for the operational simplicity of a predictable ordering schedule.

## Why it matters
A retailer ordering from each supplier on a fixed weekly schedule consolidates freight, simplifies supplier relationships, and reduces transaction costs — accepting slightly higher safety stock as the cost of the operational simplicity gained.

## Key takeaway
Periodic review trades inventory efficiency for operational simplicity — the right choice when fixed-schedule ordering delivers consolidation savings that outweigh the extra buffer stock required.`,

        "Continuous Review Systems": `## What is it?
In continuous review, inventory is monitored in real time and a replenishment order triggers immediately whenever stock falls to the reorder point — minimising safety stock by reducing the exposure period to demand variability.

## Why it matters
Amazon uses continuous review across 350M+ SKUs — every customer purchase decrements inventory instantly, and when any ASIN at any fulfilment centre crosses its ROP, an automated purchase order fires without any human involvement.

## Key takeaway
Continuous review minimises safety stock and maximises responsiveness — the right system for high-value, fast-moving SKUs where stockout costs justify the investment in real-time monitoring.`,

        "Safety Stock Calculation": `## What is it?
Safety stock is the buffer inventory above average lead time demand, calculated as SS = Z × σ_demand × √Lead Time — protecting against stockouts caused by demand spikes or supply delays during the replenishment cycle.

## Why it matters
Amazon targets 99.9% Prime availability (Z=3.09) — for a product with σ=20 units/day and a 2-day lead time, safety stock = 87 units; reducing lead time to 1 day drops it to 62 units, a 29% reduction purely from supplier improvement.

## Key takeaway
Safety stock is the calculated cost of your service level commitment — the formula makes explicit exactly what each additional percentage point of availability costs in physical inventory.`,

        "Economic Order Quantity (EOQ)": `## What is it?
EOQ is the order quantity minimising total inventory cost — calculated as EOQ = √(2DS/H) where D=annual demand, S=order cost, H=holding cost — finding the point where ordering cost equals holding cost.

## Why it matters
A distributor ordering 500 units of an industrial fastener discovered their EOQ was 361 units — switching to EOQ-sized orders reduced total annual inventory cost by £1,800 per SKU, saving £7.2M across 4,000 SKUs.

## Key takeaway
EOQ is simple but powerful — even with approximate inputs it delivers far better results than gut-feel ordering quantities, and forces explicit recognition of both holding and ordering costs.`,

        "Multi-Echelon Inventory Optimization (MEIO)": `## What is it?
MEIO optimises inventory levels simultaneously across all levels of the supply network — factory, regional DC, local DC, and store — rather than independently optimising each location, treating the network as a system.

## Why it matters
HP implemented MEIO for their printer supply chain in the 1990s, pooling risky components centrally and configuring locally — reducing finished goods inventory by $120M while maintaining service levels, pioneering postponement in high-tech manufacturing.

## Key takeaway
Optimising each warehouse independently always produces a sub-optimal network — MEIO treats the supply chain as a system and unlocks inventory reductions that no amount of local optimisation can achieve.`,

        "Distribution Requirements Planning (DRP)": `## What is it?
DRP is a demand-driven planning method that projects future inventory levels at each distribution location and generates time-phased replenishment orders across the network — replacing reactive ordering with proactive planning.

## Why it matters
Nestle uses DRP across 12 regional DCs serving 50,000+ delivery points, projecting 13 weeks of requirements and automatically generating transfer orders — synchronising the entire distribution network on a weekly planning cycle.

## Key takeaway
DRP transforms replenishment from reactive (order when low) to proactive (plan requirements weeks ahead) — eliminating both stockouts and the emergency logistics costs that reactive replenishment inevitably creates.`
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
      overview: `## What is it?\nSupply chain tools and systems are software platforms enabling planning, execution, visibility, and analytics.\n\n## Why it matters\nManual planning breaks down at scale — modern systems process millions of data points in minutes.\n\n## Key Concepts\n- ERP: backbone system (SAP, Oracle)\n- APS: optimised supply/demand planning\n- WMS: warehouse operations\n- TMS: freight and routing\n\n## Key Metrics / KPIs\n- System adoption rate\n- Data accuracy %\n- Planning cycle time reduction`,
      topics: {
        "ERP Systems (SAP MM/PP/SD, Oracle SCM)": `## What is it?
ERP systems integrate all core business processes — finance, procurement, production, sales, and logistics — into a single connected platform, with SAP MM/PP/SD covering the end-to-end supply chain from purchase order to customer delivery.

## Why it matters
Nestle's SAP S/4HANA implementation across 80 countries reduced ERP instances from 80 to 1, standardised 900 business processes, and enabled procurement savings of over $700M annually through unified data and global visibility.

## Key takeaway
An ERP is only as good as its master data — every planning, procurement, and reporting process depends on accurate material masters, vendor data, and BOMs being maintained in real time.`,

        "Advanced Planning Systems (SAP APO, IBP, Blue Yonder)": `## What is it?
Advanced Planning Systems sit on top of ERP to deliver sophisticated demand forecasting, supply planning, and network optimisation — running complex algorithms across the full supply chain that standard ERP modules cannot perform.

## Why it matters
P&G implemented SAP APO reducing planning cycle time from 3 weeks to 3 days, improving forecast accuracy by 20%, and auto-generating replenishment plans for 50,000+ SKUs across 100+ manufacturing sites without manual intervention.

## Key takeaway
APS delivers its value through speed and optimisation — but requires clean ERP master data and disciplined process governance to realise the promised benefits.`,

        "Warehouse Management Systems (WMS)": `## What is it?
A WMS manages and optimises all warehouse operations in real time — directing goods receiving, put-away, storage, picking, packing, and despatch through barcode or RFID-confirmed transactions at every step.

## Why it matters
Ocado's proprietary WMS coordinates 1,000+ robots on a grid, picking a 50-item grocery order in under 5 minutes with 99.9% accuracy and processing 500,000+ order lines per hour — impossible with any manual or legacy system.

## Key takeaway
A WMS transforms a warehouse from a storage facility into a precision fulfilment engine — the difference between a 24-hour and a 1-hour pick-to-ship cycle time.`,

        "Transportation Management Systems (TMS)": `## What is it?
A TMS plans, executes, and optimises the physical movement of goods — managing carrier selection, route planning, freight booking, shipment tracking, and freight invoice validation against contracted rates.

## Why it matters
UPS's ORION TMS optimises 55,000 driver routes daily by avoiding left turns, saving 100M miles, 10M gallons of fuel, and 100,000 metric tons of CO2 annually — delivering commercial and environmental benefit simultaneously.

## Key takeaway
A TMS is one of the highest-ROI technology investments in logistics — route optimisation alone typically delivers 10–15% freight cost reduction within the first year of implementation.`,

        "Inventory Optimization Tools": `## What is it?
Inventory optimisation tools calculate mathematically optimal stock policies — safety stock, reorder points, and order quantities — across thousands of SKUs simultaneously, replacing rule-of-thumb targets with data-driven precision.

## Why it matters
Slimstock's Slim4 implementation at a Dutch retailer optimised 120,000 SKUs, reducing total inventory by 18% (€8M) while simultaneously improving service level from 94% to 97.2% — proving that optimisation improves both metrics at once.

## Key takeaway
Inventory optimisation tools pay for themselves rapidly — the gap between rule-of-thumb and mathematically optimal safety stock across a large portfolio is typically 15–25% inventory reduction.`,

        "Forecasting Tools (Forecast Pro, SAP IBP, Anaplan)": `## What is it?
Dedicated forecasting tools combine automatic statistical model selection, ML-powered baseline generation, collaborative override workflow, and accuracy tracking — all integrated with ERP and planning systems.

## Why it matters
A consumer goods company using Forecast Pro across 5,000 SKUs reduced MAPE from 35% to 19% — primarily through automatic model selection replacing manual moving average application and FVA analysis eliminating counterproductive commercial overrides.

## Key takeaway
The best forecasting tool is the one your team will actually use — usability, transparency, and ERP integration matter as much as algorithmic sophistication.`,

        "Power BI / Tableau for Analytics": `## What is it?
Power BI and Tableau connect to supply chain data sources — ERP, WMS, TMS, spreadsheets — to create interactive dashboards that make OTIF, forecast accuracy, inventory, and cost performance visible and actionable in real time.

## Why it matters
A FMCG company's Power BI supply chain control tower, refreshed daily from SAP, reduced weekly reporting time from 2 days to 2 hours — redirecting that time to exception management and supplier performance improvement.

## Key takeaway
Accessible, fast dashboards that answer the questions planners ask every day create far more value than complex reports nobody reads — visibility without action is just data.`,

        "Excel Advanced (Pivot, Solver, VBA)": `## What is it?
Advanced Excel — pivot tables, Power Query, Solver optimisation, and VBA macros — remains the most widely used supply chain analysis tool, bridging the gap between ERP data and operational decisions across every industry.

## Why it matters
A supply planner using Excel Solver to optimise production across 3 lines with 12 product constraints found solutions in 30 seconds vs 4 hours of manual scheduling — consistently 8% more efficient than the best manual approach.

## Key takeaway
Excel mastery is the most universally valuable supply chain skill — it empowers planners to answer their own questions without IT, and a skilled user can solve in hours what takes months to configure in a planning system.`
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
      overview: `## What is it?\nSupply chain analytics uses mathematical modelling and algorithms to find optimal solutions to complex problems.\n\n## Why it matters\nOptimisation finds mathematically proven solutions — reducing costs in ways human intuition cannot achieve.\n\n## Key Concepts\n- Linear Programming: optimise subject to constraints\n- Network Optimisation: optimal facility locations\n- Simulation: model uncertainty risk-free\n- Routing Optimisation: TSP, VRP\n\n## Key Metrics / KPIs\n- Cost reduction achieved\n- Service level improvement\n- Network efficiency score`,
      topics: {
        "Linear Programming (LP)": `## What is it?
Linear Programming finds the mathematically optimal outcome — maximum profit or minimum cost — subject to a set of linear constraints, using the simplex algorithm to identify the best feasible solution across all decision variables simultaneously.

## Why it matters
FedEx uses LP to optimise package routing across 650+ aircraft daily, assigning 15M+ packages to flights while minimising total cost and meeting delivery time guarantees — even a 1% improvement from better LP formulation saves tens of millions annually.

## Key takeaway
LP turns complex multi-variable decisions into mathematically proven optimal solutions — essential for any supply chain problem with a clear objective and measurable constraints.`,

        "Mixed Integer Programming (MIP)": `## What is it?
MIP extends Linear Programming to include integer and binary (yes/no) decision variables — essential for supply chain decisions involving discrete choices like facility locations, number of vehicles, or open/close decisions.

## Why it matters
Amazon uses MIP to decide which fulfilment centres should hold each ASIN, balancing storage cost, inbound freight, and last-mile delivery cost for every SKU-FC combination — making billions of binary placement decisions that reduce total fulfilment cost by hundreds of millions annually.

## Key takeaway
MIP is the tool for strategic supply chain decisions involving discrete choices — network design, fleet sizing, and facility location problems that Linear Programming cannot handle.`,

        "Network Optimization Models": `## What is it?
Network optimisation determines the optimal supply chain configuration — number and location of facilities, customer-to-DC assignments, and product flow — to minimise total cost while meeting service level requirements across the network.

## Why it matters
P&G used network optimisation to redesign their European distribution network, identifying that reducing from 13 to 5 regional DCs cut total logistics cost by 17% through scale economies — while actually improving next-day service to 98% of retailers.

## Key takeaway
Network optimisation reveals that the current supply chain structure is usually a historical accident — significant cost and service improvements are consistently achievable by designing from first principles.`,

        "Simulation Models (Arena, AnyLogic)": `## What is it?
Supply chain simulation uses discrete event or agent-based models to replicate the behaviour of complex supply systems under uncertainty — testing designs and policies in a risk-free virtual environment before committing to real-world implementation.

## Why it matters
Boeing used AnyLogic simulation to model their 787 Dreamliner supply chain before it went live, identifying a supplier quality reject rate that would cascade into production delays — the simulation revealed the bottleneck 18 months early, preventing a £500M schedule impact.

## Key takeaway
Simulation is supply chain's flight simulator — crash the plane a thousand times in software and fix every flaw before putting passengers on board.`,

        "Cost-to-Serve Modeling": `## What is it?
Cost-to-Serve analysis calculates the true, fully-loaded cost of servicing each customer, channel, or product using activity-based costing — revealing which commercial relationships are genuinely profitable and which destroy value.

## Why it matters
Unilever's CtS analysis revealed small independent retailers cost 4× more to serve than major grocery chains — restructuring small-trade service models, delivery frequency, and minimum order values improved small-trade profitability by 12 percentage points.

## Key takeaway
Without CtS analysis, companies systematically cross-subsidise unprofitable customers with profitable ones — CtS makes the invisible visible and enables genuinely profit-driven commercial decisions.`,

        "Scenario Planning & Sensitivity Analysis": `## What is it?
Scenario planning tests how supply chain performance changes under different future assumptions (base, optimistic, stress), while sensitivity analysis identifies which input variables have the greatest impact on cost or service outcomes.

## Why it matters
Unilever's pre-built disruption scenarios enabled production switching between categories within 72 hours of COVID-19 lockdowns — protecting £200M+ of revenue that competitors without pre-modelled scenarios lost to stockouts.

## Key takeaway
Scenario planning is insurance against being surprised by the future — teams that model disruptions before they happen respond faster, cheaper, and more effectively than those starting from scratch in a crisis.`,

        "Routing Optimization (TSP, VRP)": `## What is it?
Routing optimisation finds the most efficient routes for vehicles to deliver goods — TSP for single-vehicle problems and VRP for multi-vehicle fleets with capacity constraints and customer time windows — minimising distance, time, or cost.

## Why it matters
UPS's ORION routing system saves 100M miles annually by optimising 55,000 driver routes and strategically avoiding left turns — saving 10M gallons of fuel and 100,000 metric tons of CO2 while reducing cost per delivery.

## Key takeaway
Routing optimisation is one of the highest-ROI analytical applications in logistics — a 5–10% efficiency gain compounds across thousands of vehicles and millions of deliveries into massive annual savings.`,

        "Inventory Optimization Algorithms": `## What is it?
Inventory optimisation algorithms calculate mathematically optimal stock policies for every SKU — using the newsvendor model, (s,S) policies, and dynamic programming to minimise total inventory cost subject to service level constraints.

## Why it matters
Zara's inventory algorithm manages 12,000 new styles per year using a newsvendor framework — deliberately under-producing to avoid markdowns and accepting intentional stockouts on popular items to preserve scarcity, brand positioning, and margin.

## Key takeaway
Inventory optimisation replaces guesswork with data-driven policies that simultaneously reduce cost and improve service — the mathematical proof that you do not have to choose between the two.`
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
      overview: `## What is it?\nModern supply chain leverages AI, IoT, blockchain, digital twins, and robotics to create faster, smarter, more resilient supply chains.\n\n## Why it matters\nEarly adopters gain structural cost and service advantages very difficult to compete with.\n\n## Key Concepts\n- AI/ML: autonomous planning and demand sensing\n- Digital Twin: real-time virtual replica\n- IoT: end-to-end sensor visibility\n- Blockchain: immutable traceability\n\n## Key Metrics / KPIs\n- Automation rate %\n- Visibility coverage %\n- Scope 3 emissions reduction`,
      topics: {
        "AI & Machine Learning in Supply Chain": `## What is it?
AI and ML in supply chain use algorithms trained on historical data to automate routine decisions, improve demand forecasts, predict supply risks, and optimise operations continuously — shifting supply chains from reactive to predictive.

## Why it matters
Amazon's anticipatory shipping model uses ML to pre-position products in regional fulfilment centres before orders are placed — based on browsing behaviour and demand signals — reducing delivery time by 40% and cutting last-mile cost per order.

## Key takeaway
AI does not replace supply chain planners — it eliminates routine decisions so planners can focus on the exceptions, relationships, and strategic choices that genuinely require human judgment.`,

        "Digital Twins": `## What is it?
A digital twin is a real-time virtual replica of the physical supply chain — continuously updated from sensors, ERP data, and IoT feeds — used for simulation, disruption response, and optimisation without touching live operations.

## Why it matters
Unilever built a digital twin of their global supply chain in 2022 — when a key port closed, it ran 1,000 rerouting scenarios in minutes and identified the optimal alternative, saving an estimated $50M vs the reactive manual response competitors were forced to execute.

## Key takeaway
A digital twin turns supply chain management from reactive to proactive — you can see the impact of tomorrow's disruptions before they happen and test your response before committing.`,

        "Control Towers & Real-Time Visibility": `## What is it?
A supply chain control tower aggregates real-time data from ERP, WMS, TMS, supplier portals, and carrier APIs into a single dashboard — using AI-powered exception management to alert planners to risks before they become customer service failures.

## Why it matters
During COVID port congestion, Maersk TradeLens customers rerouted shipments 5–7 days faster than those relying on manual status checks — avoiding weeks of costly port demurrage charges by acting on real-time visibility rather than estimated arrivals.

## Key takeaway
Visibility without action is just data — the value of a control tower is the speed of exception detection and the quality of the coordinated response it enables across suppliers, carriers, and customers.`,

        "IoT in Logistics": `## What is it?
IoT uses connected sensors to track the physical location, condition, and status of goods, vehicles, and assets in real time — providing supply chain visibility that was previously impossible without human intervention at every step.

## Why it matters
Maersk deploys 300,000+ Remote Container Management units monitoring temperature, humidity, and O₂ every 15 minutes — detecting reefer failures within minutes of occurrence and reducing perishable cargo loss by 30% and customer claims by £150M annually.

## Key takeaway
IoT transforms logistics from assumption-based to fact-based — replacing estimated ETAs and guessed temperatures with real data that drives faster, more accurate supply chain decisions.`,

        "Blockchain for Traceability": `## What is it?
Blockchain creates an immutable, shared ledger of supply chain events across multiple parties — enabling trusted traceability without a central authority, where every transaction is permanently recorded and visible to all network participants.

## Why it matters
Walmart uses IBM Food Trust blockchain to trace leafy green provenance — what previously took 7 days to identify (which farm produced a contaminated bag of spinach) now takes 2.2 seconds, dramatically reducing recall scope and preventing destruction of safe product worth millions.

## Key takeaway
Blockchain is most valuable in multi-party supply chains where trust is low and reconciliation is costly — food safety, pharma serialisation, and trade finance are the proven high-value use cases.`,

        "Autonomous Planning Systems": `## What is it?
Autonomous planning systems use AI to make supply chain decisions — replenishment orders, production schedules, inventory reallocation — without human intervention, operating continuously at machine speed and flagging only true exceptions for review.

## Why it matters
Unilever's autonomous ordering system generates 80% of purchase orders without planner involvement across 70,000+ SKUs and 190 markets — freeing 300+ planner hours per week that are redirected to exception management and strategic supplier development.

## Key takeaway
Autonomous planning redirects supply chain planners from data processing to decision-making — from reactive firefighting to the proactive, strategic supply chain management that creates genuine competitive advantage.`,

        "Robotics & Automation in Warehousing": `## What is it?
Warehouse robotics uses AMRs, robotic arms, AS/RS systems, and automated sorters to perform physical tasks — picking, packing, storing, and moving goods — faster, more accurately, and at lower cost than human labour at scale.

## Why it matters
Amazon operates 750,000+ robots across 1,000+ fulfilment centres — Kiva robots bring shelving pods to pickers, reducing travel time by 75% and enabling 300–400 picks per hour vs 100 manually, at 50% lower cost per pick than traditional warehouses.

## Key takeaway
Warehouse automation makes existing workers dramatically more productive — creating fulfilment capabilities in speed, accuracy, and 24/7 operation that manual warehouses simply cannot match.`,

        "Sustainability & Green Supply Chain": `## What is it?
Sustainable supply chain management integrates environmental, social, and governance considerations into supply chain decisions — measuring and reducing Scope 3 emissions, eliminating waste, and ensuring ethical sourcing across the entire supply base.

## Why it matters
IKEA targets climate positivity by 2030 — sourcing 100% renewable energy, switching to wind-powered ocean vessels, designing all products for disassembly and recycling, and requiring all 1,600+ suppliers to commit to science-based emissions targets.

## Key takeaway
Sustainability is no longer optional in supply chain — regulatory requirements, customer expectations, and investor pressure are making ESG performance a commercial differentiator and a compliance requirement simultaneously.`
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
      overview: `## What is it?\nIndustry knowledge covers unique supply chain characteristics, challenges, and best practices across different sectors.\n\n## Why it matters\nEvery industry has different demand patterns, regulations, and customer expectations.\n\n## Key Concepts\n- FMCG: high volume, short shelf life, promotions\n- Pharma: cold chain, serialisation, compliance\n- Automotive: JIT, Tier networks, long lead times\n- E-commerce: same-day expectations, returns\n\n## Key Metrics / KPIs\n- Industry service level benchmarks\n- Regulatory compliance rate\n- Category fill rate`,
      topics: {
        "Retail Supply Chain": `## What is it?
Retail supply chain manages the flow of thousands of SKUs from hundreds of suppliers through distribution networks to store shelves — balancing seasonal demand peaks, promotional volatility, planogram compliance, and the growing complexity of omnichannel fulfilment.

## Why it matters
Tesco manages 90,000 SKUs across 3,800 stores with a 24-hour replenishment cycle, processing 2.5M cases per day through their DC network — a scale that requires fully automated demand sensing, replenishment, and DC orchestration.

## Key takeaway
Retail supply chain success is built on data — POS visibility, accurate demand forecasting, and tight supplier collaboration are the foundation of high availability at low inventory cost.`,

        "E-commerce Fulfillment": `## What is it?
E-commerce fulfilment covers the complete process from receiving an online order to delivering it to the customer — warehousing, picking, packing, shipping, carrier management, and handling the 20–30% return rates that define online retail economics.

## Why it matters
Amazon's Prime fulfilment network processes 1.6M+ orders per day using 750,000+ robots — their 1–2 day delivery promise is only possible by pre-positioning inventory using ML demand predictions before the customer even places the order.

## Key takeaway
E-commerce fulfilment is won or lost in the last mile — accounting for 40–50% of total fulfilment cost, it is the most expensive, most visible, and most operationally complex part of the customer delivery experience.`,

        "Manufacturing Supply Chain": `## What is it?
Manufacturing supply chain integrates the inbound flow of raw materials, production planning and scheduling, and outbound distribution of finished goods — connecting purchasing, MRP, production execution, and logistics into a continuous flow.

## Why it matters
Toyota's Production System — kanban pull replenishment, JIT delivery, and continuous improvement — reduced WIP inventory to hours rather than weeks, and after the 2011 earthquake their supply chain recovery was 6 weeks faster than all global competitors.

## Key takeaway
Manufacturing supply chain excellence is built on flow — eliminating anything that interrupts the smooth, continuous conversion of materials into finished products in the hands of customers.`,

        "Pharma & Cold Chain Logistics": `## What is it?
Pharma supply chain involves highly regulated storage, handling, and distribution with strict temperature requirements — cold chain maintaining defined ranges from manufacture to patient — full serialisation traceability, and mandatory GDP compliance throughout.

## Why it matters
Pfizer's COVID-19 vaccine required storage at -70°C and was delivered to 170+ countries in 18 months — the fastest and most complex global cold chain deployment in history, involving custom thermal shippers and a purpose-built global distribution network.

## Key takeaway
In pharma supply chain, a quality or cold chain failure is a patient safety issue — making regulatory compliance and temperature integrity non-negotiable requirements, not operational targets.`,

        "FMCG Supply Chain": `## What is it?
FMCG supply chain manages high-volume, short-shelf-life products — food, beverages, personal care — with the defining challenge of balancing razor-thin margins, intense promotional complexity, and near-perfect service level requirements from major retailers.

## Why it matters
Unilever manages 70,000+ SKUs across 190 markets — during COVID lockdowns, their demand sensing capability using social media and pharmacy sales data enabled production switching between categories within 72 hours, protecting £200M+ of revenue.

## Key takeaway
FMCG supply chain is the most demanding balance between cost and service in commercial supply chain — margins are thin and retailer expectations are unforgiving, making operational excellence a genuine source of competitive advantage.`,

        "Automotive Supply Chain": `## What is it?
Automotive supply chain is defined by deep multi-tier supplier networks, JIT sequenced delivery to assembly lines, very long tooling lead times of 18–36 months, and catastrophic consequences of any supply failure — one missing part stops the entire production line.

## Why it matters
During the 2021 semiconductor shortage, Toyota held 2–6 months of safety stock on critical chips (a lesson from the 2011 earthquake) — maintaining production while GM, Ford, and VW shut assembly lines and collectively lost over 1M units of production.

## Key takeaway
Automotive supply chain teaches the definitive lesson in risk management — JIT minimises cost in normal times but safety stock prevents catastrophe in abnormal times, and the cost of failure dwarfs the savings of leanness.`,

        "Global Trade Compliance": `## What is it?
Global trade compliance ensures all cross-border goods movement complies with import and export regulations, customs requirements, trade agreements, and sanctions — using correct HS codes, valuation, origin rules, and documentation for every shipment.

## Why it matters
Post-Brexit, companies with pre-classified HS codes, established customs brokers, and automated declarations maintained delivery times — those without faced weeks of delays at Dover, £10,000+ demurrage per container, and perishable cargo losses.

## Key takeaway
Global trade compliance is invisible when working and catastrophically visible when it fails — cheaper to invest in proactively than to fix reactively when shipments are held at borders.`,

        "Incoterms & Customs Documentation": `## What is it?
Incoterms are standardised trade terms defining who bears responsibility for shipping costs, insurance, and risk at each stage of international transport — from EXW (buyer takes all risk) to DDP (seller responsible for everything including import duties).

## Why it matters
A UK importer on DDP terms had no visibility of ocean freight costs — when shipping rates tripled in 2021, the cost increase was built invisibly into product prices, revealing that Incoterm selection has direct P&L implications beyond just legal risk allocation.

## Key takeaway
Incoterms are strategic supply chain decisions, not standard contract clauses — they define where commercial risk sits, who controls logistics, and ultimately who absorbs the cost when things go wrong in international trade.`
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
