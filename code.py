# ============================================================
# TASK 1: LINEAR REGRESSION – House Price Estimator
# ============================================================

import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error

# ── Dataset ───────────────────────────────────────────────────
size  = np.array([600,800,1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000])
price = np.array([150000,180000,210000,240000,275000,310000,340000,
                  375000,410000,440000,470000,505000,540000])

X = size.reshape(-1,1);  y = price

# ── Model ─────────────────────────────────────────────────────
model = LinearRegression().fit(X, y)
slope, intercept = model.coef_[0], model.intercept_

# ── Predict 2000 sq ft ────────────────────────────────────────
pred_price = model.predict([[2000]])[0]
y_pred     = model.predict(X)

mae = mean_absolute_error(y, y_pred)
mse = mean_squared_error(y, y_pred)

print("="*55)
print("  TASK 1 – Linear Regression: House Price Estimator")
print("="*55)
print(f"\n  Slope        : ${slope:,.2f} per sq ft")
print(f"  Intercept    : ${intercept:,.2f}")
print(f"\n  Predicted price for 2000 sq ft : ${pred_price:,.2f}")
print(f"\n  MAE  : ${mae:,.2f}")
print(f"  MSE  : ${mse:,.2f}")
print(f"  RMSE : ${np.sqrt(mse):,.2f}")

# ── Plot ──────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(9,5))
ax.scatter(size, price, color='steelblue', s=80, zorder=5, label='Actual Data')
ax.plot(size, y_pred, color='tomato', lw=2.5, label='Regression Line')
ax.scatter([2000],[pred_price], color='gold', s=180, edgecolors='black',
           zorder=6, label=f'Prediction: ${pred_price:,.0f}')
ax.set_title('House Price vs Size – Linear Regression', fontsize=14, fontweight='bold')
ax.set_xlabel('Size (sq ft)'); ax.set_ylabel('Price ($)')
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v,_: f'${v:,.0f}'))
ax.legend(); ax.grid(True, ls='--', alpha=0.5)
plt.tight_layout()
plt.savefig('/home/claude/task1_plot.png', dpi=150)
print("\n  Plot saved → task1_plot.png")

print("""
CONCEPTUAL ANSWERS
─────────────────────────────────────────────────────────
Q1. What does slope represent?
    Slope ≈ $175/sq ft means every extra 1 sq ft adds ~$175
    to the predicted price. It is the marginal price per unit.

Q2. What happens if size increases?
    Price increases proportionally (linearly).
    Every 100 sq ft added ≈ $17,500 more in price.
─────────────────────────────────────────────────────────
""")