import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error

size = np.array([1000, 1200, 1500, 1800, 2000, 2200, 2500, 2800]).reshape(-1, 1)
price = np.array([150000, 180000, 200000, 240000, 270000, 300000, 330000, 360000])

model = LinearRegression()
model.fit(size, price)

predicted_prices = model.predict(size)

price_2000 = model.predict([[2000]])
print("Predicted price for 2000 sq ft house:", price_2000[0])

mae = mean_absolute_error(price, predicted_prices)
mse = mean_squared_error(price, predicted_prices)

print("MAE:", mae)
print("MSE:", mse)

print("Slope:", model.coef_[0])
print("Intercept:", model.intercept_)

plt.scatter(size, price)
plt.plot(size, predicted_prices)
plt.title('House Price Estimator using Linear Regression')
plt.xlabel('Size (sq ft)')
plt.ylabel('Price')
plt.show()