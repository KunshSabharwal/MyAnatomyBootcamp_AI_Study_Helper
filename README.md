# 🧠 MyAnatomyBootcamp AI Study Helper

> 🚀 _An AI-powered anatomy learning assistant built during a 2-day hands-on bootcamp conducted by MyAnatomy at our college._

---

## 📌 Overview

**MyAnatomyBootcamp AI Study Helper** is an intelligent educational tool designed to simplify complex human anatomy concepts using **Artificial Intelligence and Deep Learning**.

This project was developed during a **2-day intensive bootcamp organized by the organization `MyAnatomy`**, where mentors guided us through building an end-to-end AI-based study helper system. The bootcamp focused on combining **medical learning with modern AI techniques**, giving us both theoretical insights and practical implementation experience.

The system aims to:

- Enhance conceptual clarity in anatomy
- Improve retention through intelligent assistance
- Provide explainable AI-driven insights

---

## 🎯 Bootcamp Context

- 🏫 Conducted at our college by **MyAnatomy Organization**
- ⏱️ Duration: **2 Days**
- 👨‍🏫 Guided by industry mentors and experts
- 🛠️ Outcome: Built a functional **AI-powered anatomy study helper**

This project reflects both **learning and implementation under time constraints**, showcasing rapid prototyping and applied AI skills.

## 🏗️ Project Architecture

```mermaid
flowchart LR
    A[Input Data] --> B[Preprocessing]
    B --> C[Image Model (CNN/VGG)]
    B --> D[Metadata Model (Dense Layers)]
    C --> E[Fusion Layer]
    D --> E
    E --> F[Prediction Output]
    F --> G[Explainability (LIME/SHAP)]
🧰 Tech Stack
Category	Tools & Technologies
💻 Language	Python
🧠 ML Frameworks	TensorFlow / PyTorch
🖼️ Computer Vision	CNN, VGG16
📊 Data Handling	NumPy, Pandas
📈 Visualization	Matplotlib
🔍 Explainability	SHAP, LIME
☁️ Platform	Kaggle / Google Colab
📂 Project Structure
MyAnatomyBootcamp_AI_Study_Helper/
│
├── data/                # Dataset (images + metadata)
├── notebooks/           # Training & experiments
├── models/              # Saved models
├── utils/               # Helper functions
├── explainability/      # SHAP & LIME code
├── results/             # Outputs and plots
└── README.md
🚀 Getting Started
🔧 Installation
git clone https://github.com/KunshSabharwal/MyAnatomyBootcamp_AI_Study_Helper.git
cd MyAnatomyBootcamp_AI_Study_Helper
pip install -r requirements.txt
▶️ Run the Project
# Run notebooks
jupyter notebook

# Or run script
python train.py
📊 Model Workflow
📥 Load dataset (images + metadata)
🧹 Preprocess data
🧠 Train hybrid model
📈 Evaluate performance
🔍 Apply SHAP / LIME
📊 Visualize insights
🧪 Results
✅ Achieved high accuracy (~96–97%)
📉 Reduced loss using hybrid architecture
🔍 Improved interpretability using XAI
📊 Better generalization with metadata integration
🧠 Explainable AI
🔍 SHAP
Measures feature importance
Provides global + local explanations
🔍 LIME
Explains individual predictions
Helps understand decision boundaries

📌 Crucial for trust in medical AI systems.

🎯 Use Cases
📚 Anatomy exam preparation
🧬 Biomedical AI research
🤖 AI + Healthcare projects
🏥 Future clinical decision support
🔮 Future Enhancements
🌐 Web / mobile deployment
🗣️ AI tutor integration
🧠 Transformer-based models
📊 Personalized learning analytics
🤝 Contributing
git checkout -b feature-name
git commit -m "Added new feature"
git push origin feature-name
📜 License

MIT License

👨‍💻 Author

Kunsh Sabharwal

⭐ Support

If you found this useful:

⭐ Star the repo
🍴 Fork it
📢 Share it
💡 Acknowledgement

Special thanks to MyAnatomy Organization for conducting the bootcamp and guiding us through building this project within just two days. The experience provided valuable exposure to AI in healthcare and rapid prototyping.

“Learning becomes powerful when AI meets human curiosity.”
```
